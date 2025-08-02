# jasperwang.dev
Personal portfolio website built with Astro and hosted on GitHub Pages.

## Live Site
https://www.jasperwang.dev

## How to feature projects on homepage and specify display order?

1. **Add projects**: Create markdown files under `content/projects/` with frontmatter:
```md
---
title: 'Bob Is Melting'
description: '...'
cover: '...'
tags: [...]
---
```

2. **Configure order**: Edit `src/config/projects.js` to control which projects appear and in what order:
```js
// Featured projects in display order
export const featuredProjects = [
  'bob-is-melting',
  'sud', 
  'borrowhood',
  // ... add more project slugs here
];
```
