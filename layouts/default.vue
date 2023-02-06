<template>
    <div>
      <header>
        <nav>
            <NuxtLink to="/">NUXT PROJECT</NuxtLink>   
          <ul>
            <li><NuxtLink to="/">Homepage</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
          </ul>
        </nav>
      </header>
  
      <!-- output page content  -->
  
      <div>
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
  