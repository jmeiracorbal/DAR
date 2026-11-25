---
layout: layouts/base.njk
title: About
description: Machine learning topics and how the site was built.
permalink: /about/
---
<section class="container container--narrow section prose">

# About this blog

**{{ site.title }}** explains machine learning through examples, from spam filtering and flower classification to neural-network diagrams and PyTorch code.

## Topics covered

- **Foundations:** what machine learning is and the main types of learning.
- **Neural networks:** neurons, layers, activations and how they fit together.
- **Training:** loss functions, gradient descent and how to avoid overfitting.
- **Hardware:** why GPUs and accelerators made deep learning practical.

## How it was built

The site was created for the course *Desarrollo de Aplicaciones en Red* (UNIR). [Eleventy](https://www.11ty.dev/) turns the Markdown posts into HTML using custom templates and CSS.

- Semantic HTML5 (`header`, `nav`, `main`, `article`, `figure`, `time`…).
- Responsive layout with CSS Grid and Flexbox, custom properties and automatic dark mode.
- Deployed to GitHub Pages with GitHub Actions on every push, and runnable locally with Docker.

All photos come from [Unsplash](https://unsplash.com/) and are credited on each post.

</section>
