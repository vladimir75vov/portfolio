# 🚀 Vladimir Budaev - Portfolio

Modern portfolio website built with **Next.js 14**, **React 18**, **Tailwind CSS**, and custom animations.

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek design with gradient accents
- ⚡ **Performance Optimized** - Fast load times, smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎯 **Interactive UI** - Smooth hover effects and transitions
- 🔗 **Social Integration** - Quick links to all social profiles
- 🎬 **Custom Animations** - Fade-in effects and text hue rotation
- 🌍 **SEO Optimized** - Proper metadata and structured content

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3.4 + SCSS
- **Icons**: React Icons 5.3
- **Build Tool**: Next.js built-in
- **Code Quality**: ESLint (Airbnb config) + Prettier

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <repo-url>
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file** (in parent directory)
```env
FRONTEND_IP=127.0.0.1
FRONTEND_PORT=3000
BACKEND_IP=127.0.0.1
BACKEND_PORT=5000
BACKEND_API_PATH=/api
```

4. **Run development server**
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## 📝 Available Scripts

```bash
npm run dev       # Start development server with hot reload
npm run build     # Create production build
npm run start     # Run production server
npm run lint      # Check code quality with ESLint
```

## 📁 Project Structure

```
app/
├── layout.jsx          # Root layout with Navbar & Footer
├── page.jsx            # Home page (Hero + Projects sections)
└── home/               # Secondary home route (legacy)

components/
├── layout/
│   ├── navbar.jsx      # Navigation with mobile menu
│   └── footer.jsx      # Footer with social links
├── navLink.jsx         # Reusable nav link component
├── techBadge.jsx       # Tech stack badge component
├── projectCard.jsx     # Project card component
└── linkOpenNewTabComp.jsx  # Social link wrapper

resources/
└── styles/
    └── globals.scss    # Global Tailwind directives

tailwind.config.js      # Tailwind customization
next.config.mjs         # Next.js configuration
```

## 🎨 Design System

### Colors
- **Background**: `#13151a`
- **Primary**: `from-blue-400 to-purple-500`
- **Accent**: `from-gray-900 to-gray-700`

### Animations
- **fadeInDown**: 2s entrance from top
- **fadeInUp**: 2s entrance from bottom
- **textHue**: Infinite color rotation

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, gradient text
- **Body**: Regular weight with optimized line height

## 🔧 Configuration

### Environment Variables
All env vars are loaded from the parent directory `.env` file:

| Variable | Default | Purpose |
|----------|---------|---------|
| `FRONTEND_IP` | 127.0.0.1 | Dev server address |
| `FRONTEND_PORT` | 3000 | Dev server port |
| `BACKEND_IP` | localhost | Backend server address |
| `BACKEND_PORT` | 5000 | Backend server port |
| `BACKEND_API_PATH` | /api | API endpoint path |

### Tailwind Extensions
Custom animations and colors are defined in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      background: "#13151a",
      "light-gray": "#222224",
    },
    animation: {
      fadeInDown: "fadeInDown 2s ease-in-out",
      fadeInUp: "fadeInUp 2s ease-in-out",
      textHue: "hue 10s infinite linear",
    },
  }
}
```

## 🐛 Troubleshooting

### Dev server won't start
- Check if port 3000 is already in use
- Ensure `.env` file exists in parent directory
- Try: `npm run dev` (auto-kills port)

### Styles not loading
- Verify Tailwind content paths in config
- Run: `npm run build` to check for errors
- Clear `.next` cache: `rm -rf .next`

### Build fails
- ESLint errors are ignored during build (intentional)
- Check lint warnings: `npm run lint`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

MIT License - feel free to use this portfolio template!

## 👤 Author

**Vladimir Budaev**  
Full Stack Developer | Digital Creator

- 🔗 [GitHub](https://github.com/vladimir75vov)
- 💬 [Telegram](https://t.me/vladimir75vov)
- 📱 [VK](https://vk.com/vladimir75vov)

---

**Made with ❤️ using Next.js**
