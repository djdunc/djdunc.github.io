---
layout: page
title: Projects
category: projects
permalink: /projects/
---

<header class="post-header">
  {%- if page.title -%}
  <p><i><b>{{ page.title }}</b> - things made, a collection of projects from the workshop</i></p>
  {%- endif -%}


</header>

<div class="project-grid">
{%- for post in site.categories[page.category] -%}
  <a href="{{ post.url }}" class="project-card-link" style="text-decoration: none; color: inherit;">
    <div class="project-card">
      <div class="project-card-img-container">
        <img src="{{ post.image }}" class="project-card-img" alt="{{ post.title }}" title="{{ post.title }}">
      </div>
      <div class="project-card-content">
        <h3 class="project-card-title">{{ post.title }}</h3>
      </div>
    </div>
  </a>
{%- endfor -%}
</div>

<!--
Categories

{% for category in site.categories %}
  {{ category[0] }}
{% endfor %}

<hr>
Tags
{% for tag in site.tags %}
  {{ tag[0] }}
{% endfor %}



-->
