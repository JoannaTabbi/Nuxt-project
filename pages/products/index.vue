<template>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p"/>
      </div>
    </div>
</template>

<script setup>
// applies the customised layout instead of the default one
 definePageMeta({
    layout: 'products'
 })

 // fetching products from fakestoreapi
 const { data: products } = await useFetch('https://fakestoreapi.com/products')

 //override global meta data on individual page with useHead() function
 useHead({
  title: 'Nuxt project | merch',
  meta: [
    { name: 'description', content: 'Nuxt basic pratical exercice : merch page'}
  ]
 }
 )

</script>

<style scoped>
</style>