<template>
    <div class="mt-7 max-w-md mx-auto text-center card">
     <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
     <p class="mt-7 text-5xl">Ooops...</p>
     <p class="mt-7">{{ error.message }}</p>
     <button class="my-7 btn" @click="handleClearError">Go home...</button>
    </div>
</template>

<script setup>
// declare props option inside <script setup>. 
// It does not need to be imported, and is compiled away when <script setup> is processed
  defineProps(['error'])

  // clears the error and redirects user to home page
  const handleClearError = () => clearError({ redirect: "/"})
</script>

<style scoped>

</style>