---
title: Latest Articles
permalink: /articles/
layout: post-page
redirect_from:
  - /articles
excerpt: Explore our collection of articles and insights
comments: false
---
<section>
    <!-- Blog Cards -->
    <div class="container-fluid">
      <div class="row pb-4 pb-lg-0 me-lg-0">
        {%- for post in site.posts limit:30 -%}
        <article class="col-lg-4 mb-5" data-cue="slideInUp" data-delay="250">
          <figure class="mb-4 zoom-img">
            <a href="{{ post.url }}" class="text-decoration-none d-flex align-items-center" style="min-height: 300px;">
              {% if post.image %}
              <img src="{{ post.image }}" alt="{{ post.title }}" class="img-fluid rounded-3">
              {% else %}
              <img src="/assets/images/posts/default-post.jpg" alt="{{ post.title }}" class="img-fluid rounded-3">
              {% endif %}
            </a>
          </figure>

          {% if post.categories %}
          <a href="#!" class="badge bg-primary-subtle text-info-emphasis rounded-pill  text-decoration-none text-uppercase">{{ post.categories | first }}</a>
          {% endif %}
          
          <h3 class="my-3 lh-base h4">
            <a href="{{ post.url }}" class="text-reset text-decoration-none">{{ post.title }}</a>
          </h3>
          <div class="d-flex align-items-center justify-content-between mb-3 mb-md-0">
            <div class="d-flex align-items-center">
              {% if post.author_avatar %}
              <img src="{{ post.author_avatar }}" alt="Avatar" class="avatar avatar-xs rounded-circle">
              {% endif %}
              <div class="">
                <img src="{{ site.baseurl }}/assets/images/avatar/author.png" alt="Avatar" width="24" height="24"
                  class="avatar avatar-xs rounded-circle me-2" />
                <a href="#" class="text-reset fs-6 text-decoration-none">{{ post.author | default: site.author }}</a>
              </div>
            </div>
            <div class="ms-3">
              <span class="fs-6">{{ post.date | date: "%b %d, %Y" }}</span>
            </div>
          </div>
        </article>
        {%- endfor -%}
      </div>
    </div>
</section>