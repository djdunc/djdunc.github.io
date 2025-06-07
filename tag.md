---
layout: tag
title: Tag Archive
permalink: /tag/
---

<header class="post-header">
    <h1 class="post-title">{{ page.title | escape }}</h1>
</header>


An archive of posts since the start grouped by tags. Select tag to filter.

<div class="tag-cloud">
  <a href="#" class="tag" data-tag="all">All Posts</a>
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
    <a href="#" class="tag" data-tag="{{ tag | first | slugify }}">{{ tag[0] }} 
    <span class="tag-count">{{ tag | last | size }}</span></a>
  {% endfor %}
</div>

<hr>

<div class="post-list">
  <ul>
    {% for post in site.posts %}
      <li class="post-item" data-tags="{% for tag in post.tags %}{{ tag | slugify }} {% endfor %}">
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="post-date">{{ post.date | date: "%b %d, %Y" }}</span>
        <span class="post-tags">
          {% for tag in post.tags %}
            <a href="#" class="tag" data-tag="{{ tag | slugify }}">{{ tag }}</a>
          {% endfor %}
        </span>
      </li>
    {% endfor %}
  </ul>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const tags = document.querySelectorAll('.tag');
    const posts = document.querySelectorAll('.post-item');

    // This function contains the core filtering logic
    function filterPosts(selectedTag) {
      // Activate the correct tags
      tags.forEach(t => t.classList.remove('active'));
      document.querySelectorAll(`.tag[data-tag="${selectedTag}"]`).forEach(t => t.classList.add('active'));

      // Loop through posts and show/hide them
      if (selectedTag === 'all' || !selectedTag) {
        if (!selectedTag) {
            // If hash is empty, activate "All Posts"
            document.querySelector('.tag[data-tag="all"]').classList.add('active');
        }
        posts.forEach(post => {
          post.style.display = ''; // Use empty string to revert to CSS
        });
      } else {
        posts.forEach(post => {
          const postTags = post.getAttribute('data-tags').split(' ');
          if (postTags.includes(selectedTag)) {
            post.style.display = ''; // Use empty string to revert to CSS
          } else {
            post.style.display = 'none';
          }
        });
      }
    }

    // Add click listeners to all tags on the page
    tags.forEach(tag => {
      tag.addEventListener('click', function(e) {
        e.preventDefault();
        const clickedTag = this.getAttribute('data-tag');
        
        // Update the URL hash without reloading the page
        window.location.hash = clickedTag;
      });
    });

    // --- NEW AND IMPORTANT PART ---
    // Listen for changes to the URL hash
    window.addEventListener('hashchange', function() {
      const tagFromHash = window.location.hash.substring(1); // Get tag name from URL
      filterPosts(tagFromHash);
    });

    // Trigger the filter on initial page load if a hash exists
    if (window.location.hash) {
      const initialTag = window.location.hash.substring(1); // Get tag name from URL
      filterPosts(initialTag);
    } else {
      // If no hash, default to showing all posts
      filterPosts('all');
    }

  });
</script>

<style>
  .tag-cloud {
    margin-bottom: 2rem;
  }
  .tag-cloud .tag {
    font-size: 0.8rem;
    padding: 0.15rem 0.5rem;
  }
  .tag-cloud .tag-count {
    font-size: 0.7rem;
  }
  .tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    margin: 0.25rem;
    background-color: #f2f2f2;
    border-radius: 5px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.3s;
  }
  .tag:hover, .tag.active {
    background-color: #007bff;
    color: #fff;
  }
  .tag-count {
    font-size: 0.8rem;
    color: #888;
  }
  .tag.active .tag-count {
    color: #fff;
  }

  /* --- Styles for the Post List --- */
  .post-list ul {
    list-style-type: none;
    padding-left: 0;
  }

  /* 1. Make the list item a flex container */
  .post-item {
    display: flex; /* Aligns children (date, title, tags) in a row */
    align-items: baseline; /* Aligns text nicely along the bottom */
    margin-bottom: 0.75rem; /* A little space between rows */
    white-space: nowrap; /* Prevents any items from wrapping */
  }

  /* 2. Style the date */
  .post-item .post-date {
    color: #666;
    font-size: 0.9rem;
    margin-right: 1rem; /* Space between date and title */
    flex-shrink: 0; /* Prevents the date from shrinking */
  }

  /* 3. Style the title to handle overflow */
  .post-item .post-link {
    font-weight: bold;
    font-size: 1.1rem;
    color: #333;
    text-decoration: none;
    margin-right: 1rem; /* Space between title and tags */
    
    /* The next 3 lines handle long titles */
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; /* Adds the "..." */
  }
  .post-item .post-link:hover {
    color: #007bff;
  }

  /* 4. Style the container for the tags */
  .post-tags {
    flex-shrink: 0; /* Prevents the tags from shrinking */
  }

  /* 5. Style the individual tags (no changes from before) */
  .post-item .tag {
    font-size: 0.7rem;
    padding: 0.1rem 0.4rem;
    vertical-align: middle;
  }
</style>