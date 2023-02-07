<template>
  <div>
    <!-- override global meta data on individual page with built-in Nuxt Head component.
    Easy way to display dynamic data -->
    <Head>
      <Title>Nuxt project | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
   <ProductDetails :product="product" />
  </div>
</template>

<script setup>
  // retrieves product id from route parameters
  const { id } = useRoute().params;

  // applies the customised layout instead of the default one
  definePageMeta({
    layout: 'products'
 })

 const uri = `https://fakestoreapi.com/products/${id}`

 //fetch the product; key option to force nuxt to refetch data for every product
const { data : product } = await useFetch(uri, {key: id})

// create an error if product value is not found to redirect user to error page
if(!product.value) {
  //fatal option to handle browser side errors
  throw createError({ statusCode: 404, statusMessage: "Product not found", fatal: true })
}

</script>

<style scoped></style>
