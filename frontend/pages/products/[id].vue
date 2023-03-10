<template>
    <div>
        <h1>är det här??</h1>
        <h2>{{ product.title }}</h2>
        <h2>{{ product.description }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem ut facere quia esse incidunt laudantium labore voluptas cupiditate fugit.</p>
    </div>
</template>

<script setup>
const {id} = useRoute().params
const uri = `https://acciodennis.azurewebsites.net/api/products/${id}`

const { data: product } = await useFetch(uri, { key: id  })
</script>

<style lang="scss" scoped>

</style>