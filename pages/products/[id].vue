<template>
  <div>
   <ProductDetails :product="product" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params;
  definePageMeta({
    layout: 'products'
 })

 const uri = `https://fakestoreapi.com/products/${id}`

 //fetch the product; key option to force nuxt to refetch data for every product
const { data : product } = await useFetch(uri, {key: id})

// create an error if product value is not found to redirect user to error page
if(!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found"})
}

</script>

<style scoped></style>
