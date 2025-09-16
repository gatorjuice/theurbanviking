import { defineStore } from 'pinia'

export const useVideoStore = defineStore('video', {
  state: () => ({
    videos: [],
  }),
  actions: {
    addVideo(url) {
      this.videos.push(url)
    },
  },
})
