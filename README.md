<div align="center">
<h1 align="center">
<img src="./public/favicon-96x96.png" width="96" />
<br>jasperwang.dev</h1>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/Astro-FF5D01.svg?style=flat-square&logo=Astro&logoColor=white" alt="Astro" />
<img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=flat-square&logo=GitHub-Actions&logoColor=white" alt="GitHub%20Actions" />
<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat-square&logo=YAML&logoColor=white" alt="YAML" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/jasper-th-wang/portfolio_v1?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/jasper-th-wang/portfolio_v1?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/jasper-th-wang/portfolio_v1?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/jasper-th-wang/portfolio_v1?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [🎈 Live Site](#-live-site)
- [📂 repository Structure](#-repository-structure)
- [⚙️ Featured Modules](#-featured-modules)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running portfolio_v1](#-running-portfolio_v1)

---

## 📍 Overview

My personal portfolio website built using the Astro framework and hosted with Github Pages.

It includes automated deployment through GitHub Actions, with structured directories for components, content, layouts, styles, and deployment workflows.

<img src="./src/assets/images/portfolio.png" alt="my portfolio page" />

---

## 🎈 Live Site

https://www.jasperwang.dev

---

## 📂 Repository Structure

```sh
└── portfolio_v1/
    ├── .github/
    │   └── workflows/
    │       └── deploy.yml
    ├── CNAME
    ├── astro.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── public/
    │   ├── manifest.json
    ├── src/
    │   ├── components/
    │   │   ├── Breadcrumbs.astro
    │   │   ├── Cards/
    │   │   ├── FormattedDate.astro
    │   │   ├── Link.astro
    │   │   ├── MainHeader.astro
    │   │   ├── Navigation.astro
    │   │   ├── PostsList.astro
    │   │   ├── Sections/
    │   │   ├── Socials.astro
    │   │   ├── TOC.astro
    │   │   ├── Tags.astro
    │   │   └── svgs/
    │   ├── content/
    │   │   ├── aboutSnippets/
    │   │   ├── config.ts
    │   │   ├── posts/
    │   │   └── projects/
    │   ├── env.d.ts
    │   ├── layouts/
    │   │   ├── Layout.astro
    │   │   └── MarkdownLayout.astro
    │   ├── pages/
    │   │   ├── 404.astro
    │   │   ├── index.astro
    │   │   ├── posts/
    │   │   └── projects/
    │   └── styles/
    │       └── normalize.css
    └── tsconfig.json

```

---

## ⚙️ Featured Modules

<details closed><summary>Components</summary>

| File                                                                                                               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Link.astro](https://github.com/jasper-th-wang/portfolio_v1/blob/main/src/components/Link.astro)                   | The `Link.astro` component generates an anchor tag with customizable text and URL, which includes an arrow icon indicating a redirect or link. If the `redirect` prop is true, a `RedirectArrow` icon is displayed; otherwise, a `LinkArrow` is used. Style rules enhance the visual interaction, such as color changes and icon movement on hover, and specific styles are applied for wider screens using media queries.                                                                                           |
| [PostsList.astro](https://github.com/jasper-th-wang/portfolio_v1/blob/main/src/components/PostsList.astro)         | The `PostsList.astro` component generates a styled list of post links for a static site. It imports `CollectionEntry` from Astro and `FormattedDate` for date formatting. The `posts` array from props, each representing a post, is mapped to list items (`<li>`) containing an anchor (`<a>`) that links to the post's URL (using the slug) and displays the post title alongside the formatted publication date. Style rules ensure list items have no bullets and are spaced, with flex layout for post details. |
| [Navigation.astro](https://github.com/jasper-th-wang/portfolio_v1/blob/main/src/components/Navigation.astro)       | The `Navigation.astro` component dynamically generates a navigation menu from a list of strings provided as props. Each navigation item is transformed into an uppercase link with a hover effect, pointing to an anchor on the page. The menu is designed to be hidden on screens smaller than 1024px width and becomes visible on larger screens, adhering to responsive design principles. The CSS included defines styling for the menu and applies transitions to the navigation items.                         |
| [FormattedDate.astro](https://github.com/jasper-th-wang/portfolio_v1/blob/main/src/components/FormattedDate.astro) | The `FormattedDate.astro` component receives a `date` prop, converts it into an ISO string for the `datetime` attribute, and displays it in a human-readable format (e.g., Jan 1, 2021) within a `time` HTML element. This format is localized to English (US) with abbreviated month names and numeric years and days. This component is part of a larger portfolio project structured with content, styling, and automated deployment workflow.                                                                    |
| [Socials.astro](https://github.com/jasper-th-wang/portfolio_v1/blob/main/src/components/Socials.astro)             | The `Socials.astro` component creates a social media icon bar with links to GitHub, LinkedIn, and email. Each icon is imported as an Astro component and wraps an anchor tag directing users to respective URLs, with these actions opening in a new tab. The component is styled to be a flexible row with hover effects, enhancing icon visibility on mouseover.                                                                                                                                                   |
| [TOC.astro](https://github.com/jasper-th-wang/portfolio_v1/blob/main/src/components/TOC.astro)                     | The `TOC.astro` component generates a table of contents (TOC) from markdown content, including headings up to the third level. It converts markdown to an abstract syntax tree (MDAST), extracts the TOC, and then renders it as HTML. If no headings are found, it logs an error and indicates that no headings are present. The TOC is styled to be hidden on small screens and visible on screens wider than 1024 pixels.                                                                                         |
| [Breadcrumbs.astro](https://github.com/jasper-th-wang/portfolio_v1/blob/main/src/components/Breadcrumbs.astro)     | The code defines a Breadcrumbs component for a web application using the Astro framework. It creates navigation links from the current URL path, transforming each segment into a clickable breadcrumb, while the first crumb always represents Home. It ensures the last crumb is styled as the current page and places dividers between crumbs. The styling specifies the appearance and behavior of the breadcrumbs, with dynamic color changes on hover and for the current link.                                |
| [MainHeader.astro](https://github.com/jasper-th-wang/portfolio_v1/blob/main/src/components/MainHeader.astro)       | The `MainHeader.astro` component dynamically renders a page header with optional title, subtitle, and details, varying its presentation based on the `isHome` prop. On the homepage, it includes a navigation bar and social media links. For other pages, it displays breadcrumbs. Additionally, it can show a Table of Contents if `content` is provided. Styling adapts for large screens, with a sticky header for widescreen displays and differing layouts between the homepage and other pages.               |
| [Tags.astro](https://github.com/jasper-th-wang/portfolio_v1/blob/main/src/components/Tags.astro)                   | The `Tags.astro` component takes an array of `tags` as a prop and maps over them to display each tag as an inline element with a specific styling. It features a wrapping container with flex display and a set gap, alongside styled tag elements with a border and border-radius, creating a visual group of tags often used for categorizing content like projects or blog posts in a portfolio website.                                                                                                          |

</details>

<details closed><summary>Cards</summary>

| File                                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ResumeCard.astro](https://github.com/jasper-th-wang/portfolio_v1/blob/main/src/components/Cards/ResumeCard.astro)   | The `ResumeCard.astro` component presents an individual's professional experience entry with a style definition, taking `timespan`, `title`, `organization`, and an optional `description` as props, and rendering them within a card-like structure. If `description` is provided, it will be displayed in a paragraph tag. The embedded stylesheet sets visual aspects of the card such as margins, font style, and opacity.                                               |
| [ProjectCard.astro](https://github.com/jasper-th-wang/portfolio_v1/blob/main/src/components/Cards/ProjectCard.astro) | The `ProjectCard.astro` component renders a project card with a customizable class, an image, and project information including title, description, optional GitHub and live link URLs, an optional blog post link, and tags. It uses a `Link` component for navigation and local styling to structure its layout, which is primarily for display in a portfolio context. The props allow for optional inputs, and the card is styled to fit well within a portfolio layout. |

</details>

---

## 🚀 Getting Started

### 🔧 Installation

1. Clone the portfolio_v1 repository:

```sh
git clone https://github.com/jasper-th-wang/portfolio_v1
```

2. Change to the project directory:

```sh
cd portfolio_v1
```

3. Install the dependencies:

```sh
► npm install
```

### 🤖 Running portfolio_v1

```sh
► npm run start
```

---
