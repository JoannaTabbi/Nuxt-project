<template>
  <div>
    <h2>Homepage</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      officiis asperiores tempora, animi quas voluptate culpa molestias,
      molestiae dolorem ratione consectetur facilis ut laudantium iure rerum
      error itaque similique pariatur?
    </p>
    <table class="table-auto">
  <thead>
    <tr>
      <th>Currency code</th>
      <th>Currency value</th>
    </tr>
  </thead>
  <tbody v-for="currency in data">
    <tr>
      <td>{{ currency.code }}</td>
      <td>{{ currency.value }}</td>
    </tr>
  </tbody>
</table>


    
  </div>
</template>

<script setup>
  // fetching data from internal server api
  //const { data } = await useFetch('/api/user?name=Mario', {
  //  method: 'post',
  //  body: { age : 30 }
  //})
  const { data } = await useFetch('/api/currency/USD')
  

</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
  th, td {
    padding: 5px 10px 5px 5px;
    border-bottom: 2px solid lightgrey;
  }
</style>
