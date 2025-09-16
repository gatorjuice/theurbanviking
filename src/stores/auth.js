import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({ isAuthenticated: false, userEmail: '' }),
  actions: {
    login(email) {
      if (email === 'gatorjuice@gmail.com') {
        this.isAuthenticated = true
        this.userEmail = email
      } else {
        this.isAuthenticated = false
      }
    },
    logout() {
      this.isAuthenticated = false
      this.userEmail = ''
    },
  },
})
