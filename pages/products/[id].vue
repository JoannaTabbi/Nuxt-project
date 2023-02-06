<template>
  <div>
    <h2> {{ product.title }}</h2>
    <img :src="product.image" :alt="`the image of ${product.title}`">
    <p>
       description : {{ product.description }} 
    </p>
    <p>
       price : {{ product.price }} €
    </p>
    <p>
       ref : {{ product.id }}
    </p>
  </div>
</template>

<script setup>
  const { id } = useRoute().params;
  definePageMeta({
    layout: 'products'
 })

 const uri = `https://fakestoreapi.com/products/${id}`

 //fetch the product
const { data : product } = await useFetch(uri, {key: id})
console.log(product)

</script>

<style scoped></style>
