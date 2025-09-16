<template>
  <div>
    <div
      id="g_id_onload"
      data-client_id="YOUR_CLIENT_ID"
      data-login_uri="https://your.domain.com/login"
      data-auto_prompt="false"
    ></div>
    <div
      class="g_id_signin"
      data-type="standard"
      data-size="large"
      data-theme="outline"
      data-text="sign_in_with"
      data-shape="rectangular"
      data-logo_alignment="left"
    ></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  google.accounts.id.initialize({
    client_id: 'YOUR_CLIENT_ID',
    callback: handleCredentialResponse,
  })
  google.accounts.id.prompt() // Optional
})

function handleCredentialResponse(response) {
  console.log('Encoded JWT ID token: ' + response.credential)
  // Decode the token and check email
}
</script>
