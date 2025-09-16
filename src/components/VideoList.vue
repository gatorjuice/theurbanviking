<template>
  <div>
    <h2>Embedded Videos</h2>
    <div v-for="(url, index) in videoStore.videos" :key="index" style="margin-bottom: 20px">
      <iframe
        :src="getEmbedUrl(url)"
        width="560"
        height="315"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { useVideoStore } from '@/stores/video'

const videoStore = useVideoStore()

function getEmbedUrl(url) {
  // YouTube
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    let id = url.split('v=')[1]
    if (id) id = id.split('&')[0]
    else id = url.split('be/')[1]
    return `https://www.youtube.com/embed/${id}`
  }
  // Vimeo
  if (url.includes('vimeo.com')) {
    const id = url.split('/').pop()
    return `https://player.vimeo.com/video/${id}`
  }
  return ''
}
</script>
