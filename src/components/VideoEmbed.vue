<template>
  <iframe :src="embedUrl" width="560" height="315" frameborder="0" allowfullscreen></iframe>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  url: String,
})

const embedUrl = computed(() => {
  if (props.url.includes('youtube') || props.url.includes('youtu.be')) {
    const match = props.url.match(/(?:youtu.be\/|youtube.com\/(?:watch\?v= |embed\/|v\/))(\w+)/)
    if (match) return `https://www.youtube.com/embed/${match[1]}`
  } else if (props.url.includes('vimeo')) {
    const match = props.url.match(/vimeo.com\/(\d+)/)
    if (match) return `https://player.vimeo.com/video/${match[1]}`
  }
  return ''
})
</script>
