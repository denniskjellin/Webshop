<!--error page-->
<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Ooops.</p>
        <p class="mt-7">{{ error.message }}</p>
        <button class="btn-viewp my-5" @click="handleClearError">Go home...</button>
    </div>
</template>

<script setup>
defineProps(['error'])

// clear error and redirect back to home
const handleClearError = () => clearError({redirect: '/'})

</script>

<style  scoped>

</style>