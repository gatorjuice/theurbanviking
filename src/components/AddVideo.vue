<template>
  <div>
    <h2>Add a Video</h2>
    <input v-model="videoUrl" type="text" placeholder="Enter YouTube or Vimeo URL" />
    <button @click="addVideo" :disabled="!authStore.isAuthenticated">Add Video</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useVideoStore } from '@/stores/video'

const authStore = useAuthStore()
const videoStore = useVideoStore()

const videoUrl = ref('')

const addVideo = () => {
  if (videoUrl.value) {
    videoStore.addVideo(videoUrl.value)
    videoUrl.value = ''
  }
}
</script>
