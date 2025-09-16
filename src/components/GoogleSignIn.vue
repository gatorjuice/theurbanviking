<template>
  <div id="google-signin-button"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { jwtDecode } from 'jwt-decode'

const authStore = useAuthStore()

onMounted(() => {
  google.accounts.id.initialize({
    client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
    callback: handleCredentialResponse,
  })

  google.accounts.id.renderButton(document.getElementById('google-signin-button'), {
    theme: 'outline',
    size: 'large',
  })

  google.accounts.id.prompt()
})

function handleCredentialResponse(response) {
  const idToken = response.credential
  const decoded = jwtDecode(idToken)
  authStore.login(decoded.email)
}
</script>
