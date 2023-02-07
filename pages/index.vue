<template>
  <div>
    <h2>Homepage</h2>
    <div>{{ data.message }}</div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      officiis asperiores tempora, animi quas voluptate culpa molestias,
      molestiae dolorem ratione consectetur facilis ut laudantium iure rerum
      error itaque similique pariatur?
    </p>
  </div>
</template>

<script setup>
  // fetching data from internal server api
  const { data } = await useFetch('/api/user?name=Mario', {
    method: 'post',
    body: { age : 30 }
  })
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>
