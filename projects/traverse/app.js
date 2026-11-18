/**
 * TRAVERSE — Uncertain Archive WebGL Engine
 * Inspired by Olafur Eliasson's "Your uncertain archive"
 *
 * Renders all cover-image posts in an interactive 3D space with smooth morphing
 * between:
 *   1. Uncertain Cloud (thematic molecular clustering + organic drift)
 *   2. Time Helix (chronological 3D spiral through the years)
 *   3. Archive Matrix (structured 3D grid wall)
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. Parse & Prepare Archive Data
  // ---------------------------------------------------------------------------
  const rawDataEl = document.getElementById('archive-data');
  let posts = [];
  try {
    posts = JSON.parse(rawDataEl ? rawDataEl.textContent : '[]');
  } catch (err) {
    console.error('Failed to parse archive JSON:', err);
  }

  // Filter strictly to posts with valid cover images
  posts = posts.filter((p) => p && p.image && String(p.image).trim().length > 0);

  // Normalize tags (lowercase trimmed) & clean image URLs
  posts.forEach((p, idx) => {
    p.index = idx;
    p.tags = Array.isArray(p.tags)
      ? p.tags.map((t) => String(t).toLowerCase().trim()).filter(Boolean)
      : [];
    if (p.tags.length === 0) {
      p.tags = [p.category ? String(p.category).toLowerCase() : 'untagged'];
    }
    p.primaryTag = p.tags[0];
    // Strip trailing quotes or spaces in markdown image URLs if any
    p.image = String(p.image).split('"')[0].trim();
    p.thumbUrl = getOptimizedThumbUrl(p.image);
  });

  /**
   * Downsizes Flickr _c / _b URLs to _w (400px) for fast WebGL texture loading,
   * while keeping the original high-res URL for the preview drawer.
   */
  function getOptimizedThumbUrl(url) {
    if (url.includes('live.staticflickr.com')) {
      return url.replace(/_[cbz]\.(jpg|png|gif)$/i, '_w.$1');
    }
    return url;
  }

  // ---------------------------------------------------------------------------
  // 2. Compute Tag Clusters & Color Palette
  // ---------------------------------------------------------------------------
  const PALETTE = [
    '#f59e0b', // amber
    '#38bdf8', // sky
    '#a855f7', // purple
    '#10b981', // emerald
    '#f43f5e', // rose
    '#eab308', // yellow
    '#06b6d4', // cyan
    '#ec4899', // pink
    '#84cc16', // lime
    '#6366f1', // indigo
    '#fb923c', // orange
    '#14b8a6'  // teal
  ];

  const tagFreq = new Map();
  posts.forEach((p) => {
    p.tags.forEach((t) => {
      tagFreq.set(t, (tagFreq.get(t) || 0) + 1);
    });
  });

  const sortedTags = Array.from(tagFreq.entries())
    .sort((a, b) => b[1] - a[1]);

  const tagColorMap = new Map();
  sortedTags.forEach(([tag], i) => {
    tagColorMap.set(tag, PALETTE[i % PALETTE.length]);
  });

  function getPostColor(post) {
    // Pick the most frequent tag on this post for cluster stability
    let bestTag = post.primaryTag;
    let bestCount = -1;
    post.tags.forEach((t) => {
      const c = tagFreq.get(t) || 0;
      if (c > bestCount) {
        bestCount = c;
        bestTag = t;
      }
    });
    post.clusterTag = bestTag;
    return tagColorMap.get(bestTag) || '#94a3b8';
  }

  posts.forEach((p) => {
    p.colorHex = getPostColor(p);
  });

  // ---------------------------------------------------------------------------
  // 3. Three.js Scene, Camera & Custom Orbit/Pan Controller
  // ---------------------------------------------------------------------------
  const container = document.getElementById('canvas-container');
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x090a0f, 0.00065);

  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    4000
  );

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x090a0f, 1);
  container.appendChild(renderer.domElement);

  // Camera state (spherical orbit around a movable target point)
  const camState = {
    target: new THREE.Vector3(0, 0, 0),
    goalTarget: new THREE.Vector3(0, 0, 0),
    spherical: new THREE.Spherical(340, Math.PI * 0.48, 0.15),
    goalSpherical: new THREE.Spherical(340, Math.PI * 0.48, 0.15),
    autoRotate: true,
    isDragging: false,
    dragMode: 'orbit', // 'orbit' or 'pan'
    prevMouse: { x: 0, y: 0 },
    downMouse: { x: 0, y: 0 }
  };

  // Ambient dust particles for spatial depth cues
  function createAmbientParticles() {
    const count = 550;
    const geom = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 1400;
    }
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x64748b,
      size: 1.6,
      transparent: true,
      opacity: 0.35
    });
    const points = new THREE.Points(geom, mat);
    scene.add(points);
  }
  createAmbientParticles();

  // ---------------------------------------------------------------------------
  // 4. Compute Spatial Layouts: Cluster Cloud, Helix, Grid
  // ---------------------------------------------------------------------------
  // Deterministic pseudo-random helper so layouts feel organic but consistent
  function seededRandom(seed) {
    const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
    return x - Math.floor(x);
  }

  // Assign each cluster tag an anchor center in 3D space
  const clusterCenters = new Map();
  const topClusters = sortedTags.slice(0, 14).map((e) => e[0]);
  topClusters.forEach((tag, idx) => {
    const phi = Math.acos(1 - (2 * (idx + 0.5)) / topClusters.length);
    const theta = Math.PI * (1 + Math.sqrt(5)) * idx;
    const radius = 90;
    clusterCenters.set(
      tag,
      new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi) * 0.75,
        radius * Math.sin(phi) * Math.sin(theta)
      )
    );
  });

  // Group for 3D floating cluster beacons & labels (visible in Cluster Cloud mode)
  const clusterLabelsGroup = new THREE.Group();
  scene.add(clusterLabelsGroup);
  const clusterSprites = [];

  function createClusterLabelSprite(tag, count, colorHex, centerPos) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // Pill badge background
    const text = `#${tag.toUpperCase()} (${count})`;
    ctx.font = '700 32px "JetBrains Mono", monospace';
    const textWidth = ctx.measureText(text).width;
    const pillW = Math.min(490, textWidth + 64);
    const pillH = 68;
    const pillX = (512 - pillW) / 2;
    const pillY = (128 - pillH) / 2;

    ctx.fillStyle = 'rgba(10, 13, 20, 0.85)';
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(pillX, pillY, pillW, pillH, 34);
    } else {
      ctx.rect(pillX, pillY, pillW, pillH);
    }
    ctx.fill();

    ctx.lineWidth = 3;
    ctx.strokeStyle = colorHex;
    ctx.stroke();

    // Glowing dot
    ctx.fillStyle = colorHex;
    ctx.beginPath();
    ctx.arc(pillX + 26, 64, 8, 0, Math.PI * 2);
    ctx.fill();

    // Label text
    ctx.fillStyle = '#f8fafc';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, pillX + 46, 65);

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      opacity: 0.92,
      depthTest: false
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(44, 11, 1);
    sprite.position.set(centerPos.x, centerPos.y + 30, centerPos.z);
    sprite.userData = { tag };
    clusterLabelsGroup.add(sprite);
    clusterSprites.push(sprite);
  }

  topClusters.forEach((tag) => {
    const center = clusterCenters.get(tag);
    const count = posts.filter((p) => p.clusterTag === tag).length;
    if (center && count > 0) {
      createClusterLabelSprite(
        tag,
        count,
        tagColorMap.get(tag) || '#f59e0b',
        center
      );
    }
  });

  function computeLayouts() {
    const total = posts.length;
    const gridCols = Math.ceil(Math.sqrt(total * 1.45));
    const gridRows = Math.ceil(total / gridCols);
    const spacingX = 24;
    const spacingY = 18;

    // Group posts by clusterTag so we can pack each cluster cleanly around its center
    const clusterGroups = new Map();
    posts.forEach((p) => {
      if (!clusterGroups.has(p.clusterTag)) {
        clusterGroups.set(p.clusterTag, []);
      }
      clusterGroups.get(p.clusterTag).push(p);
    });

    posts.forEach((p, i) => {
      const r1 = seededRandom(i * 3 + 1);
      const r2 = seededRandom(i * 3 + 2);
      const r3 = seededRandom(i * 3 + 3);

      // --- Layout 1: CLUSTER CLOUD (Distinct Thematic Islands) ---
      const center =
        clusterCenters.get(p.clusterTag) || new THREE.Vector3(0, 0, 0);
      const siblings = clusterGroups.get(p.clusterTag) || [p];
      const idxInCluster = siblings.indexOf(p);
      const countInCluster = siblings.length;

      // Distribute cards within a tight spherical island around the cluster center
      const phi = Math.acos(
        1 - (2 * (idxInCluster + 0.5)) / Math.max(1, countInCluster)
      );
      const theta = Math.PI * (1 + Math.sqrt(5)) * idxInCluster + r1 * 0.4;
      const maxSpread = Math.min(28, 10 + Math.sqrt(countInCluster) * 3.2);
      const spread = 8 + (0.35 + 0.65 * r3) * maxSpread;

      p.posCloud = new THREE.Vector3(
        center.x + spread * Math.sin(phi) * Math.cos(theta),
        center.y + spread * Math.cos(phi) * 0.85,
        center.z + spread * Math.sin(phi) * Math.sin(theta)
      );

      // --- Layout 2: TIME HELIX (Chronological Spiral) ---
      const t = i / Math.max(1, total - 1);
      const angle = i * 0.42;
      const helixRadius = 95 + Math.sin(t * Math.PI) * 30;
      const ySpan = 340;
      p.posHelix = new THREE.Vector3(
        Math.cos(angle) * helixRadius,
        (0.5 - t) * ySpan,
        Math.sin(angle) * helixRadius
      );

      // --- Layout 3: ARCHIVE MATRIX (Structured 3D Wall) ---
      const col = i % gridCols;
      const row = Math.floor(i / gridCols);
      const gx = (col - (gridCols - 1) / 2) * spacingX;
      const gy = ((gridRows - 1) / 2 - row) * spacingY;
      // Subtle parabolic curve so the matrix wraps gently around the viewer
      const curveZ = -Math.pow(gx / 210, 2) * 35;
      p.posGrid = new THREE.Vector3(gx, gy, curveZ);
    });
  }
  computeLayouts();

  // ---------------------------------------------------------------------------
  // 5. Build 3D Post Card Meshes & Fallback/Async Textures
  // ---------------------------------------------------------------------------
  const nodesGroup = new THREE.Group();
  scene.add(nodesGroup);

  const CARD_W = 16;
  const CARD_H = 11;
  const sharedCardGeom = new THREE.PlaneGeometry(CARD_W, CARD_H);
  const sharedBorderGeom = new THREE.PlaneGeometry(CARD_W + 0.7, CARD_H + 0.7);

  /**
   * Generates a crisp canvas placeholder texture with the post's title, year,
   * and cluster accent color. Used immediately before the photo finishes loading
   * (or as a permanent fallback if an older external domain blocks CORS).
   */
  function createFallbackTexture(post) {
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 220;
    const ctx = canvas.getContext('2d');

    // Deep slate gradient background
    const grad = ctx.createLinearGradient(0, 0, 320, 220);
    grad.addColorStop(0, '#141824');
    grad.addColorStop(1, '#0d1017');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 320, 220);

    // Top color bar for thematic tag
    ctx.fillStyle = post.colorHex;
    ctx.fillRect(0, 0, 320, 6);

    // Year & Tag badge
    ctx.fillStyle = post.colorHex;
    ctx.font = '600 13px "JetBrains Mono", monospace';
    ctx.fillText(`${post.year} // ${post.clusterTag.toUpperCase()}`, 18, 34);

    // Wrapped title text
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '600 18px "Space Grotesk", sans-serif';
    const words = String(post.title || '').split(' ');
    let line = '';
    let y = 70;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      if (ctx.measureText(testLine).width > 280 && n > 0) {
        ctx.fillText(line, 18, y);
        line = words[n] + ' ';
        y += 24;
        if (y > 185) break;
      } else {
        line = testLine;
      }
    }
    if (y <= 185) ctx.fillText(line, 18, y);

    const tex = new THREE.CanvasTexture(canvas);
    return tex;
  }

  const nodeMeshes = [];

  posts.forEach((p, i) => {
    const placeholderTex = createFallbackTexture(p);

    const mat = new THREE.MeshBasicMaterial({
      map: placeholderTex,
      transparent: true,
      opacity: 0.94,
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(sharedCardGeom, mat);
    mesh.position.copy(p.posCloud);
    mesh.userData = { post: p };

    // Subtle colored backing frame
    const borderMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(p.colorHex),
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide
    });
    const borderMesh = new THREE.Mesh(sharedBorderGeom, borderMat);
    borderMesh.position.z = -0.15;
    mesh.add(borderMesh);

    p.mesh = mesh;
    p.borderMesh = borderMesh;
    p.currentTargetPos = p.posCloud.clone();
    p.phaseOffset = seededRandom(i * 17) * Math.PI * 2;
    p.isVisibleByFilter = true;
    p.targetScale = 1;
    p.targetOpacity = 0.94;

    nodesGroup.add(mesh);
    nodeMeshes.push(mesh);
  });

  // ---------------------------------------------------------------------------
  // 6. Concurrency-Limited Texture Loader Queue
  // ---------------------------------------------------------------------------
  let loadedCount = 0;
  const loaderEl = document.getElementById('loader');
  const loaderProgressEl = document.getElementById('loader-progress');

  function loadAllTextures() {
    const queue = [...posts];
    const MAX_CONCURRENT = 10;
    let activeWorkers = 0;

    function next() {
      if (queue.length === 0) return;
      while (activeWorkers < MAX_CONCURRENT && queue.length > 0) {
        const post = queue.shift();
        activeWorkers++;
        loadSingleTexture(post).finally(() => {
          activeWorkers--;
          loadedCount++;
          if (loaderProgressEl && loadedCount % 8 === 0) {
            loaderProgressEl.textContent = `Loaded ${loadedCount} / ${posts.length} cover images...`;
          }
          if (loadedCount >= Math.min(35, posts.length) && loaderEl && !loaderEl.classList.contains('hidden')) {
            loaderEl.classList.add('hidden');
          }
          next();
        });
      }
    }

    next();
    // Hide loader after 1.8s maximum even on slow connections
    setTimeout(() => {
      if (loaderEl) loaderEl.classList.add('hidden');
    }, 1800);
  }

  function loadSingleTexture(post) {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        // Draw image onto a standard power-of-two aspect canvas for clean cropping
        const canvas = document.createElement('canvas');
        canvas.width = 320;
        canvas.height = 220;
        const ctx = canvas.getContext('2d');

        // Object-fit: cover math
        const imgRatio = img.width / img.height;
        const targetRatio = canvas.width / canvas.height;
        let sx = 0, sy = 0, sw = img.width, sh = img.height;
        if (imgRatio > targetRatio) {
          sw = img.height * targetRatio;
          sx = (img.width - sw) / 2;
        } else {
          sh = img.width / targetRatio;
          sy = (img.height - sh) / 2;
        }

        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);

        const tex = new THREE.CanvasTexture(canvas);
        if (post.mesh && post.mesh.material) {
          const oldMap = post.mesh.material.map;
          post.mesh.material.map = tex;
          post.mesh.material.needsUpdate = true;
          if (oldMap) oldMap.dispose();
        }
        resolve();
      };
      img.onerror = () => {
        // Keep stylized canvas fallback card if CORS or 404
        resolve();
      };
      img.src = post.thumbUrl;
    });
  }

  loadAllTextures();

  // ---------------------------------------------------------------------------
  // 7. Thematic Constellation Lines ("Molecules of Connection")
  // ---------------------------------------------------------------------------
  let currentMode = 'cloud'; // 'cloud' | 'helix' | 'grid'
  let activeTag = null;
  let activeYear = null;
  let searchQuery = '';
  let selectedPost = null;
  let hoveredPost = null;

  let constellationLines = null;
  let showConstellations = true;

  function buildConstellationLines() {
    if (constellationLines) {
      scene.remove(constellationLines);
      constellationLines.geometry.dispose();
      constellationLines.material.dispose();
    }

    const pairs = [];
    // Connect each visible post to up to 2 nearest neighbors that share a tag
    const activePosts = posts.filter((p) => p.isVisibleByFilter);

    activePosts.forEach((a) => {
      let best1 = null;
      let best2 = null;
      let d1 = Infinity;
      let d2 = Infinity;

      for (let j = 0; j < activePosts.length; j++) {
        const b = activePosts[j];
        if (a.index >= b.index) continue;
        // In Cluster Cloud mode, only connect posts within the same cluster
        // so each cluster forms a clean, unmistakable constellation island
        const canConnect =
          currentMode === 'cloud'
            ? a.clusterTag === b.clusterTag
            : a.tags.some((t) => b.tags.includes(t));
        if (!canConnect) continue;

        const dist = a.currentTargetPos.distanceToSquared(b.currentTargetPos);
        if (dist < d1) {
          d2 = d1;
          best2 = best1;
          d1 = dist;
          best1 = b;
        } else if (dist < d2) {
          d2 = dist;
          best2 = b;
        }
      }

      if (best1 && d1 < 9500) pairs.push([a, best1]);
      if (best2 && d2 < 6500) pairs.push([a, best2]);
    });

    const positions = new Float32Array(pairs.length * 6);
    const colors = new Float32Array(pairs.length * 6);

    pairs.forEach(([a, b], idx) => {
      const cA = new THREE.Color(a.colorHex);
      const cB = new THREE.Color(b.colorHex);

      positions[idx * 6 + 0] = a.mesh.position.x;
      positions[idx * 6 + 1] = a.mesh.position.y;
      positions[idx * 6 + 2] = a.mesh.position.z;
      positions[idx * 6 + 3] = b.mesh.position.x;
      positions[idx * 6 + 4] = b.mesh.position.y;
      positions[idx * 6 + 5] = b.mesh.position.z;

      colors[idx * 6 + 0] = cA.r;
      colors[idx * 6 + 1] = cA.g;
      colors[idx * 6 + 2] = cA.b;
      colors[idx * 6 + 3] = cB.r;
      colors[idx * 6 + 4] = cB.g;
      colors[idx * 6 + 5] = cB.b;
    });

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: showConstellations ? 0.22 : 0.0
    });

    constellationLines = new THREE.LineSegments(geom, mat);
    constellationLines.userData.pairs = pairs;
    scene.add(constellationLines);
  }

  function updateConstellationPositions() {
    if (!constellationLines || !showConstellations) return;
    const pairs = constellationLines.userData.pairs || [];
    const posAttr = constellationLines.geometry.getAttribute('position');
    if (!posAttr) return;

    for (let i = 0; i < pairs.length; i++) {
      const [a, b] = pairs[i];
      posAttr.array[i * 6 + 0] = a.mesh.position.x;
      posAttr.array[i * 6 + 1] = a.mesh.position.y;
      posAttr.array[i * 6 + 2] = a.mesh.position.z;
      posAttr.array[i * 6 + 3] = b.mesh.position.x;
      posAttr.array[i * 6 + 4] = b.mesh.position.y;
      posAttr.array[i * 6 + 5] = b.mesh.position.z;
    }
    posAttr.needsUpdate = true;
  }

  buildConstellationLines();

  // ---------------------------------------------------------------------------
  // 8. UI State: Modes, Filters, Search, and Preview Drawer
  // ---------------------------------------------------------------------------
  const totalCountEl = document.getElementById('total-count');
  const visibleCountEl = document.getElementById('visible-count');
  const activeFilterLabelEl = document.getElementById('active-filter-label');
  if (totalCountEl) totalCountEl.textContent = posts.length;
  if (visibleCountEl) visibleCountEl.textContent = posts.length;

  // Populate Left Tag Cluster Rail
  const tagCloudEl = document.getElementById('tag-cloud');
  const tagResetBtn = document.getElementById('tag-reset');

  function renderTagRail() {
    if (!tagCloudEl) return;
    tagCloudEl.innerHTML = '';
    sortedTags.slice(0, 16).forEach(([tag, count]) => {
      const btn = document.createElement('button');
      btn.className = 'tag-pill' + (activeTag === tag ? ' active' : '');
      btn.style.setProperty('--tag-color', tagColorMap.get(tag));
      btn.innerHTML = `
        <span class="tag-pill-left">
          <span class="tag-dot"></span>
          <span>${tag}</span>
        </span>
        <span class="tag-count">${count}</span>
      `;
      btn.addEventListener('click', () => {
        activeTag = activeTag === tag ? null : tag;
        applyFilters(true);
      });
      tagCloudEl.appendChild(btn);
    });
    if (tagResetBtn) {
      tagResetBtn.hidden = !activeTag;
    }
  }
  renderTagRail();

  if (tagResetBtn) {
    tagResetBtn.addEventListener('click', () => {
      activeTag = null;
      applyFilters(true);
    });
  }

  // Populate Bottom Year Timeline Bar
  const timelineBarEl = document.getElementById('timeline-bar');
  const yearCounts = new Map();
  posts.forEach((p) => {
    yearCounts.set(p.year, (yearCounts.get(p.year) || 0) + 1);
  });
  const sortedYears = Array.from(yearCounts.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  const maxYearCount = Math.max(1, ...Array.from(yearCounts.values()));

  function renderTimelineBar() {
    if (!timelineBarEl) return;
    timelineBarEl.innerHTML = '';
    sortedYears.forEach(([yr, count]) => {
      const btn = document.createElement('button');
      btn.className = 'year-btn' + (activeYear === yr ? ' active' : '');
      const sparkHeight = Math.max(4, Math.round((count / maxYearCount) * 20));
      btn.title = `${yr}: ${count} posts`;
      btn.innerHTML = `
        <span class="year-spark" style="height:${sparkHeight}px"></span>
        <span>'${yr.slice(2)}</span>
      `;
      btn.addEventListener('click', () => {
        activeYear = activeYear === yr ? null : yr;
        applyFilters(true);
      });
      timelineBarEl.appendChild(btn);
    });
  }
  renderTimelineBar();

  // Apply Combined Filters (Tag, Year, Search Query)
  function applyFilters(focusCentroid = false) {
    const q = searchQuery.toLowerCase().trim();
    let visibleCount = 0;
    const centroid = new THREE.Vector3();

    posts.forEach((p) => {
      const matchTag = !activeTag || p.tags.includes(activeTag);
      const matchYear = !activeYear || p.year === activeYear;
      const matchSearch =
        !q ||
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.excerpt && p.excerpt.toLowerCase().includes(q)) ||
        p.tags.some((t) => t.includes(q));

      const isMatch = matchTag && matchYear && matchSearch;
      p.isVisibleByFilter = isMatch;

      if (isMatch) {
        visibleCount++;
        p.targetOpacity = 0.96;
        p.targetScale = 1.0;
        p.borderMesh.material.opacity = 0.45;
        centroid.add(p.currentTargetPos);
      } else {
        p.targetOpacity = 0.07;
        p.targetScale = 0.55;
        p.borderMesh.material.opacity = 0.04;
      }
    });

    if (visibleCountEl) visibleCountEl.textContent = visibleCount;

    // Update active filter status label
    const parts = [];
    if (activeTag) parts.push(`#${activeTag}`);
    if (activeYear) parts.push(activeYear);
    if (q) parts.push(`"${q}"`);
    if (activeFilterLabelEl) {
      activeFilterLabelEl.textContent =
        parts.length > 0 ? parts.join(' · ') : 'All signals';
    }

    renderTagRail();
    renderTimelineBar();
    buildConstellationLines();

    // Update 3D cluster label opacity when filtering
    clusterSprites.forEach((sp) => {
      const isFocusedTag = !activeTag || sp.userData.tag === activeTag;
      sp.material.opacity = isFocusedTag ? 0.92 : 0.15;
    });

    // Smoothly steer camera toward the matching cluster centroid
    if (focusCentroid && visibleCount > 0 && (activeTag || activeYear || q)) {
      centroid.divideScalar(visibleCount);
      camState.goalTarget.copy(centroid);
      camState.goalSpherical.radius = Math.max(
        135,
        Math.min(280, 105 + visibleCount * 2.0)
      );
      camState.autoRotate = false;
    } else if (focusCentroid && !activeTag && !activeYear && !q) {
      camState.goalTarget.set(0, 0, 0);
      camState.goalSpherical.radius =
        currentMode === 'grid' ? 390 : currentMode === 'helix' ? 350 : 340;
    }
  }

  // Switch Spatial Layout Mode
  function setMode(mode) {
    currentMode = mode;
    clusterLabelsGroup.visible = mode === 'cloud';
    document.querySelectorAll('.mode-btn').forEach((btn) => {
      const isThis = btn.dataset.mode === mode;
      btn.classList.toggle('active', isThis);
      btn.setAttribute('aria-selected', isThis ? 'true' : 'false');
    });

    posts.forEach((p) => {
      if (mode === 'cloud') p.currentTargetPos.copy(p.posCloud);
      else if (mode === 'helix') p.currentTargetPos.copy(p.posHelix);
      else if (mode === 'grid') p.currentTargetPos.copy(p.posGrid);
    });

    // Adjust camera orientation for the chosen geometry
    if (selectedPost) {
      focusPost(selectedPost);
    } else if (mode === 'grid') {
      camState.autoRotate = false;
      camState.goalTarget.set(0, 0, 0);
      camState.goalSpherical.set(390, Math.PI * 0.5, 0);
    } else if (mode === 'helix') {
      camState.autoRotate = true;
      camState.goalTarget.set(0, 0, 0);
      camState.goalSpherical.set(350, Math.PI * 0.46, camState.spherical.theta);
    } else {
      camState.autoRotate = true;
      camState.goalTarget.set(0, 0, 0);
      camState.goalSpherical.set(340, Math.PI * 0.48, camState.spherical.theta);
    }

    buildConstellationLines();
  }

  document.querySelectorAll('.mode-btn').forEach((btn) => {
    btn.addEventListener('click', () => setMode(btn.dataset.mode));
  });

  // Search Input
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) clearSearchBtn.hidden = !searchQuery;
      applyFilters(true);
    });
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      clearSearchBtn.hidden = true;
      applyFilters(true);
    });
  }

  // Action Buttons: Drift, Constellations, Reset
  const btnDrift = document.getElementById('btn-drift');
  const btnLines = document.getElementById('btn-lines');
  const btnReset = document.getElementById('btn-reset');

  function driftToRandomPost() {
    const candidates = posts.filter((p) => p.isVisibleByFilter);
    if (candidates.length === 0) return;
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    focusPost(pick);
  }

  if (btnDrift) btnDrift.addEventListener('click', driftToRandomPost);

  function toggleConstellations() {
    showConstellations = !showConstellations;
    if (btnLines) btnLines.classList.toggle('active', showConstellations);
    if (constellationLines) {
      constellationLines.material.opacity = showConstellations ? 0.22 : 0.0;
    }
  }

  if (btnLines) btnLines.addEventListener('click', toggleConstellations);

  function resetAll() {
    activeTag = null;
    activeYear = null;
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.hidden = true;
    closeDrawer();
    applyFilters(false);
    camState.goalTarget.set(0, 0, 0);
    camState.goalSpherical.set(
      currentMode === 'grid' ? 390 : currentMode === 'helix' ? 350 : 340,
      Math.PI * 0.48,
      0
    );
    camState.autoRotate = currentMode !== 'grid';
  }

  if (btnReset) btnReset.addEventListener('click', resetAll);

  // ---------------------------------------------------------------------------
  // 9. Post Focus & Slide-Out Preview Drawer
  // ---------------------------------------------------------------------------
  const drawerEl = document.getElementById('preview-drawer');
  const drawerCategoryEl = document.getElementById('drawer-category');
  const drawerDateEl = document.getElementById('drawer-date');
  const drawerImgLinkEl = document.getElementById('drawer-img-link');
  const drawerImgEl = document.getElementById('drawer-img');
  const drawerTitleEl = document.getElementById('drawer-title');
  const drawerTagsEl = document.getElementById('drawer-tags');
  const drawerExcerptEl = document.getElementById('drawer-excerpt');
  const drawerReadBtnEl = document.getElementById('drawer-read-btn');
  const drawerRelatedEl = document.getElementById('drawer-related');

  // Helper to wrap angular delta to [-PI, PI] for shortest-path camera orbit
  function shortestAngleDist(from, to) {
    const max = Math.PI * 2;
    const da = (to - from) % max;
    return ((2 * da) % max) - da;
  }

  function focusPost(post) {
    if (!post) return;
    selectedPost = post;
    camState.autoRotate = false;

    // 1. Orient camera onto the outward radial ray from the cloud/helix origin
    //    through the selected post so no interior cards sit between camera and target.
    const pos = post.currentTargetPos.clone();
    camState.goalSpherical.radius = 68;

    if (currentMode === 'grid') {
      camState.goalSpherical.theta += shortestAngleDist(
        camState.goalSpherical.theta,
        0
      );
      camState.goalSpherical.phi = Math.PI * 0.5;
    } else {
      const horizDist = Math.hypot(pos.x, pos.z);
      if (horizDist > 2) {
        const desiredTheta = Math.atan2(pos.x, pos.z);
        camState.goalSpherical.theta += shortestAngleDist(
          camState.goalSpherical.theta,
          desiredTheta
        );
      }
      const totalDist = pos.length();
      if (totalDist > 2) {
        const desiredPhi = Math.acos(
          Math.max(-0.92, Math.min(0.92, pos.y / totalDist))
        );
        camState.goalSpherical.phi = Math.max(
          0.32,
          Math.min(Math.PI - 0.32, desiredPhi)
        );
      }
    }

    // 2. Offset camera lookAt target slightly right so the selected card sits
    //    centered in the open canvas area to the left of the 400px preview drawer.
    const isDesktop = window.innerWidth > 900;
    const rightShift = isDesktop ? 10 : 0;
    const theta = camState.goalSpherical.theta;
    const rightVec = new THREE.Vector3(Math.cos(theta), 0, -Math.sin(theta));
    camState.goalTarget.copy(pos).addScaledVector(rightVec, rightShift);

    // Populate Drawer UI
    if (drawerCategoryEl) {
      drawerCategoryEl.textContent = (post.category || 'blog').toUpperCase();
    }
    if (drawerDateEl) drawerDateEl.textContent = post.date;
    if (drawerTitleEl) drawerTitleEl.textContent = post.title;
    if (drawerImgEl) {
      drawerImgEl.src = post.image;
      drawerImgEl.alt = post.title;
    }
    if (drawerImgLinkEl) drawerImgLinkEl.href = post.url;
    if (drawerReadBtnEl) drawerReadBtnEl.href = post.url;
    if (drawerExcerptEl) {
      drawerExcerptEl.textContent =
        post.excerpt || 'Click below to view the full post and photos.';
    }

    // Tag chips inside drawer
    if (drawerTagsEl) {
      drawerTagsEl.innerHTML = '';
      post.tags.forEach((t) => {
        const chip = document.createElement('button');
        chip.className = 'drawer-tag-chip';
        chip.textContent = `#${t}`;
        chip.addEventListener('click', () => {
          activeTag = t;
          applyFilters(true);
        });
        drawerTagsEl.appendChild(chip);
      });
    }

    // Compute 4 nearby/related posts in 3D space or by shared tags
    if (drawerRelatedEl) {
      drawerRelatedEl.innerHTML = '';
      const related = posts
        .filter((other) => other.index !== post.index)
        .map((other) => {
          const sharedTags = other.tags.filter((t) =>
            post.tags.includes(t)
          ).length;
          const dist = other.currentTargetPos.distanceTo(post.currentTargetPos);
          return { post: other, score: sharedTags * 100 - dist };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 4);

      related.forEach(({ post: rel }) => {
        const card = document.createElement('div');
        card.className = 'related-card';
        card.innerHTML = `
          <img src="${rel.thumbUrl}" alt="${rel.title}" loading="lazy" />
          <div class="related-card-title">${rel.title}</div>
          <div class="related-card-date">${rel.date}</div>
        `;
        card.addEventListener('click', () => focusPost(rel));
        drawerRelatedEl.appendChild(card);
      });
    }

    if (drawerEl) {
      drawerEl.classList.add('open');
      drawerEl.setAttribute('aria-hidden', 'false');
    }
  }

  function closeDrawer() {
    selectedPost = null;
    if (drawerEl) {
      drawerEl.classList.remove('open');
      drawerEl.setAttribute('aria-hidden', 'true');
    }
  }

  document.getElementById('drawer-close')?.addEventListener('click', () => {
    closeDrawer();
    camState.goalSpherical.radius = Math.max(camState.goalSpherical.radius, 220);
  });

  document.getElementById('drawer-prev')?.addEventListener('click', () => {
    if (!selectedPost) return;
    const prevIdx = (selectedPost.index - 1 + posts.length) % posts.length;
    focusPost(posts[prevIdx]);
  });

  document.getElementById('drawer-next')?.addEventListener('click', () => {
    if (!selectedPost) return;
    const nextIdx = (selectedPost.index + 1) % posts.length;
    focusPost(posts[nextIdx]);
  });

  // ---------------------------------------------------------------------------
  // 10. Pointer Raycasting, Orbit/Pan Controls & Keyboard Shortcuts
  // ---------------------------------------------------------------------------
  const raycaster = new THREE.Raycaster();
  const mouseNDC = new THREE.Vector2(-999, -999);
  const tooltipEl = document.getElementById('hover-tooltip');
  const tooltipDateEl = document.getElementById('tooltip-date');
  const tooltipTitleEl = document.getElementById('tooltip-title');
  const tooltipTagsEl = document.getElementById('tooltip-tags');

  container.addEventListener('pointerdown', (e) => {
    camState.isDragging = true;
    camState.autoRotate = false;
    camState.dragMode =
      e.button === 2 || e.shiftKey || currentMode === 'grid' ? 'pan' : 'orbit';
    camState.prevMouse.x = e.clientX;
    camState.prevMouse.y = e.clientY;
    camState.downMouse.x = e.clientX;
    camState.downMouse.y = e.clientY;
  });

  window.addEventListener('pointermove', (e) => {
    // Update NDC for raycasting
    mouseNDC.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseNDC.y = -(e.clientY / window.innerHeight) * 2 + 1;

    if (tooltipEl && !tooltipEl.hidden) {
      tooltipEl.style.left = `${e.clientX}px`;
      tooltipEl.style.top = `${e.clientY}px`;
    }

    if (!camState.isDragging) return;

    const dx = e.clientX - camState.prevMouse.x;
    const dy = e.clientY - camState.prevMouse.y;
    camState.prevMouse.x = e.clientX;
    camState.prevMouse.y = e.clientY;

    if (camState.dragMode === 'orbit') {
      camState.goalSpherical.theta -= dx * 0.0055;
      camState.goalSpherical.phi = Math.max(
        0.15,
        Math.min(Math.PI - 0.15, camState.goalSpherical.phi - dy * 0.0055)
      );
    } else {
      // Pan camera target perpendicular to view direction
      const panSpeed = camState.spherical.radius * 0.0014;
      const right = new THREE.Vector3();
      const up = new THREE.Vector3();
      camera.matrix.extractBasis(right, up, new THREE.Vector3());
      camState.goalTarget.addScaledVector(right, -dx * panSpeed);
      camState.goalTarget.addScaledVector(up, dy * panSpeed);
    }
  });

  window.addEventListener('pointerup', (e) => {
    if (!camState.isDragging) return;
    camState.isDragging = false;

    const moveDist = Math.hypot(
      e.clientX - camState.downMouse.x,
      e.clientY - camState.downMouse.y
    );
    // Treat as a click if pointer barely moved
    if (moveDist < 6 && e.target === renderer.domElement) {
      if (hoveredPost) {
        focusPost(hoveredPost);
      } else if (selectedPost) {
        closeDrawer();
      }
    }
  });

  container.addEventListener('contextmenu', (e) => e.preventDefault());

  container.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      camState.autoRotate = false;
      const zoomFactor = e.deltaY * 0.25;
      camState.goalSpherical.radius = Math.max(
        38,
        Math.min(1150, camState.goalSpherical.radius + zoomFactor)
      );
    },
    { passive: false }
  );

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (document.activeElement === searchInput) {
      if (e.key === 'Escape') searchInput.blur();
      return;
    }
    if (e.key === '1') setMode('cloud');
    else if (e.key === '2') setMode('helix');
    else if (e.key === '3') setMode('grid');
    else if (e.key === ' ') {
      e.preventDefault();
      driftToRandomPost();
    } else if (e.key.toLowerCase() === 'l') {
      toggleConstellations();
    } else if (e.key === 'Escape') {
      if (selectedPost) closeDrawer();
      else resetAll();
    } else if (e.key === 'ArrowLeft' && selectedPost) {
      const prevIdx = (selectedPost.index - 1 + posts.length) % posts.length;
      focusPost(posts[prevIdx]);
    } else if (e.key === 'ArrowRight' && selectedPost) {
      const nextIdx = (selectedPost.index + 1) % posts.length;
      focusPost(posts[nextIdx]);
    }
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ---------------------------------------------------------------------------
  // 11. Animation Loop (60fps Smooth Spring Morphing & Uncertainty Drift)
  // ---------------------------------------------------------------------------
  const clock = new THREE.Clock();
  const dummyPos = new THREE.Vector3();

  // View-aligned forward vector for pulling the selected card toward the camera
  const camForward = new THREE.Vector3();

  function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    // Gentle orbital drift in Cloud & Helix modes when idle
    if (camState.autoRotate && !camState.isDragging && !selectedPost) {
      camState.goalSpherical.theta += 0.0012;
    }

    // Smooth camera interpolation
    camState.target.lerp(camState.goalTarget, 0.08);
    camState.spherical.radius +=
      (camState.goalSpherical.radius - camState.spherical.radius) * 0.08;
    camState.spherical.phi +=
      (camState.goalSpherical.phi - camState.spherical.phi) * 0.08;
    camState.spherical.theta +=
      (camState.goalSpherical.theta - camState.spherical.theta) * 0.08;

    dummyPos.setFromSpherical(camState.spherical).add(camState.target);
    camera.position.copy(dummyPos);
    camera.lookAt(camState.target);
    camera.getWorldDirection(camForward); // points from camera into scene

    // Raycast for hovered card
    raycaster.setFromCamera(mouseNDC, camera);
    const intersects = raycaster.intersectObjects(nodeMeshes, false);
    let newHovered = null;
    for (let i = 0; i < intersects.length; i++) {
      const candidate = intersects[i].object.userData.post;
      if (candidate && candidate.isVisibleByFilter) {
        newHovered = candidate;
        break;
      }
    }

    if (newHovered !== hoveredPost) {
      hoveredPost = newHovered;
      container.classList.toggle('hovering-node', Boolean(hoveredPost));
      if (hoveredPost && tooltipEl) {
        tooltipDateEl.textContent = hoveredPost.date;
        tooltipTitleEl.textContent = hoveredPost.title;
        tooltipTagsEl.textContent = hoveredPost.tags
          .map((t) => `#${t}`)
          .join('  ');
        tooltipEl.hidden = false;
      } else if (tooltipEl) {
        tooltipEl.hidden = true;
      }
    }

    // Morph each post card toward its target layout position + gentle floating breath
    const driftAmp = currentMode === 'grid' ? 0.25 : 1.8;
    for (let i = 0; i < posts.length; i++) {
      const p = posts[i];
      const m = p.mesh;
      const isSelected = p === selectedPost;

      const floatX = isSelected
        ? 0
        : Math.sin(elapsed * 0.7 + p.phaseOffset) * driftAmp;
      const floatY = isSelected
        ? 0
        : Math.cos(elapsed * 0.55 + p.phaseOffset * 1.3) * driftAmp;

      // Pop the active card 18 units forward toward the camera so it sits
      // cleanly in front of its local cluster
      const popForward = isSelected ? -18 : 0;
      const goalX = p.currentTargetPos.x + floatX + camForward.x * popForward;
      const goalY = p.currentTargetPos.y + floatY + camForward.y * popForward;
      const goalZ = p.currentTargetPos.z + camForward.z * popForward;

      m.position.x += (goalX - m.position.x) * 0.1;
      m.position.y += (goalY - m.position.y) * 0.1;
      m.position.z += (goalZ - m.position.z) * 0.1;

      // Billboard: orient cards to face the camera smoothly
      m.quaternion.copy(camera.quaternion);

      // Guarantee the selected card renders on top without depth occlusion
      if (isSelected) {
        m.renderOrder = 999;
        p.borderMesh.renderOrder = 998;
        m.material.depthTest = false;
        p.borderMesh.material.depthTest = false;
      } else if (m.renderOrder !== 0) {
        m.renderOrder = 0;
        p.borderMesh.renderOrder = 0;
        m.material.depthTest = true;
        p.borderMesh.material.depthTest = true;
      }

      // Scale & highlight hovered or selected card
      let goalScale = p.targetScale;
      if (isSelected) goalScale = 1.5;
      else if (p === hoveredPost) goalScale = 1.22;

      const s = m.scale.x + (goalScale - m.scale.x) * 0.14;
      m.scale.set(s, s, 1);

      // Dim unselected cards slightly when a post is active so the active card stands out
      let goalOpacity = p.targetOpacity;
      let goalBorderOpacity = p.isVisibleByFilter ? 0.45 : 0.04;
      if (selectedPost) {
        if (isSelected) {
          goalOpacity = 1.0;
          goalBorderOpacity = 0.95;
        } else if (p.isVisibleByFilter) {
          goalOpacity = 0.35;
          goalBorderOpacity = 0.15;
        }
      }

      m.material.opacity += (goalOpacity - m.material.opacity) * 0.12;
      p.borderMesh.material.opacity +=
        (goalBorderOpacity - p.borderMesh.material.opacity) * 0.12;
    }

    updateConstellationPositions();
    renderer.render(scene, camera);
  }

  animate();
})();
