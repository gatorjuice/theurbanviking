# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern Vue 3 video collection website built with Vuetify 3. It displays a curated collection of hardcoded video links from YouTube and Vimeo in a responsive, Material Design interface.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint and auto-fix code with ESLint
- `npm run format` - Format code with Prettier
- `npm run test:unit` - Run unit tests with Vitest
- `npm run test:e2e:dev` - Run E2E tests in development mode with Cypress
- `npm run test:e2e` - Run E2E tests against production build

## Architecture

### Core Stack
- **Vue 3** with Composition API (`<script setup>`)
- **Vuetify 3** for Material Design UI components
- **Material Design Icons** for iconography
- **Vite** for build tooling and development server
- **ESLint + Prettier** for code quality

### Project Structure
- `src/components/` - Vue components (only VideoList.vue)
- `src/data/` - Hardcoded data files (videos.js)
- `src/plugins/` - Vuetify configuration
- `src/__tests__/` - Unit test files

### Key Components
- `VideoList.vue` - Displays responsive grid of embedded videos with platform icons, dates, and options menu
- `App.vue` - Main application layout with Vuetify app structure and navigation

### Data Management
- `src/data/videos.js` - Contains hardcoded array of video objects with YouTube and Vimeo links
- No dynamic state management - all videos are statically defined

### UI Features
- **Dark/Light Mode Toggle** - Persistent theme switching with localStorage
- **Custom Color Scheme** - Modern indigo/slate palette (less Google-ish)
- Responsive video grid (1 column mobile, 2 columns tablet, 3 columns desktop)
- Material Design styling with elevation and hover effects
- Platform-specific icons and colors for YouTube (#FF0000) and Vimeo (#1AB7EA)
- Relative date display (Today, Yesterday, X days ago, etc.)
- Options menu for each video (open original URL)
- Proper video aspect ratios (16:9 with mobile adjustments)
- Smooth theme transitions and animations

### Testing Setup
- **Vitest** with jsdom environment for unit tests
- **Cypress** for E2E testing
- Test files use `*.spec.js` naming convention

### Build Configuration
- Vite config includes Vue DevTools plugin and Vuetify
- Path alias `@` maps to `src/` directory
- ESLint configured with Vue, Vitest, and Cypress plugins
- Vuetify with Material Design Icons bundled