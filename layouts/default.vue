<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold">NUXT PROJECT</NuxtLink>   
          <ul class="flex gap-4">
            <li><NuxtLink to="/">Homepage</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
            <!--  link to the page that doesn't exist to demonstrate 
            error handling while error created on the browser (we're not requesting 
            page on the server)  see: fatal option set to true on createError, 
            page products/[id].vue -->
            <li><NuxtLink to="/products/abc" class="btn">Products abc</NuxtLink></li>
          </ul>
        </nav>
      </header>
  
      <!-- output page content  -->
  
      <div class="container mx-auto p-4">
          <slot />
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
    .router-link-exact-active {
      color: #12B488;
    }
  </style>
  