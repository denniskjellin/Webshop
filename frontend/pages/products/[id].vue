<template>
    <div>
        <h1>är det här??</h1>
        <h2>{{ product.title }}</h2>
        <h2>{{ product.description }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem ut facere quia esse incidunt laudantium labore voluptas cupiditate fugit.</p>
    </div>
</template>

<script setup>
// route id
const {id} = useRoute().params
// url and tag on id
const uri = `https://acciodennis.azurewebsites.net/api/products/${id}`
// fetch data
const { data: product } = await useFetch(uri, { key: id  })
</script>

<style lang="scss" scoped>

</style>