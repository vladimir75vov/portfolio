# 🚀 Quick Start Guide

## 1️⃣ First Time Setup

```bash
# Install dependencies
npm install

# Copy environment template (from parent folder)
# Make sure .env exists in parent directory with:
# FRONTEND_IP=127.0.0.1
# FRONTEND_PORT=3000
# BACKEND_IP=127.0.0.1
# BACKEND_PORT=5000
# BACKEND_API_PATH=/api

# Start development server
npm run dev
```

Browser opens automatically at `http://localhost:3000`

## 2️⃣ Development Tips

### Hot Reload Works Automatically
Just save files and the browser updates instantly.

### Check Code Quality
```bash
npm run lint
```

### Build for Production
```bash
npm run build
npm run start
```

## 3️⃣ Common Tasks

### Add a New Page
1. Create file: `app/[page-name]/page.jsx`
2. Add `"use client"` if using React hooks
3. Import layout components from root layout

### Create a Component
1. Place in `components/` folder
2. Accept props like `appendClass` for styling
3. Use Tailwind classes for styling
4. Mark with `"use client"` only if using hooks

### Update Styles
- **Global**: Edit `tailwind.config.js`
- **Components**: Use inline Tailwind classes
- **New animations**: Add to `keyframes` in config

## 4️⃣ Project Structure at a Glance

```
📦 app/
├── 📄 layout.jsx          ← Root wrapper (Navbar + Footer)
├── 📄 page.jsx            ← Home page (Hero + Projects)
└── 📁 home/               ← Alternative home route

📦 components/
├── 📁 layout/
│   ├── navbar.jsx         ← Fixed top navigation
│   └── footer.jsx         ← Bottom footer
├── navLink.jsx            ← Nav link component
├── techBadge.jsx          ← Tech stack badge
└── projectCard.jsx        ← Project card

📦 resources/
└── styles/
    └── globals.scss       ← Global Tailwind imports
```

## 5️⃣ Important Notes

✅ **Do:**
- Use Tailwind utilities for styling
- Add components to `components/` folder
- Use relative imports for components
- Mark components with `"use client"` if using hooks

❌ **Don't:**
- Create separate CSS files
- Hardcode environment variables
- Remove `"use client"` from hooks
- Modify port settings without updating `.env`

## 6️⃣ Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      background: "#13151a",  // Main bg
      // Add your colors here
    }
  }
}
```

### Add Animations
Edit `tailwind.config.js`:
```javascript
animation: {
  fadeInDown: "fadeInDown 2s ease-in-out",
  // Add new animations here
},
keyframes: {
  fadeInDown: {
    from: { opacity: 0.1, transform: "translateY(-80px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  // Add keyframes here
}
```

## 7️⃣ Deployment

### Build
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

## 🆘 Need Help?

- **Port already in use?** → Run `npm run dev` (auto-cleanup)
- **Styles not applying?** → Clear `.next` and run `npm run build`
- **Imports not working?** → Use relative paths (e.g., `../components/navbar`)
- **Env vars not loading?** → Check `.env` is in parent directory

---

**Happy coding! 🎉**
