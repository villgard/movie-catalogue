<template>
  <div :class="$style.poster">
    <img :src="poster" :alt="title" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  poster: {
    type: String,
    default: '/image/no-poster.jpg',
  },
  title: String,
});
</script>

<style lang="scss" module>
.poster {
  width: 100%;
  height: 100%;
}
img {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
