---
layout: page
title: Projects
category: projects
permalink: /projects/
---

<header class="post-header">
    <h1 class="post-title">Things made</h1>
</header>

<div class="image-gallery">
{%- for post in site.categories[page.category] -%}

  <div class="box">
    <a href="{{ post.url }}"><img src="{{ post.image}}" class="img-in-gallery" alt="{{ post.title }}"  title="{{ post.title }}" > </a> 
    <p class="box">{{ post.title }}</p>
  </div>

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
