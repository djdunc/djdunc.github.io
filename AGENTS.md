# AGENTS.md — Project Guide & System Context

This document provides context, conventions, and architectural details for AI agents and developers working on this repository.

## 1. Overview

- **Project:** Personal website and blog of Duncan Wilson ([iot.io](https://www.iot.io)).
- **Repository:** `djdunc/djdunc.github.io`
- **Platform:** Jekyll static site hosted on **GitHub Pages** (built automatically from the `main` branch).
- **Core Topics:** Internet of Things, connected environments, making, sensing, design, data, research, and weekly updates.

## 2. Architecture & GitHub Pages Constraints

### GitHub Pages Build Environment
- Deployed via GitHub Pages' standard Jekyll builder in `--safe` mode.
- **Critical rule on plugins:** Custom Ruby plugins located in `_plugins/` (such as `_plugins/ruby_fix.rb`) **do not run** in GitHub Pages production builds. They only run during local builds.
- Allowed plugins must be in the GitHub Pages whitelist and configured in `_config.yml`:
  - `jekyll-feed`
  - `jekyll-seo-tag`
  - `jekyll-paginate`
- Any dynamic functionality (search, filtering, tag clouds, UI widgets) **must** be implemented via standard Jekyll Liquid templates and client-side JavaScript / CSS.

### Theme & Templates
- Originally derived from Jekyll's **Minima** theme, but completely extracted into local repository directories:
  - `_includes/`: Header, footer, head, color-shifts, comments, analytics, etc.
  - `_layouts/`: `base.html`, `default.html`, `page.html`, `post.html`, `archive.html`, `tag.html`, etc.
  - `_sass/`: SCSS stylesheets.
  - `assets/`: Compiled CSS, images, and static assets.
- **Rule:** Do not configure `theme: minima` in `_config.yml`. All customizations are made directly in the local template and stylesheet files.

## 3. Site Structure & Navigation

- **Header Pages:** Managed in `_config.yml` via `header_pages`:
  - `hello.md` (`/hello/`)
  - `blog/index.html` (`/blog/`)
  - `projects.md` (`/projects/`)
  - `archive.md` (`/archive/`)
- **Key Discovery Pages:**
  - `/blog/`: Paginated view of recent posts (10 per page), displaying excerpts, tags, and thumbnails.
  - `/archive/`: Complete chronologically grouped

  - `/tag/`: Client-side tag filter cloud and post listings grouped by tag.

## 4. Post Conventions

- **File Location:** `_posts/YYYY/YYYY-MM-DD-slug.md`
- **Standard Front Matter:**
  ```yaml
  ---
  layout: post
  title: "Title of Post"
  date: YYYY-MM-DD HH:MM:SS +0100
  excerpt_separator: <!--more-->
  tags:
    - research
    - making
  category: blog
  ---
  ```
- **Tags:** Common tags include: `research`, `making`, `events`, `teaching`, `publication`, `arduino`, `casa`, `hardware`, `book`, `photos`, `travel`, `home`, `stuff`.
- **Excerpts:** Separate the lead paragraph from the rest of the post with `<!--more-->`.
- **Media / Flickr Embeds:** Posts frequently embed Flickr photos using `<a>` tags with `data-flickr-embed="true"` and an `<img>` tag, accompanied by Flickr client script. Layouts use `strip_html` or regex when extracting clean excerpts.

## 5. Search & Running Totals

- **Post Count:** Displayed dynamically on the blog index using Liquid `{{ site.posts.size }}`.
- **Search System:**
  - `search.json` generated at build time via Liquid containing `title`, `url`, `date`, `tags`, and clean, stripped `content`.
  - Client-side search runs on `/archive/`, allowing instant full-text filtering across all posts with matching snippets.

## 6. Local Development

- **Ruby Version:** Ruby 3+ / 4+.
- **Compatibility Shim:** `_plugins/ruby_fix.rb` provides backward compatibility for Liquid 4 taint/untaint methods on newer Ruby versions for local serving.
- **Start Local Server:**
  ```bash
  bundle exec jekyll serve
  ```
- **Build Static Site:**
  ```bash
  bundle exec jekyll build
  ```

## 7. Blog Writing & Editorial Guidelines

### Role & Workflow
You are an editorial collaborator for a technical Jekyll blog.
- Never modify published files in `_posts/` unless explicitly asked.
- When reviewing a draft, propose concrete edits and explain *why* they improve clarity, pacing, or technical precision.
- Do not execute `git`, `bundle`, or `jekyll` shell commands without asking first.

### Weekly Post Workflow
Each week the author provides raw notes to be shaped into a blog post. The input typically contains:
- **Bullet points / short paragraphs** of first-person observations (events attended, hardware tested, projects made, walks taken).
- **Flickr image links** (full `<a data-flickr-embed>` blocks or bare URLs) to be placed alongside the relevant text.
- **A closing "links of the week" list** sourced from [links.duncanwilson.com/bookmarks/shared](https://links.duncanwilson.com/bookmarks/shared).

**Process preferences:**
- **All changes in one pass.** Present the complete set of proposed edits (title, lead, body, images, links, typos) as a single batch. Do not step through suggestions one at a time.
- **Apply immediately** once the author says "apply" or "go" — do not re-present the diffs.
- **Flickr images:** always use `width="100%"` with **no** `height` attribute (matches house style, preserves aspect ratio).
- **Links of the week:** convert bare URLs to descriptive anchor text (e.g. `[Kottke — Video Closet](https://kottke.org/video-closet/)`).
- **Title:** must be specific and evocative (name the events/projects); never generic like "Lab Work" or "This Week".
- **Front matter:** preserve the author's `tags` comment block (the "# tags: try to choose one or two…" list) and `category: blog` line as-is.

### Voice, Tone & Cadence
- **Practical & Grounded:** Write from first-hand engineering and making experience. Let specific hardware, measurements, and real constraints carry the narrative rather than adjectives.
- **Structure:** Open directly with the problem, build, or observation—avoid generic introductory throat-clearing ("In this post, we will explore...").
- **Language:** British English spelling (`colour`, `optimise`, `aluminium`, `analogue`).
- **Honesty about Trade-offs:** Note what failed, what required workarounds, and power/cost/maintenance trade-offs candidly.

### Jekyll & Markdown Conventions
- Preserve valid YAML front matter (`layout`, `title`, `date`, `categories`, `tags`).
- Use Kramdown-compatible Markdown with explicit language tags on fenced code blocks (`python`, `cpp`, `bash`, `yaml`, `html`).
- Keep image paths relative to the site's asset convention (check existing posts before inventing paths).

### Reference Posts (Style Anchors)
Before drafting or rewriting sections, read these posts from `_posts/` to match sentence length, heading hierarchy, and technical depth:
- `_posts/2026/2026-11-21-iot-inanimate.md`
- `_posts/2025/2025-02-28-arup-LLDC.md`
- `_posts/2026/2026-05-30-DID.md`
