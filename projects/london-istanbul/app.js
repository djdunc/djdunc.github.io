// --- Default Dataset (44-Day Simulated Journey) ---
const DEFAULT_STAGES = [
  { day: 1, date: "24 Apr 2026", from: "London", to: "Canterbury", country: "United Kingdom", dist: 95, elev: 820, lat: 51.2802, lon: 1.0789, desc: "Starting the epic ride from London to the historic city of Canterbury, passing through the beautiful Kent countryside." },
  { day: 2, date: "25 Apr 2026", from: "Canterbury", to: "Calais", country: "France", dist: 35, elev: 210, lat: 50.9513, lon: 1.8587, desc: "Rode to Dover, crossed the English Channel by ferry, and completed a short evening ride into Calais.", isFerry: true },
  { day: 3, date: "26 Apr 2026", from: "Calais", to: "Saint-Omer", country: "France", dist: 45, elev: 320, lat: 50.7487, lon: 2.2519, desc: "Cruising away from the coast, riding through the quiet, rolling farmlands of Northern France." },
  { day: 4, date: "27 Apr 2026", from: "Saint-Omer", to: "Arras", country: "France", dist: 75, elev: 580, lat: 50.2910, lon: 2.7775, desc: "A windy day riding through historic battlefields and entering the historic city of Arras." },
  { day: 5, date: "28 Apr 2026", from: "Arras", to: "Saint-Quentin", country: "France", dist: 75, elev: 490, lat: 49.8471, lon: 3.2874, desc: "Riding along canals and agricultural landscapes to the Art Deco city of Saint-Quentin." },
  { day: 6, date: "29 Apr 2026", from: "Saint-Quentin", to: "Laon", country: "France", dist: 50, elev: 410, lat: 49.5641, lon: 3.6199, desc: "A shorter ride ending with a tough climb up to the medieval hilltop cathedral city of Laon." },
  { day: 7, date: "30 Apr 2026", from: "Laon", to: "Reims", country: "France", dist: 60, elev: 450, lat: 49.2583, lon: 4.0317, desc: "Riding into the Champagne region, surrounded by rolling vineyards, arriving in Reims." },
  { day: 8, date: "01 May 2026", from: "Reims", to: "Châlons-en-Champagne", country: "France", dist: 45, elev: 310, lat: 48.9566, lon: 4.3637, desc: "An easy cruise along the Marne river canal system, celebrating May Day in Châlons." },
  { day: 9, date: "02 May 2026", from: "Châlons-en-Champagne", to: "Bar-le-Duc", country: "France", dist: 80, elev: 680, lat: 48.7719, lon: 5.1619, desc: "Entering the Meuse department, navigating rolling hills and scenic French villages." },
  { day: 10, date: "03 May 2026", from: "Bar-le-Duc", to: "Toul", country: "France", dist: 80, elev: 710, lat: 48.6751, lon: 5.8906, desc: "Riding across the Lorraine plateau to the ancient fortified town of Toul on the Moselle River." },
  { day: 11, date: "04 May 2026", from: "Toul", to: "Nancy", country: "France", dist: 30, elev: 150, lat: 48.6921, lon: 6.1844, desc: "A recovery day along the Moselle river loop, arriving early to explore the beautiful Place Stanislas in Nancy." },
  { day: 12, date: "05 May 2026", from: "Nancy", to: "Saverne", country: "France", dist: 85, elev: 780, lat: 48.7412, lon: 7.3621, desc: "Climbing through the beautiful Vosges mountains before descending into the town of Saverne." },
  { day: 13, date: "06 May 2026", from: "Saverne", to: "Strasbourg", country: "France", dist: 45, elev: 180, lat: 48.5734, lon: 7.7521, desc: "Riding along the Marne-Rhine Canal path into Strasbourg, the historic capital of Alsace." },
  { day: 14, date: "07 May 2026", from: "Strasbourg", to: "Offenburg", country: "Germany", dist: 30, elev: 120, lat: 48.4708, lon: 7.9429, desc: "Crossed the Rhine River into Germany, taking back roads to the foot of the Black Forest in Offenburg." },
  { day: 15, date: "08 May 2026", from: "Offenburg", to: "Freudenstadt", country: "Germany", dist: 65, elev: 1420, lat: 48.4633, lon: 8.4137, desc: "A major mountain day! Climbed straight into the heart of the Black Forest to the high plateau of Freudenstadt." },
  { day: 16, date: "09 May 2026", from: "Freudenstadt", to: "Rottweil", country: "Germany", dist: 60, elev: 650, lat: 48.1681, lon: 8.6294, desc: "Riding southward along the Neckar River valley, arriving in Baden-Württemberg's oldest town, Rottweil." },
  { day: 17, date: "10 May 2026", from: "Rottweil", to: "Tuttlingen", country: "Germany", dist: 40, elev: 350, lat: 47.9846, lon: 8.8169, desc: "Connecting over the Swabian hills to the upper valley of the Danube River in Tuttlingen." },
  { day: 18, date: "11 May 2026", from: "Tuttlingen", to: "Sigmaringen", country: "Germany", dist: 55, elev: 420, lat: 48.0865, lon: 9.2155, desc: "Riding through the stunning Upper Danube Nature Park, dominated by towering limestone cliffs and Sigmaringen Castle." },
  { day: 19, date: "12 May 2026", from: "Sigmaringen", to: "Ulm", country: "Germany", dist: 85, elev: 480, lat: 48.4011, lon: 9.9876, desc: "Following the winding Danube downstream through Swabian farmlands to the cathedral city of Ulm." },
  { day: 20, date: "13 May 2026", from: "Ulm", to: "Augsburg", country: "Germany", dist: 85, elev: 520, lat: 48.3705, lon: 10.8978, desc: "Departing from the Danube momentarily to head east across Bavaria to the ancient Roman city of Augsburg." },
  { day: 21, date: "14 May 2026", from: "Augsburg", to: "Munich", country: "Germany", dist: 70, elev: 410, lat: 48.1351, lon: 11.5820, desc: "Cycling along cycle paths into the Bavarian capital, Munich. Celebrated with a stein of local beer!" },
  { day: 22, date: "15 May 2026", from: "Munich", to: "Rosenheim", country: "Germany", dist: 65, elev: 380, lat: 47.8561, lon: 12.1225, desc: "Heading south-east towards the Alps, passing fields and traditional alpine chalets to Rosenheim." },
  { day: 23, date: "16 May 2026", from: "Rosenheim", to: "Salzburg", country: "Austria", dist: 90, elev: 620, lat: 47.8095, lon: 13.0550, desc: "Crossed into Austria! Breathtaking views of the Alps along the Chiemsee lake, arriving in Mozart's Salzburg." },
  { day: 24, date: "17 May 2026", from: "Salzburg", to: "Linz", country: "Austria", dist: 130, elev: 980, lat: 48.3069, lon: 14.2858, desc: "A long day crossing the Austrian lake district and rolling hills, returning to the Danube river in Linz." },
  { day: 25, date: "18 May 2026", from: "Linz", to: "Melk", country: "Austria", dist: 100, elev: 350, lat: 48.2270, lon: 15.3324, desc: "Cycling the famous Danube Cycle Path (Donauradweg) through the Strudengau gorge to Melk Abbey." },
  { day: 26, date: "19 May 2026", from: "Melk", to: "Vienna", country: "Austria", dist: 90, elev: 220, lat: 48.2082, lon: 16.3738, desc: "Cruising through the UNESCO Wachau Wine Valley, passing vineyards and ancient castles into Vienna." },
  { day: 27, date: "20 May 2026", from: "Vienna", to: "Bratislava", country: "Slovakia", dist: 80, elev: 180, lat: 48.1451, lon: 17.1077, desc: "Rode east out of Austria and crossed into Slovakia, arriving in the capital city of Bratislava under the castle." },
  { day: 28, date: "21 May 2026", from: "Bratislava", to: "Győr", country: "Hungary", dist: 90, elev: 190, lat: 47.6875, lon: 17.6504, desc: "Crossed the border into Hungary, riding through the flat, agricultural plains of the Little Hungarian Plain to Győr." },
  { day: 29, date: "22 May 2026", from: "Győr", to: "Budapest", country: "Hungary", dist: 120, elev: 550, lat: 47.4979, lon: 19.0402, desc: "Rode through the scenic Danube Bend before climbing slightly into the grand capital city of Budapest." },
  { day: 30, date: "23 May 2026", from: "Budapest", to: "Budapest (Rest)", country: "Hungary", dist: 0, elev: 0, lat: 47.4979, lon: 19.0402, desc: "A well-deserved rest day in Budapest. Visited the Széchenyi thermal baths to soothe tired legs." },
  { day: 31, date: "24 May 2026", from: "Budapest", to: "Baja", country: "Hungary", dist: 150, elev: 220, lat: 46.1804, lon: 18.9604, desc: "A massive, flat, high-mileage day riding south down the Great Hungarian Plain parallel to the Danube." },
  { day: 32, date: "25 May 2026", from: "Baja", to: "Sombor", country: "Serbia", dist: 65, elev: 140, lat: 45.7731, lon: 19.1147, desc: "Crossed the border into Serbia! Stopped in the peaceful, tree-lined town of Sombor." },
  { day: 33, date: "26 May 2026", from: "Sombor", to: "Novi Sad", country: "Serbia", dist: 100, elev: 210, lat: 45.2671, lon: 19.8335, desc: "Cycling through the autonomous province of Vojvodina to Serbia's cultural hub, Novi Sad." },
  { day: 34, date: "27 May 2026", from: "Novi Sad", to: "Belgrade", country: "Serbia", dist: 90, elev: 680, lat: 44.7866, lon: 20.4489, desc: "Rode over the Fruška Gora hills and followed the river to the bustling historic capital, Belgrade." },
  { day: 35, date: "28 May 2026", from: "Belgrade", to: "Veliko Gradište", country: "Serbia", dist: 120, elev: 480, lat: 44.7647, lon: 21.5222, desc: "Rode past the giant Smederevo Fortress, heading towards the starting point of the Danube Gorge." },
  { day: 36, date: "29 May 2026", from: "Veliko Gradište", to: "Donji Milanovac", country: "Serbia", dist: 75, elev: 850, lat: 44.4639, lon: 22.1156, desc: "Stunning, challenging ride through the Djerdap National Park and the Iron Gates, the narrowest point of the Danube." },
  { day: 37, date: "30 May 2026", from: "Donji Milanovac", to: "Vidin", country: "Bulgaria", dist: 120, elev: 1020, lat: 43.9962, lon: 22.8679, desc: "Departed the Danube gorge, crossed the border into Bulgaria, and stayed near Baba Vida fortress in Vidin." },
  { day: 38, date: "31 May 2026", from: "Vidin", to: "Montana", country: "Bulgaria", dist: 95, elev: 810, lat: 43.4125, lon: 23.2250, desc: "Riding south-east towards the Balkan Mountains, entering the town of Montana." },
  { day: 39, date: "01 Jun 2026", from: "Montana", to: "Sofia", country: "Bulgaria", dist: 110, elev: 1650, lat: 42.6977, lon: 23.3219, desc: "A tough alpine day climbing over the Petrohan Pass (1444m) in the Balkan Mountains, descending into Sofia." },
  { day: 40, date: "02 Jun 2026", from: "Sofia", to: "Plovdiv", country: "Bulgaria", dist: 140, elev: 950, lat: 42.1354, lon: 24.7453, desc: "A long ride down the Thracian Valley to the ancient city of Plovdiv, one of Europe's oldest continuously inhabited cities." },
  { day: 41, date: "03 Jun 2026", from: "Plovdiv", to: "Haskovo", country: "Bulgaria", dist: 80, elev: 520, lat: 41.9344, lon: 25.5554, desc: "Riding east through low hills and agricultural regions in southern Bulgaria." },
  { day: 42, date: "04 Jun 2026", from: "Haskovo", to: "Edirne", country: "Turkey", dist: 110, elev: 610, lat: 41.6772, lon: 26.5557, desc: "Crossed into Turkey! Arrived in Edirne, marveling at the incredible Selimiye Mosque." },
  { day: 43, date: "05 Jun 2026", from: "Edirne", to: "Lüleburgaz", country: "Turkey", dist: 85, elev: 490, lat: 41.4034, lon: 27.3516, desc: "Riding through the plains of East Thrace, anticipating the final day's push." },
  { day: 44, date: "06 Jun 2026", from: "Lüleburgaz", to: "Istanbul", country: "Turkey", dist: 130, elev: 1120, lat: 41.0082, lon: 28.9784, desc: "The final stretch! Cycled into the heart of Istanbul, crossing the Golden Horn to celebrate finishing this epic continent-spanning journey." }
];

// Start Coordinate (London)
const START_LAT = 51.5074;
const START_LON = -0.1278;

// --- State Management ---
let map = null;
let currentRouteData = {
  stages: [],
  trackPoints: []
};
let mapElements = {
  polylines: {}, // Map of day -> polyline layer
  markers: [],
  cyclistMarker: null
};

let activeStageIndex = null;
let playbackInterval = null;
let playbackIndex = 0; // Index in trackPoints

// Map background layers definition
const MAP_STYLES = {
  dark: L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
  }),
  light: L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
  }),
  satellite: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 19,
    attribution: '&copy; Esri &mdash; Source: Esri, USDA, USGS Community'
  }),
  terrain: L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    attribution: 'Map data &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
  })
};

let currentTileLayer = null;

// --- Initialize App ---
document.addEventListener("DOMContentLoaded", () => {
  initMap();
  loadRouteData();
  setupUIEventListeners();
});

// --- Map Initialization ---
function initMap() {
  // Center map generally over Europe
  map = L.map("map", {
    zoomControl: false, // Custom position Zoom control
    attributionControl: false
  }).setView([47.0, 14.0], 5);

  // Custom Zoom Control position
  L.control.zoom({
    position: 'bottomright'
  }).addTo(map);

  // Set default tile layer (Dark Mode)
  currentTileLayer = MAP_STYLES.dark;
  currentTileLayer.addTo(map);
  
  // Custom attribution in clean format
  L.control.attribution({
    position: 'bottomright',
    prefix: false
  }).addTo(map);

  // Clear selection when clicking map background
  map.on("click", () => {
    clearActiveStage();
  });

  // Setup style selector interactions
  setupMapStyleSelector();
}

function setupMapStyleSelector() {
  const container = document.getElementById("map-style-selector");
  if (!container) return;

  const buttons = container.querySelectorAll(".style-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent map click listener from firing
      const styleName = btn.getAttribute("data-style");
      if (MAP_STYLES[styleName]) {
        // Switch layer
        map.removeLayer(currentTileLayer);
        currentTileLayer = MAP_STYLES[styleName];
        currentTileLayer.addTo(map);

        // Update active button state
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      }
    });
  });
}

// --- Route Data Loading ---
async function loadRouteData() {
  // First, check if there is a server-side catalog available and load it.
  // This takes precedence so that any updates in the gpx/ directory are loaded automatically.
  const loadedFromServer = await loadServerRouteCatalog();
  if (loadedFromServer) {
    return;
  }

  // Fallback to locally cached route if server-side catalog is not available
  const cachedData = localStorage.getItem("velo_custom_route");
  if (cachedData) {
    try {
      const parsed = JSON.parse(cachedData);
      currentRouteData = parsed;
      renderRoute();
      return;
    } catch (e) {
      console.error("Error reading cached route. Resetting to default.", e);
    }
  }

  // Fallback to default simulated route if nothing else is available
  loadDefaultRoute();
  renderRoute();
}

// Load default simulated route
function loadDefaultRoute() {
  const stages = DEFAULT_STAGES;
  const trackPoints = [];
  
  // Start point (London)
  trackPoints.push({ lat: START_LAT, lon: START_LON, ele: 25, day: 1 });
  
  // Generate a winding mock track between stops to look like real roads
  for (let i = 0; i < stages.length; i++) {
    const prev = i === 0 ? { lat: START_LAT, lon: START_LON } : stages[i - 1];
    const curr = stages[i];
    
    const intermediatePoints = generateWindingPath(prev, curr, curr.isFerry, curr.day);
    trackPoints.push(...intermediatePoints);
  }
  
  currentRouteData = { stages, trackPoints };
}

// Generate intermediate winding coordinates between two points
function generateWindingPath(start, end, isFerry, day) {
  const pts = [];
  const segments = isFerry ? 10 : 35; // Number of subdivisions
  
  const dLat = end.lat - start.lat;
  const dLon = end.lon - start.lon;
  
  // For repeatability, we seed the curve generation using the day number
  const seed = day * 10;
  
  for (let s = 1; s <= segments; s++) {
    const t = s / segments;
    let lat = start.lat + dLat * t;
    let lon = start.lon + dLon * t;
    
    if (!isFerry) {
      // Add sine-wave jitter perpendicular to the direct vector
      const perpLat = -dLon;
      const perpLon = dLat;
      const length = Math.sqrt(perpLat * perpLat + perpLon * perpLon);
      
      if (length > 0.0001) {
        // Calculate jitter size based on progress and segment distance
        const wave = Math.sin(t * Math.PI * 3.5 + seed) * Math.sin(t * Math.PI);
        const jitterAmount = length * 0.12 * wave;
        
        lat += (perpLat / length) * jitterAmount;
        lon += (perpLon / length) * jitterAmount;
        
        // Add secondary higher-frequency small jitter
        const microJitter = Math.cos(t * Math.PI * 15 + seed) * 0.005;
        lat += microJitter;
        lon += microJitter;
      }
    }
    
    // Smooth elevation estimate
    const startEle = 50;
    const endEle = end.elev || 100;
    const ele = Math.round(startEle + (endEle - startEle) * t + Math.sin(t * Math.PI) * 120);

    pts.push({ lat, lon, ele, day });
  }
  return pts;
}

// --- Render Route on Map and List ---
function renderRoute() {
  clearMap();
  
  const routeColor = currentRouteData.isImported ? "var(--color-accent)" : "var(--color-strava)";
  const points = currentRouteData.trackPoints;

  // We draw a separate polyline for each day!
  const dayIndices = [...new Set(points.map(p => p.day))].sort((a, b) => a - b);
  
  dayIndices.forEach(dayNum => {
    const dayPts = points.filter(p => p.day === dayNum).map(p => [p.lat, p.lon]);
    if (dayPts.length < 2) return; // Need at least 2 points to draw a line

    const polyline = L.polyline(dayPts, {
      color: routeColor,
      weight: 4,
      opacity: 0.85,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    // Click on polyline highlights this stage
    const stageIdx = currentRouteData.stages.findIndex(s => s.day === dayNum);
    if (stageIdx !== -1) {
      polyline.on("click", (e) => {
        setActiveStage(stageIdx);
        mapElements.markers[stageIdx].openPopup();
        L.DomEvent.stopPropagation(e);
      });
      
      // Hover effects
      polyline.on("mouseover", () => {
        if (activeStageIndex === null) {
          polyline.setStyle({
            color: "#fc5200", // Strava Orange on hover
            weight: 6,
            opacity: 1.0
          });
        } else if (activeStageIndex !== stageIdx) {
          polyline.setStyle({
            color: "#fc5200",
            weight: 5,
            opacity: 0.7
          });
        }
      });
      polyline.on("mouseout", () => {
        if (activeStageIndex === null) {
          polyline.setStyle({
            color: routeColor,
            weight: 4,
            opacity: 0.85
          });
        } else if (activeStageIndex !== stageIdx) {
          polyline.setStyle({
            color: routeColor,
            weight: 3,
            opacity: 0.3
          });
        }
      });
    }

    mapElements.polylines[dayNum] = polyline;
  });

  // Zoom map to fit the entire route
  const allCoords = points.map(p => [p.lat, p.lon]);
  if (allCoords.length > 0) {
    const bounds = L.latLngBounds(allCoords);
    map.fitBounds(bounds, { padding: [50, 50] });
  }

  // Add Markers for Overnight Stops
  currentRouteData.stages.forEach((stage, idx) => {
    let markerType = 'stop';
    let markerClass = 'custom-marker';
    let markerHtml = `<span>${stage.day}</span>`;
    
    if (idx === currentRouteData.stages.length - 1) {
      markerType = 'end';
      markerClass = 'custom-marker end-marker';
      markerHtml = '<i class="fa-solid fa-flag-checkered"></i>';
    }

    const icon = L.divIcon({
      className: markerClass,
      html: markerHtml,
      iconSize: [26, 26],
      iconAnchor: [13, 13]
    });

    const marker = L.marker([stage.lat, stage.lon], { icon }).addTo(map);
    
    // Custom popup description
    const popupContent = `
      <div style="font-family: var(--font-body); padding: 5px;">
        <h4 style="color: ${routeColor}; font-family: var(--font-title); font-size: 15px; margin-bottom: 4px;">Day ${stage.day}: ${stage.to}</h4>
        <p style="font-size: 11px; color: var(--text-secondary); margin-bottom: 8px;">${stage.date} • ${stage.dist} km • +${stage.elev}m</p>
        <p style="font-size: 12px; line-height: 1.4; color: var(--text-primary);">${stage.desc}</p>
      </div>
    `;
    
    marker.bindPopup(popupContent, {
      closeButton: false,
      offset: L.point(0, -6)
    });

    // Handle marker click
    marker.on("click", (e) => {
      setActiveStage(idx);
      L.DomEvent.stopPropagation(e);
    });

    mapElements.markers.push(marker);
  });

  // Render Sidebar Timeline Calendar
  renderSidebarCalendar();
  
  // Calculate and display main summaries
  calculateOverallStats();

  // Render Full Trip Elevation Profile
  renderFullTripElevationProfile();
}

function clearMap() {
  Object.keys(mapElements.polylines).forEach(key => {
    map.removeLayer(mapElements.polylines[key]);
  });
  mapElements.polylines = {};

  mapElements.markers.forEach(m => map.removeLayer(m));
  mapElements.markers = [];
  
  if (mapElements.cyclistMarker) {
    map.removeLayer(mapElements.cyclistMarker);
    mapElements.cyclistMarker = null;
  }
}

// Utility to parse "24 Apr 2026" to a Date object
function parseStageDate(dateStr) {
  const parts = dateStr.split(" ");
  if (parts.length >= 3) {
    const day = parseInt(parts[0]);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames.findIndex(m => m.toLowerCase().startsWith(parts[1].substring(0, 3).toLowerCase()));
    const year = parseInt(parts[2]);
    if (!isNaN(day) && month !== -1 && !isNaN(year)) {
      return new Date(year, month, day);
    }
  }
  return new Date();
}

// Render the compact weekly calendar view of days
function renderSidebarCalendar() {
  const grid = document.getElementById("calendar-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const stages = currentRouteData.stages;
  if (stages.length === 0) return;

  // Find the weekday of Day 1 (Friday, 24 Apr 2026)
  const firstStage = stages[0];
  const firstDate = parseStageDate(firstStage.date);
  
  // getDay(): 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  // Convert to Mon-Sun index (0 = Monday, 1 = Tuesday, ..., 6 = Sunday)
  let startWeekday = firstDate.getDay();
  startWeekday = startWeekday === 0 ? 6 : startWeekday - 1;

  // Add empty filler cells for days before the start date
  for (let i = 0; i < startWeekday; i++) {
    const filler = document.createElement("div");
    filler.className = "calendar-day-cell filler-cell";
    grid.appendChild(filler);
  }

  // Render actual day cells
  stages.forEach((stage, idx) => {
    const cell = document.createElement("div");
    cell.className = `calendar-day-cell active-cell ${activeStageIndex === idx ? 'active' : ''}`;
    cell.setAttribute("data-index", idx);
    cell.setAttribute("title", `${stage.from} to ${stage.to} (${stage.dist} km)`);

    // Extract day of month and month abbreviation
    const dateParts = stage.date.split(" ");
    const dayOfMonth = dateParts[0];
    const monthAbbrev = dateParts[1] || "";

    cell.innerHTML = `
      <span class="cell-day-num">${stage.day}</span>
      <span class="cell-date">${dayOfMonth} ${monthAbbrev}</span>
    `;

    cell.addEventListener("click", () => {
      setActiveStage(idx);
      // Pan map to location
      map.setView([stage.lat, stage.lon], 8);
      // Open marker popup
      mapElements.markers[idx].openPopup();
    });

    grid.appendChild(cell);
  });
}

// Calculate total statistics for header
function calculateOverallStats() {
  let totalDist = 0;
  let totalElev = 0;
  const countries = new Set();
  
  currentRouteData.stages.forEach(s => {
    totalDist += s.dist;
    totalElev += s.elev;
    if (s.country) countries.add(s.country);
  });

  document.getElementById("stat-distance").innerHTML = `${totalDist.toLocaleString()} <small>km</small>`;
  document.getElementById("stat-duration").innerHTML = `${currentRouteData.stages.length} <small>Days</small>`;
  document.getElementById("stat-elevation").innerHTML = `${totalElev.toLocaleString()} <small>m</small>`;
  document.getElementById("stat-countries").innerText = countries.size || 1;
}

// Set Active Day Stage
function setActiveStage(index) {
  activeStageIndex = index;
  const activeDayNum = currentRouteData.stages[index].day;
  const routeColor = currentRouteData.isImported ? "var(--color-accent)" : "var(--color-strava)";
  const activeHighlightColor = currentRouteData.isImported ? "#fc5200" : "#facc15"; // Orange for custom, Yellow for default
  
  // Highlight cell in calendar
  const cells = document.querySelectorAll(".calendar-day-cell.active-cell");
  cells.forEach((cell, idx) => {
    if (idx === index) {
      cell.classList.add("active");
      cell.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      cell.classList.remove("active");
    }
  });

  // Highlight marker
  mapElements.markers.forEach((marker, idx) => {
    const element = marker.getElement();
    if (element) {
      if (idx === index) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  });

  // Highlight active day's route segment polyline in bright orange, dim others
  Object.keys(mapElements.polylines).forEach(dayKey => {
    const dayNum = parseInt(dayKey);
    const polyline = mapElements.polylines[dayNum];
    if (dayNum === activeDayNum) {
      polyline.setStyle({
        color: "#fc5200", // Highlight active in bright Strava Orange!
        weight: 8,       // Thicker highlight
        opacity: 1.0
      });
      polyline.bringToFront();
    } else {
      polyline.setStyle({
        color: routeColor,
        weight: 3,       // Thinner for non-active
        opacity: 0.3     // Muted/dimmed to stand out
      });
    }
  });

  // Update Detail Panel Overlay
  const stage = currentRouteData.stages[index];
  document.getElementById("detail-day-title").innerText = `Day ${stage.day}`;
  document.getElementById("detail-route-names").innerText = `${stage.from} to ${stage.to}`;
  document.getElementById("detail-distance").innerText = `${stage.dist} km`;
  document.getElementById("detail-elevation").innerText = `+${stage.elev} m`;
  document.getElementById("detail-date").innerText = stage.date;
  document.getElementById("detail-desc").innerText = stage.desc;

  // Render Elevation Profile Sparkline Chart
  renderElevationProfile(stage);

  document.getElementById("day-detail").classList.remove("hidden");
}

// Clear Active Day Stage Highlight
function clearActiveStage() {
  activeStageIndex = null;
  const routeColor = currentRouteData.isImported ? "var(--color-accent)" : "var(--color-strava)";

  // Unhighlight cell in calendar
  const cells = document.querySelectorAll(".calendar-day-cell.active-cell");
  cells.forEach(cell => cell.classList.remove("active"));

  // Unhighlight markers
  mapElements.markers.forEach(marker => {
    const element = marker.getElement();
    if (element) {
      element.classList.remove("active");
    }
  });

  // Reset all polylines to default style
  Object.keys(mapElements.polylines).forEach(dayKey => {
    const dayNum = parseInt(dayKey);
    const polyline = mapElements.polylines[dayNum];
    if (polyline) {
      polyline.setStyle({
        color: routeColor,
        weight: 4,
        opacity: 0.85
      });
    }
  });

  // Hide Detail Panel Overlay
  document.getElementById("day-detail").classList.add("hidden");
}


// Render dynamic elevation profile mini sparkline based on real GPX track point data
function renderElevationProfile(stage) {
  const svg = document.getElementById("detail-elevation-chart");
  if (!svg) return;
  svg.innerHTML = "";

  let elevData = [];
  
  // Try to use real GPX elevation data if available
  if (currentRouteData && currentRouteData.trackPoints) {
    const dayPoints = currentRouteData.trackPoints.filter(p => p.day === stage.day);
    if (dayPoints.length > 0) {
      elevData = dayPoints.map(p => p.ele || 0);
    }
  }

  // Fallback: Generate synthetic profile based on elevation gain if no real points exist
  if (elevData.length === 0) {
    const profilePoints = 15;
    let currentVal = 100;
    elevData.push(currentVal);
    
    // Seed profile curve using day number
    const seed = stage.day;
    for (let i = 1; i < profilePoints; i++) {
      const progress = i / profilePoints;
      const bump = Math.sin(progress * Math.PI * 3 + seed) * (stage.elev * 0.3);
      const climb = progress * (stage.elev * 0.1);
      currentVal = 100 + bump + climb;
      if (currentVal < 20) currentVal = 20; // Bound floor
      elevData.push(currentVal);
    }
  }

  // Downsample elevData if it's too large to keep SVG clean and fast (e.g. max 200 points)
  if (elevData.length > 200) {
    const step = Math.ceil(elevData.length / 200);
    const downsampled = [];
    for (let i = 0; i < elevData.length; i += step) {
      downsampled.push(elevData[i]);
    }
    elevData = downsampled;
  }

  const maxVal = Math.max(...elevData);
  const minVal = Math.min(...elevData);
  const valRange = maxVal - minVal || 1;

  // Render SVG points
  const width = 300;
  const height = 80;
  const padding = 5;
  const usableHeight = height - padding * 2;
  
  let pointsString = `0,${height} `;
  let strokePoints = "";

  elevData.forEach((val, i) => {
    const x = (i / (elevData.length - 1)) * width;
    const y = height - padding - ((val - minVal) / valRange) * usableHeight;
    pointsString += `${x},${y} `;
    strokePoints += `${x},${y} `;
  });

  pointsString += `${width},${height}`;

  // Area
  const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  polygon.setAttribute("points", pointsString);
  polygon.setAttribute("class", "elevation-path");
  svg.appendChild(polygon);

  // Line
  const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  polyline.setAttribute("points", strokePoints);
  polyline.setAttribute("stroke", "var(--color-strava)");
  polyline.setAttribute("stroke-width", "2");
  polyline.setAttribute("fill", "none");
  svg.appendChild(polyline);
}

// Render dynamic elevation profile mini sparkline for the entire journey
function renderFullTripElevationProfile() {
  const svg = document.getElementById("full-elevation-chart");
  if (!svg) return;
  svg.innerHTML = "";

  let elevData = [];
  if (currentRouteData && currentRouteData.trackPoints && currentRouteData.trackPoints.length > 0) {
    elevData = currentRouteData.trackPoints.map(p => p.ele || 0);
  }

  // Fallback: generate synthetic profile across all stages if no track points exist
  if (elevData.length === 0) {
    currentRouteData.stages.forEach(stage => {
      const stagePts = 10;
      const seed = stage.day;
      for (let i = 0; i < stagePts; i++) {
        const progress = i / stagePts;
        const bump = Math.sin(progress * Math.PI * 3 + seed) * (stage.elev * 0.3);
        const val = 100 + bump + progress * (stage.elev * 0.1);
        elevData.push(val < 20 ? 20 : val);
      }
    });
  }

  // Downsample to max 1000 points for the SVG sparkline to keep rendering fast and clean
  if (elevData.length > 1000) {
    const step = Math.ceil(elevData.length / 1000);
    const downsampled = [];
    for (let i = 0; i < elevData.length; i += step) {
      downsampled.push(elevData[i]);
    }
    elevData = downsampled;
  }

  if (elevData.length === 0) return;

  const maxVal = Math.max(...elevData);
  const minVal = Math.min(...elevData);
  const valRange = maxVal - minVal || 1;

  const width = 1000;
  const height = 80;
  const padding = 5;
  const usableHeight = height - padding * 2;

  let pointsString = `0,${height} `;
  let strokePoints = "";

  elevData.forEach((val, i) => {
    const x = (i / (elevData.length - 1)) * width;
    const y = height - padding - ((val - minVal) / valRange) * usableHeight;
    pointsString += `${x},${y} `;
    strokePoints += `${x},${y} `;
  });

  pointsString += `${width},${height}`;

  // Area
  const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  polygon.setAttribute("points", pointsString);
  polygon.setAttribute("class", "elevation-path");
  svg.appendChild(polygon);

  // Line
  const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  polyline.setAttribute("points", strokePoints);
  polyline.setAttribute("stroke", "var(--color-strava)");
  polyline.setAttribute("stroke-width", "2");
  polyline.setAttribute("fill", "none");
  svg.appendChild(polyline);

  // Update header stats text
  let totalElev = 0;
  currentRouteData.stages.forEach(s => {
    totalElev += s.elev;
  });
  const statsSpan = document.getElementById("full-elevation-stats");
  if (statsSpan) {
    statsSpan.innerText = `Total Ascent: ${totalElev.toLocaleString()} m • Min: ${Math.round(minVal)}m • Max: ${Math.round(maxVal)}m`;
  }
}

// --- UI Event Listeners ---
function setupUIEventListeners() {
  // Toggle Sidebar
  const toggleBtn = document.getElementById("toggle-sidebar");
  const sidebar = document.querySelector(".sidebar");
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    toggleBtn.querySelector("i").classList.toggle("fa-chevron-left");
    toggleBtn.querySelector("i").classList.toggle("fa-chevron-right");
    // Trigger map resize since widths changed
    setTimeout(() => map.invalidateSize(), 300);
  });

  // Close Detail overlay
  document.getElementById("close-detail").addEventListener("click", () => {
    clearActiveStage();
  });
}



// --- GPX Multi-File Parser Engine ---
async function handleGPXFiles(files) {
  const gpxFiles = Array.from(files).filter(f => f.name.endsWith(".gpx"));
  if (gpxFiles.length === 0) {
    alert("Please select valid .gpx files.");
    return;
  }

  // Show loading screen
  const overlay = document.getElementById("loading-overlay");
  const progressFill = document.getElementById("loading-progress");
  const progressText = document.getElementById("loading-text");
  overlay.classList.remove("hidden");

  let parsedTracks = [];

  for (let i = 0; i < gpxFiles.length; i++) {
    const file = gpxFiles[i];
    progressText.innerText = `Parsing file ${i + 1} of ${gpxFiles.length}: ${file.name}...`;
    progressFill.style.width = `${((i) / gpxFiles.length) * 100}%`;
    
    try {
      const trackData = await parseSingleGPXFile(file);
      if (trackData && trackData.points.length > 0) {
        parsedTracks.push(trackData);
      }
    } catch (e) {
      console.error(`Error parsing file ${file.name}:`, e);
    }
  }

  progressFill.style.width = "100%";
  
  if (parsedTracks.length === 0) {
    overlay.classList.add("hidden");
    alert("Could not extract any valid coordinates from the GPX files.");
    return;
  }

  // Process the parsed tracks (pass true for drag and drop)
  processAndMergeGPXTracks(parsedTracks, true);
  overlay.classList.add("hidden");
}

// Downsample coordinates array to limit total points size
function downsamplePoints(points, maxPoints = 800) {
  if (points.length <= maxPoints) return points;
  
  const step = Math.ceil(points.length / maxPoints);
  const result = [];
  
  for (let i = 0; i < points.length; i += step) {
    result.push(points[i]);
  }
  
  // Make sure the last point is included to keep the endpoint exact
  if (result.length > 0 && result[result.length - 1] !== points[points.length - 1]) {
    result.push(points[points.length - 1]);
  }
  
  return result;
}

// Parse GPX text contents
function parseGPXText(text, filename) {
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "application/xml");
  
  // Use querySelectorAll to bypass namespace issues and match tags reliably
  const trackPoints = xml.querySelectorAll("trkpt");
  let points = [];
  
  for (let i = 0; i < trackPoints.length; i++) {
    const pt = trackPoints[i];
    const lat = parseFloat(pt.getAttribute("lat"));
    const lon = parseFloat(pt.getAttribute("lon"));
    
    const eleEl = pt.querySelector("ele");
    const ele = eleEl ? parseFloat(eleEl.textContent) : 0;
    
    const timeEl = pt.querySelector("time");
    const time = timeEl ? new Date(timeEl.textContent) : null;
    
    if (!isNaN(lat) && !isNaN(lon)) {
      points.push({ lat, lon, ele, time });
    }
  }

  // Downsample to max 800 points to save memory, Leaflet performance, and LocalStorage quota
  points = downsamplePoints(points, 800);

  // Get track name or fallback to file name
  const nameEl = xml.querySelector("name");
  const name = nameEl ? nameEl.textContent : filename.replace(".gpx", "");

  return { name, filename, points };
}

// Parse a single GPX file using DOMParser
function parseSingleGPXFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target.result;
        const result = parseGPXText(text, file.name);
        resolve(result);
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

// Fetch and load GPX files from server catalog
async function loadServerRouteCatalog() {
  try {
    const response = await fetch("gpx/catalog.json");
    if (!response.ok) return false;
    const catalog = await response.json();
    if (!Array.isArray(catalog) || catalog.length === 0) return false;

    // Show loading screen
    const overlay = document.getElementById("loading-overlay");
    const progressFill = document.getElementById("loading-progress");
    const progressText = document.getElementById("loading-text");
    overlay.classList.remove("hidden");

    let parsedTracks = [];
    for (let i = 0; i < catalog.length; i++) {
      const filename = catalog[i];
      progressText.innerText = `Loading GPX file ${i + 1} of ${catalog.length}: ${filename}...`;
      progressFill.style.width = `${((i) / catalog.length) * 100}%`;

      try {
        const fileResponse = await fetch(`gpx/${filename}`);
        if (!fileResponse.ok) throw new Error(`Fetch failed for ${filename}`);
        const gpxText = await fileResponse.text();
        const trackData = parseGPXText(gpxText, filename);
        if (trackData && trackData.points.length > 0) {
          parsedTracks.push(trackData);
        }
      } catch (err) {
        console.error(`Error loading server-side GPX file ${filename}:`, err);
      }
    }

    progressFill.style.width = "100%";
    overlay.classList.add("hidden");

    if (parsedTracks.length > 0) {
      processAndMergeGPXTracks(parsedTracks, false);
      return true;
    } else if (catalog.length > 0) {
      alert("GPX Parser Warning: Found GPX files but failed to extract any valid coordinates. Check browser console or GPX file structures.");
    }
  } catch (e) {
    console.log("No server-side GPX catalog found. Details:", e.message);
  }
  return false;
}

// Helper to extract day number from sequentially named GPX files (e.g. "2a.gpx" -> 2)
function getDayNumFromFilename(filename) {
  if (!filename) return null;
  const match = filename.match(/^(\d+)/);
  return match ? parseInt(match[1]) : null;
}

// Process and merge parsed tracks, group into daily stages
function processAndMergeGPXTracks(tracks, isDragAndDrop = false) {
  // Sort tracks chronologically based on their first point's timestamp
  // If no timestamp, sort by filename (or track name if filename is missing)
  tracks.sort((a, b) => {
    const tA = a.points[0]?.time;
    const tB = b.points[0]?.time;
    if (tA && tB) return tA - tB;
    
    const fA = a.filename || "";
    const fB = b.filename || "";
    if (fA && fB) {
      return fA.localeCompare(fB, undefined, { numeric: true, sensitivity: 'base' });
    }
    return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
  });

  let allTrackPoints = [];
  let stages = [];

  // Group multiple files by day number if they share the same day prefix (e.g., "2a.gpx" and "2b.gpx")
  if (tracks.length > 1) {
    let groupedTracks = []; // Array of { dayNum, tracks: [track1, track2, ...] }
    let lastDayNum = null;
    let sequentialDay = 0;

    tracks.forEach(track => {
      let dayNum = getDayNumFromFilename(track.filename);
      
      if (dayNum === null) {
        // Fallback if filename doesn't start with a number
        sequentialDay = Math.max(sequentialDay, lastDayNum || 0) + 1;
        dayNum = sequentialDay;
      } else {
        sequentialDay = dayNum;
      }

      let group = groupedTracks.find(g => g.dayNum === dayNum);
      if (!group) {
        group = { dayNum: dayNum, tracks: [] };
        groupedTracks.push(group);
      }
      group.tracks.push(track);
      lastDayNum = dayNum;
    });

    groupedTracks.forEach((group, idx) => {
      const dayNum = group.dayNum;
      const groupTracks = group.tracks;
      
      // Merge all points from all tracks of this day in order
      let dayPoints = [];
      groupTracks.forEach(track => {
        track.points.forEach(pt => {
          allTrackPoints.push({
            lat: pt.lat,
            lon: pt.lon,
            ele: pt.ele,
            day: dayNum
          });
          dayPoints.push(pt);
        });
      });

      if (dayPoints.length === 0) return;

      const startPt = dayPoints[0];
      const endPt = dayPoints[dayPoints.length - 1];
      
      // Calculate total distance & elevation gain across all tracks of this day
      const dist = Math.round(calculateTrackDistance(dayPoints));
      const elev = Math.round(calculateTrackElevationGain(dayPoints));
      
      // Format nice date
      let dateString = "Stage " + dayNum;
      if (startPt.time) {
        dateString = formatDate(startPt.time);
      } else {
        // Fallback: estimate from default timeline starting on 24th April 2026
        const startDate = new Date(2026, 3, 24); // April 24, 2026
        startDate.setDate(startDate.getDate() + (dayNum - 1));
        dateString = formatDate(startDate);
      }

      // Determine the day name/to location using the last track of the day
      const lastTrack = groupTracks[groupTracks.length - 1];
      let toLocation = lastTrack.name
        .replace(/day\s*\d+[a-z]?\s*-*\s*/gi, "") // Remove "Day 2a" or "day 2" etc.
        .replace(/morning|afternoon|evening/gi, "")
        .replace(/\s+/g, " ")
        .trim() || `Stop ${dayNum}`;
        
      stages.push({
        day: dayNum,
        date: dateString,
        from: idx === 0 ? "London" : stages[idx - 1].to,
        to: toLocation,
        country: guessCountry(endPt.lat, endPt.lon),
        dist: dist || 70,
        elev: elev || 500,
        lat: endPt.lat,
        lon: endPt.lon,
        desc: `Completed day ${dayNum} ride. Covered ${dist} km and climbed ${elev} meters across ${groupTracks.length} segments.`
      });
    });
  } else if (tracks.length === 1) {
    // SINGLE BIG FILE: We must auto-segment it!
    const singleTrack = tracks[0];
    const pts = singleTrack.points;
    let dayCounter = 1;
    
    // Auto Segment by Date or Time Gaps (> 6 hours)
    let currentDayPoints = [];
    currentDayPoints.push(pts[0]);
    
    for (let i = 1; i < pts.length; i++) {
      const prevPt = pts[i - 1];
      const currPt = pts[i];
      
      let isNewDay = false;
      
      if (prevPt.time && currPt.time) {
        const timeDiffHrs = (currPt.time - prevPt.time) / (1000 * 60 * 60);
        const dateDiff = currPt.time.getDate() !== prevPt.time.getDate();
        if (timeDiffHrs > 6 || dateDiff) {
          isNewDay = true;
        }
      } else {
        // Fallback: split every 80 km if no timestamps exist
        const runningDist = calculateTrackDistance(currentDayPoints);
        if (runningDist > 80) {
          isNewDay = true;
        }
      }

      if (isNewDay && currentDayPoints.length > 0) {
        // Finalize current day
        addSegmentedDay(currentDayPoints, dayCounter, stages, allTrackPoints);
        dayCounter++;
        currentDayPoints = [];
      }

      currentDayPoints.push(currPt);
    }
    
    // Final day
    if (currentDayPoints.length > 0) {
      addSegmentedDay(currentDayPoints, dayCounter, stages, allTrackPoints);
    }
  }

  // Update starting labels
  if (stages.length > 0) {
    stages[0].from = "Start Point";
  }

  // Save to State
  currentRouteData = {
    isImported: true,
    stages: stages,
    trackPoints: allTrackPoints
  };

  // Cache in LocalStorage only if it was drag-and-dropped (prevents quota issues for server loads)
  if (isDragAndDrop) {
    try {
      localStorage.setItem("velo_custom_route", JSON.stringify(currentRouteData));
    } catch (e) {
      console.warn("Could not save custom route to local storage:", e.message);
    }
  }
  
  // Render
  activeStageIndex = null;
  renderRoute();
}

function addSegmentedDay(dayPoints, dayNum, stagesList, allPointsList) {
  const startPt = dayPoints[0];
  const endPt = dayPoints[dayPoints.length - 1];
  const dist = Math.round(calculateTrackDistance(dayPoints));
  const elev = Math.round(calculateTrackElevationGain(dayPoints));
  
  const dateString = startPt.time ? formatDate(startPt.time) : `Stage ${dayNum}`;

  dayPoints.forEach(pt => {
    allPointsList.push({
      lat: pt.lat,
      lon: pt.lon,
      ele: pt.ele,
      day: dayNum
    });
  });

  const fromName = dayNum === 1 ? "Start Point" : stagesList[stagesList.length - 1].to;
  
  stagesList.push({
    day: dayNum,
    date: dateString,
    from: fromName,
    to: `Stop ${dayNum}`,
    country: guessCountry(endPt.lat, endPt.lon),
    dist: dist || 60,
    elev: elev || 400,
    lat: endPt.lat,
    lon: endPt.lon,
    desc: `Segment ${dayNum} of the journey. Covered ${dist} km and climbed ${elev} meters.`
  });
}

// --- GPS Helper Calculations ---

// Distance between two lat/lon coordinates in km (Haversine formula)
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
            Math.sin(dLon/2) * Math.sin(dLon/2);
            
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Total distance of a track in km
function calculateTrackDistance(points) {
  let distance = 0;
  for (let i = 1; i < points.length; i++) {
    distance += haversineDistance(
      points[i-1].lat, points[i-1].lon,
      points[i].lat, points[i].lon
    );
  }
  return distance;
}

// Total positive elevation gain in meters
function calculateTrackElevationGain(points) {
  let elevationGain = 0;
  for (let i = 1; i < points.length; i++) {
    const diff = points[i].ele - points[i-1].ele;
    if (diff > 0.5) { // filter micro-fluctuations
      elevationGain += diff;
    }
  }
  return elevationGain;
}

// Formatting date utility
function formatDate(date) {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
}

// Simple country boundary bounding box approximation for the London-Istanbul route
function guessCountry(lat, lon) {
  if (lat > 50.0 && lon < 1.5) return "United Kingdom";
  if (lat > 48.0 && lon > 1.5 && lon < 8.0) return "France";
  if (lat > 47.5 && lon > 7.5 && lon < 13.0) return "Germany";
  if (lat > 46.5 && lon > 9.5 && lon < 17.0) return "Austria";
  if (lat > 47.7 && lon > 16.8 && lon < 22.5) return "Slovakia";
  if (lat > 45.7 && lon > 16.0 && lon < 22.8) {
    if (lat > 46.0 && lon < 22.0) return "Hungary";
    return "Serbia";
  }
  if (lat > 41.2 && lon > 22.0 && lon < 28.5) return "Bulgaria";
  if (lat < 42.2 && lon > 25.5) return "Turkey";
  return "Europe";
}
