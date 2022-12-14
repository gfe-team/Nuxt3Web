<template>
  <div>
    <h1>error page</h1>
    <button @click="handleError">Clear errors</button>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>
