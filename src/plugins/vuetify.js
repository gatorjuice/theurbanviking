import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: localStorage.getItem('theme') || 'light',
    themes: {
      light: {
        colors: {
          primary: '#6366F1', // Modern indigo
          secondary: '#64748B', // Slate gray
          accent: '#F59E0B', // Amber accent
          error: '#EF4444', // Modern red
          info: '#3B82F6', // Blue
          success: '#10B981', // Emerald
          warning: '#F59E0B', // Amber
          surface: '#FFFFFF',
          background: '#F8FAFC', // Light slate background
          'surface-variant': '#F1F5F9',
          'on-primary': '#FFFFFF',
          'on-secondary': '#FFFFFF',
          'on-surface': '#1E293B',
          'on-background': '#1E293B',
        },
      },
      dark: {
        colors: {
          primary: '#818CF8', // Lighter indigo for dark mode
          secondary: '#94A3B8', // Lighter slate
          accent: '#FBBF24', // Brighter amber for dark mode
          error: '#F87171', // Lighter red
          info: '#60A5FA', // Lighter blue
          success: '#34D399', // Lighter emerald
          warning: '#FBBF24', // Amber
          surface: '#1E293B', // Dark slate
          background: '#0F172A', // Very dark slate
          'surface-variant': '#334155',
          'on-primary': '#1E293B',
          'on-secondary': '#1E293B',
          'on-surface': '#F1F5F9',
          'on-background': '#F1F5F9',
        },
      },
    },
  },
})