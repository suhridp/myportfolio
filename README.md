<h2 align="center">
  Portfolio Website - v2.0<br/>
  <a href="https://suhridbp.vercel.app/" target="_blank">suhrid.tech</a>
</h2>

<br/>

<div align="center">
  <a href="https://forthebadge.com">
    <img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built with love" />
  </a>
  &nbsp;
  <a href="https://forthebadge.com">
    <img src="https://forthebadge.com/images/badges/made-with-javascript.svg" alt="Made with JavaScript" />
  </a>
  &nbsp;
  <a href="https://forthebadge.com">
    <img src="https://forthebadge.com/images/badges/open-source.svg" alt="Open Source" />
  </a>
  &nbsp;
  <img src="https://img.shields.io/github/stars/suhridp/Portfolio?color=red&logo=github&style=for-the-badge" alt="GitHub stars" />
  &nbsp;
  <img src="https://img.shields.io/github/forks/suhridp/Portfolio?color=red&logo=github&style=for-the-badge" alt="GitHub forks" />
</div>

<h3 align="center">
    🔹
    <a href="https://github.com/suhridp/Portfolio/issues">Report Bug</a> &nbsp; &nbsp;
    🔹
    <a href="https://github.com/suhridp/Portfolio/issues">Request Feature</a>
</h3>

## TL;DR

You can fork this repo to modify and make changes of your own. Please give proper credit by linking back to [suhridp](https://github.com/suhridp). Thanks!

## 🛠 Built With

My personal portfolio: <a href="https://suhridbp.vercel.app/" target="_blank">[suhridbp](https://suhridbp.vercel.app/)</a>  
It showcases my GitHub projects, resume, and tech stack.

**Tech Stack Used:**

- React.js
- Node.js
- Express.js
- CSS3
- VS Code
- Vercel

## 🚀 Features

- 📖 Multi-Page Layout
- 🎨 Styled with React-Bootstrap and CSS (customizable colors)
- 📱 Fully Responsive Design

## 🧰 Getting Started

To get started locally, clone the repo and ensure you have `Node.js` and `Git` installed.

### Installation & Setup

```bash
npm install
npm start
```

## Updating content

- **Projects** — edit `src/data/projects.js`. Each project has a category (Research, Hackathon, Product), role, dates, highlights, tech stack and links. Set `featured: true` to show it large at the top.
- **Hobbies** — edit `src/data/hobbies.js`. Drop photos into `public/hobbies/cooking/` or `public/hobbies/photography/` and reference them like `image: "/hobbies/cooking/biryani.jpg"`. Add new entries at the top of a list. To add another hobby, copy one of the blocks.
- **Colours** — the two token blocks at the top of `src/theme.css` control the whole palette for dark and light mode.
