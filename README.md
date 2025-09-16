# The Urban Viking - Video Collection

A modern, responsive video collection website built with Vue 3, Vuetify 3, and Material Design. Features a curated collection of YouTube and Vimeo videos with dark/light mode theming.

## ✨ Features

- **🌙 Dark/Light Mode Toggle** - Persistent theme switching
- **📱 Fully Responsive** - Works perfectly on all devices
- **🎨 Custom Theme** - Modern indigo/slate color scheme
- **🎥 Multi-platform Support** - YouTube and Vimeo videos
- **⚡ Fast & Modern** - Built with Vue 3 and Vite
- **🚀 GitHub Pages Ready** - Automatic deployment configured

## 🛠️ Tech Stack

- **Vue 3** with Composition API
- **Vuetify 3** for Material Design components
- **Vite** for lightning-fast development
- **Material Design Icons** for consistent iconography
- **ESLint + Prettier** for code quality

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ or 22.12+
- npm or yarn

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Building

```bash
# Build for production
npm run build

# Build for GitHub Pages
npm run build:gh-pages

# Preview production build
npm run preview
```

### Code Quality

```bash
# Lint and fix code
npm run lint

# Format code
npm run format
```

### Testing

```bash
# Run unit tests
npm run test:unit

# Run E2E tests (development)
npm run test:e2e:dev

# Run E2E tests (production)
npm run test:e2e
```

## 🌐 Deploy to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/theurbanviking.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Set source to "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click "Save"

3. **Automatic Deployment**:
   - Every push to `main` branch triggers automatic deployment
   - GitHub Actions builds and deploys to `gh-pages` branch
   - Your site will be available at: `https://yourusername.github.io/theurbanviking/`

### Manual Deployment

If you prefer manual deployment:

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build:gh-pages && gh-pages -d dist"

# Deploy manually
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # Vue components
│   └── VideoList.vue   # Main video grid component
├── data/               # Static data
│   └── videos.js       # Video collection data
├── plugins/            # Vue plugins
│   └── vuetify.js      # Vuetify configuration
└── App.vue             # Root component
```

## 🎬 Adding Videos

To add or modify videos, edit `src/data/videos.js`:

```javascript
export const videos = [
  {
    id: 'unique-id',
    title: 'Video Title',
    url: 'https://www.youtube.com/watch?v=VIDEO_ID',
    embedUrl: 'https://www.youtube.com/embed/VIDEO_ID',
    platform: 'youtube', // or 'vimeo'
    addedAt: '2024-01-01T00:00:00.000Z'
  }
]
```

## 🎨 Customizing Themes

Theme colors can be customized in `src/plugins/vuetify.js`. The app includes both light and dark theme variants with a modern indigo/slate color palette.

## 📱 Responsive Design

- **Mobile**: Single column layout
- **Tablet**: Two column layout
- **Desktop**: Three column layout
- **Large screens**: Centered with max width

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Vue 3, Vuetify 3, and modern web technologies.
