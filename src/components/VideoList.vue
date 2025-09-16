<template>
  <div>
    <!-- Header with video count -->
    <v-card class="mb-4" elevation="2">
      <v-card-title class="text-h6">
        <v-icon icon="mdi-play-circle" class="mr-2" />
        Video Collection
        <v-chip
          color="primary"
          variant="outlined"
          size="small"
          class="ml-2"
        >
          {{ videos.length }} video{{ videos.length === 1 ? '' : 's' }}
        </v-chip>
      </v-card-title>
    </v-card>

    <!-- Video Grid -->
    <v-row>
      <v-col
        v-for="video in videos"
        :key="video.id"
        cols="12"
        sm="6"
        lg="4"
      >
        <v-card elevation="3" class="video-card">
          <!-- Video Header -->
          <v-card-title class="d-flex align-center pa-3">
            <v-icon
              :icon="video.platform === 'youtube' ? 'mdi-youtube' : 'mdi-vimeo'"
              :color="video.platform === 'youtube' ? '#FF0000' : '#1AB7EA'"
              class="mr-2"
            />
            <span class="text-subtitle-1 flex-grow-1 font-weight-medium" style="line-height: 1.2;">
              {{ video.title }}
            </span>

            <!-- Options Menu -->
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  icon="mdi-dots-vertical"
                  variant="text"
                  size="small"
                  v-bind="props"
                />
              </template>
              <v-list density="compact">
                <v-list-item
                  prepend-icon="mdi-open-in-new"
                  title="Open original"
                  value="open"
                  @click="openOriginal(video.url)"
                />
              </v-list>
            </v-menu>
          </v-card-title>

          <!-- Video Embed -->
          <div class="video-container">
            <iframe
              :src="video.embedUrl"
              frameborder="0"
              allowfullscreen
              loading="lazy"
              :title="video.title"
            />
          </div>

          <!-- Video Footer -->
          <v-card-actions class="pa-3">
            <v-chip
              :style="{
                color: video.platform === 'youtube' ? '#FF0000' : '#1AB7EA',
                borderColor: video.platform === 'youtube' ? '#FF0000' : '#1AB7EA'
              }"
              variant="outlined"
              size="x-small"
              :prepend-icon="video.platform === 'youtube' ? 'mdi-youtube' : 'mdi-vimeo'"
            >
              {{ video.platform }}
            </v-chip>

            <v-spacer />

            <v-tooltip text="Added date">
              <template v-slot:activator="{ props }">
                <v-chip
                  variant="text"
                  size="x-small"
                  v-bind="props"
                  prepend-icon="mdi-clock-outline"
                  color="secondary"
                >
                  {{ formatDate(video.addedAt) }}
                </v-chip>
              </template>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { videos } from '@/data/videos'

function openOriginal(url) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

function formatDate(dateString) {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`

  return date.toLocaleDateString()
}
</script>

<style scoped>
.video-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;
}

.video-card:hover {
  transform: translateY(-2px);
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
}

@media (max-width: 600px) {
  .video-container {
    padding-bottom: 75%; /* Adjust aspect ratio for mobile */
  }
}
</style>
