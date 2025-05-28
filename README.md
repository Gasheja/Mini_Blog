# 🧠 **Dev Insights Mini Blog**

> A lightweight, developer-focused blog built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38bdf8?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-3178c6?logo=typescript)

---

## ✨ **Features**

- 📌 **Header:** Blog title ("Dev Insights") + blue "New Post" link.
- 📄 **Post List:** Titles, authors, dates, content previews styled via Tailwind.
- 🎨 **Conditional Styling:**
  - Posts by **Alice Smith** ➜ `bg-blue-50`
  - Others ➜ `bg-white`
  - Posts within 24h ➜ ✅ **"New!"** badge
- 🧩 **withLogger HOC:** Logs component mount/unmount in dev console.
- 📱 **Responsive Design:** Tailwind-powered mobile-friendly UI.

---

## ⚙️ **Prerequisites**

- **Node.js:** Version `16+`
- **npm:** Version `7+`

---
## 🚀 **Installation**
---
**1⃣ Clone the Repository**
```
git clone https://github.com/your-username/dev-insights-blog.git
cd dev-insights-blog
```
---
**2⃣ Install Dependencies**
```
npm install
```
Installs React, Tailwind, Vite, and related packages.
---
**3⃣ Verify Configuration**
Ensure the following files are present and configured correctly:

✅ package.json includes "type": "module"

✅ tailwind.config.js:
```
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
```
✅ postcss.config.js:
```
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
✅ src/index.css:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
# 🧪 **Running the Application**
**Start Dev Server**
```
npm run dev
```
Open http://localhost:5173 in your browser.
---
# ✅ **Testing the Application**
## Layout Checks
**Header:** Blue background (bg-blue-600), white "Dev Insights", "New Post" link (hover underline).

**Page:** Light gray background (bg-gray-100).

## Posts:

**Alice Smith:** bg-blue-50

**Others:** bg-white

**Recent post:** Green "New!" badge (bg-green-500).

## Console Log Check

Open DevTools → Console

Confirm:PostList mounted appears on load
---
# 🏗️ **Build for Production**
```
npm run build
```
Output will be in dist/.
---
# 🧠 **Design Choices**
##🧬 **Component Type**

✅ Functional Components used throughout.

⚙️ Powered by React Hooks (e.g., useEffect in withLogger.tsx).

❌ Class Components avoided for simplicity and modern best practices.
---

## 🎨 Styling Approach
- Tailwind CSS chosen for utility-first styling.

- Applied classes like bg-blue-600, p-4, and space-y-4 directly in JSX.

- PostCSS + Autoprefixer enhance browser compatibility.

- Avoided CSS Modules and Styled-Components to reduce overhead.
---
## 🧰 Optimization Strategies
- ✅ React.memo on <Post /> ➔ avoids unnecessary re-renders.

- ✅ HOC (withLogger) ➔ cleanly separates logging concerns.

- ✅ Vite ➔ fast dev server & optimized production builds.

- ✅ TypeScript ➔ ensures type safety with interfaces (e.g., Post).
---
# 🛠️ Challenges & Solutions
##💨 PostCSS Syntax Error

- Issue: SyntaxError: Unexpected token 'export' in .cjs config.

- Fix: Renamed to postcss.config.js using ESM syntax.
## 🌀 Tailwind Not Applying
- Issue: Classes like bg-blue-600 not rendering.

- Fix:

- Verified Tailwind paths in tailwind.config.js

- Checked index.css for directives

- Cleared Vite cache (node_modules/.vite)
---
# 📦 External Libraries & Packages
- react
- react-dom
- typescript
- vite
- @vitejs/plugin-react
- tailwindcss
- postcss
- autoprefixer
- @types/react
- @types/react-dom
---
# 🗂️ Project Structure
```
dev-insights-blog/
├── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Post.tsx
│   │   └── PostList.tsx
│   ├── hoc/
│   │   └── withLogger.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── package.json
```
#📬 **Contact**

E-mail: m.gasheja@alustudent.com





