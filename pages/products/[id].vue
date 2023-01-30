<template>
  <div>
    <h2>Product details for {{ id }}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, soluta
      itaque odit assumenda voluptatum deleniti doloribus.
    </p>
  </div>
</template>

<script setup>
  const { id } = useRoute().params;
</script>

<style scoped></style>
