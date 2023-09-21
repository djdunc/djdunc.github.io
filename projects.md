---
layout: page
title: Projects
category: projects
permalink: /projects/
---
<!-- 
<figure>
  <img src="{{site.url}}/assets/img/chamonix2019.webp" alt="Chamonix 2019"/>
  <figcaption>Chamonix 2019</figcaption>
</figure>
-->

<header class="post-header">
    <h1 class="post-title">Things made</h1>
</header>

{%- for post in site.categories[page.category] -%}
  <a href="{{ post.url }}"><img src="{{ post.image}}" height="200" style="padding: 2px" title="{{ post.title }}"> </a> 
{% endfor %}

<!---- 
Categories

{% for category in site.categories %}
  {{ category[0] }}
{% endfor %}

<hr>
Tags
{% for tag in site.tags %}
  {{ tag[0] }}
{% endfor %}

---->
