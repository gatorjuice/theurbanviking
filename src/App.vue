<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import VideoList from './components/VideoList.vue'

const theme = useTheme()

const toggleTheme = () => {
  const newTheme = theme.global.current.value.dark ? 'light' : 'dark'
  theme.global.name.value = newTheme
  localStorage.setItem('theme', newTheme)
}

const isDark = computed(() => theme.global.current.value.dark)
const themeIcon = computed(() => isDark.value ? 'mdi-weather-sunny' : 'mdi-weather-night')
const themeTooltip = computed(() => isDark.value ? 'Switch to light mode' : 'Switch to dark mode')
</script>

<template>
  <v-app>
    <v-app-bar
      color="primary"
      prominent
      app
      elevation="2"
    >
      <template v-slot:prepend>
        <v-icon icon="mdi-video-box" size="large" class="mr-3" />
      </template>

      <v-app-bar-title class="text-h5 font-weight-bold">
        The Urban Viking
        <div class="text-subtitle-2 font-weight-regular opacity-90">
          Video Collection
        </div>
      </v-app-bar-title>

      <template v-slot:append>
        <v-tooltip :text="themeTooltip" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn
              :icon="themeIcon"
              variant="text"
              v-bind="props"
              @click="toggleTheme"
              size="large"
            />
          </template>
        </v-tooltip>
      </template>
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-4">
        <v-row justify="center">
          <v-col cols="12" lg="10" xl="8">
            <VideoList />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-app-bar {
  backdrop-filter: blur(10px);
}

.v-app-bar-title {
  line-height: 1.2 !important;
}
</style>
