<template>
    <div>
      <header>
        <nav>
          <NuxtLink to="/products">NUXT PROJECT MERCH</NuxtLink>  
        </nav>
      </header>
  
      <!-- output page content  -->
  
      <div>
          <slot />
      </div>

      
      <footer>
        <ul>
            <li><NuxtLink to="/">Homepage</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
          </ul>
      </footer>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
    .router-link-exact-active {
      color: #12B488;
    }
  </style>
  