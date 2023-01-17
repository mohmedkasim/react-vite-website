# Reactjs + Vitejs + tailwindcss website

<div style="display:flex;justify-content:center;padding-top:20px">

[![My Skills](https://skillicons.dev/icons?i=react,vite,tailwind,js)](https://skillicons.dev)

</div>

## npm version

> **Warning**
> version 8.11.0

## Setup project steps

```npm
npm create vite@latest project-name -- --template react
```

- cd into the project file

```
npm install
```

```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```

- Open ./tailwind.config.cjs and add this line

```cjs
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
```

- Open /index.css & remove all lines with adding these lines

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Open App.jsx & remove imports lines, useState
- Ready to go

## Run Development

```
npm run dev
```
