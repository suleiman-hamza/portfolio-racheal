<template>
    <span>
        <img :src="card.imgsrc">
        <a href="#">{{ card.btnName }}</a>
    </span>
</template>

<script setup lang="ts">
const props = defineProps({
    card: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
    a {
      display: block;
      overflow: hidden;
      padding: 1rem 1.5rem;
      background-color: #3A3A3A;
      border: 2px solid white;
      position: absolute;
      bottom: 10px;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
      aspect-ratio: 1;
    }
</style>