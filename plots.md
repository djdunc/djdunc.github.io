---
layout: page
title: Plots
category: projects
permalink: /plots/
---

<header class="post-header">
<h1>{{ page.title }}</h1>
</header>

<div class="gallery">
  {% assign image_folder = '/assets/img/prints/' %}
  {% for image in site.static_files %}
    {% if image.path contains image_folder and image.extname == '.svg' %}
      <div class="image-container">
        <a href="{{ image.path | relative_url }}">
        <img src="{{ image.path | relative_url }}" alt="{{ image.name }}"  title="{{ image.name }}"/>
        </a>
      </div>
    {% endif %}
  {% endfor %}
</div>

<style>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; /* Space between thumbnails */
    justify-content: center; /* Center thumbnails on the page */
  }
  .image-container {
    text-align: center;
  }
  .image-container img {
    width: 80px; /* Thumbnail width */
    height: auto; /* Maintain aspect ratio */
    display: block;
    border: 1px solid #ddd; /* Optional: Add a border */
    border-radius: 4px; /* Optional: Rounded corners */
    transition: transform 0.2s ease; /* Optional: Smooth zoom effect */
  }
  .image-container img:hover {
    transform: scale(1.1); /* Optional: Slight zoom on hover */
  }
</style>

