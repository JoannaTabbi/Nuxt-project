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

</script>

<style scoped>
</style>