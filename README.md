# Mini_Blog
🧠 Dev Insights Mini Blog
A lightweight, developer-focused blog built with React, TypeScript, Vite, and Tailwind CSS.





✨ Features
📌 Header with site title and "New Post" button

📄 Post List with titles, authors, dates, and content previews

🎨 Conditional Styling:

Posts by Alice Smith ➜ bg-blue-50

Other posts ➜ bg-white

Recent posts (within 24 hours) ➜ ✅ "New!" badge

🧩 HOC (withLogger): Logs mount/unmount lifecycle in console

📱 Responsive Design powered by Tailwind CSS

⚙️ Prerequisites
Node.js v16+

npm v7+ (bundled with Node.js)

🚀 Getting Started
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/dev-insights-blog.git
cd dev-insights-blog
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
This will install React, Tailwind CSS, Vite, and more.

3️⃣ Verify Configuration
Ensure the following files exist and are correctly configured:

✅ package.json includes "type": "module"

✅ tailwind.config.js has:

js
Copy
Edit
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
✅ postcss.config.js uses:

js
Copy
Edit
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
✅ src/index.css includes Tailwind directives:

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
🔧 Development
Start Dev Server
bash
Copy
Edit
npm run dev
Navigate to http://localhost:5173 to view the blog. Hot reload is enabled.

✅ Manual Testing Checklist
Element	Check
Header	Blue background (bg-blue-600), white text, "New Post" hover effect
Layout	Light gray background (bg-gray-100), spacing (space-y-4)
Post Styling	Alice's posts (bg-blue-50), others (bg-white)
Recency Badge	"New!" badge on recent posts (bg-green-500)
Console Logs	PostList mounted appears in dev console

🧱 Build & Preview
Production Build
bash
Copy
Edit
npm run build
Check the dist/ folder for output.

Preview Locally
bash
Copy
Edit
npm run preview
Visit http://localhost:4173 to verify production readiness.

🧪 Testing (Future Enhancement)
🚧 No automated tests yet. To add:

Jest

React Testing Library

🧠 Design Decisions
🧬 Functional Components
All components use functional syntax for simplicity and compatibility with React Hooks.

✅ Functional	❌ Class-Based
Cleaner syntax	Verbose
Hook support	No hooks
Easier testing	More boilerplate

🎨 Styling with Tailwind CSS
🧩 Utility-first design

🏎️ Faster prototyping

📱 Responsive utilities built-in

No need for custom CSS or extra dependencies like CSS Modules or Styled Components.

🔍 Optimization Techniques
React.memo on <Post /> ➜ avoids re-renders

withLogger HOC ➜ decouples logging logic

Vite ➜ blazing-fast dev server & optimized builds

TypeScript ➜ strict types & compile-time safety

🧱 Folder Structure
pgsql
Copy
Edit
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
🛠 Troubleshooting
❗ Tailwind Not Applying
Symptom: No styling, utility classes missing.

✅ Solution:

Check tailwind.config.js paths

Ensure Tailwind directives in index.css

Delete .vite cache folder and reinstall:

bash
Copy
Edit
rm -rf node_modules/.vite
npm install
⚠️ PowerShell Compatibility
If you see Unix-style errors (rm -rf fails):

✅ Use:

powershell
Copy
Edit
Remove-Item -Recurse -Force node_modules
📦 Dependencies
Package	Version
react	^18.2.0
react-dom	^18.2.0
typescript	^5.0.2
vite	^4.4.5
@vitejs/plugin-react	^4.0.3
tailwindcss	^3.4.1
postcss	^8.4.31
autoprefixer	^10.4.16
@types/react	^18.2.15
@types/react-dom	^18.2.7

🤝 Contributing
Fork the repo

Create a branch:

bash
Copy
Edit
git checkout -b feature/your-feature
Commit and push:

bash
Copy
Edit
git commit -m "Add your feature"
git push origin feature/your-feature
Open a Pull Request 🚀

📜 License
MIT © [Your Name]

📬 Contact
For issues or suggestions, open a GitHub issue or email at your-email@example.com.
