# Product Catalog with Interactive Particles

A responsive product catalogue in React with live search, category filters, a
dark/light theme and an **interactive particle background** drawn on an HTML canvas.

![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646cff?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)

## Features

- **Live search** that filters 35 products as you type
- **Category filters**: Gaming, Audio, Workspace, Photography, Smart Home
- **Dark and light mode** using Tailwind's class-based dark mode, with smooth transitions
- **Particle field** in plain Canvas 2D (no libraries). Particles react to how fast
  the mouse is moving and scatter around the cursor; their colours change with the theme
- Glass-style product cards with custom Tailwind animations and keyframes
- Prices formatted in INR

## Run it

```bash
git clone https://github.com/shak5hi/lecture_problemstatement.git
cd lecture_problemstatement
npm install
npm run dev      # http://localhost:5173
```

## Structure

```
src/
├── App.jsx                Product data, search and filter state, theme toggle
├── ProductCard.jsx        Card component
├── ParticleBackground.jsx Canvas animation loop and mouse interaction
└── index.css              Tailwind layers and the glass utility
```

## What I practised

React state and derived (filtered) data, `useEffect` for DOM side effects,
`requestAnimationFrame` loops with cleanup, and building a custom Tailwind theme.
