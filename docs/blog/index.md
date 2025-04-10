---
layout: home
title: Welcome
---

# Source Code Diver

Welcome to the development blog for the **Source Code Diver** project — a tool for visual, automated code review.

Follow the journey as we build it, step-by-step.

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>