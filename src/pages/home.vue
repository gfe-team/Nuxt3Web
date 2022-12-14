<template>
  <div>
    <h1>home page</h1>
    <button @click="router.back()">back home</button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'custom',
})

const router = useRouter()
</script>
