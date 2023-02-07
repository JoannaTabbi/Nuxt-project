<template>
    <div class="mt-7 max-w-md mx-auto text-center card">
     <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
     <p class="mt-7 text-5xl">Ooops...</p>
     <p class="mt-7">{{ error.message }}</p>
    </div>
</template>

<script setup>
  defineProps(['error'])
</script>

<style scoped>

</style>