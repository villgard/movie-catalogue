<template>
  <div :class="$style.poster">
    <img v-if="poster" :src="poster" :alt="title" />
    <img v-else src="/image/no-poster.jpg" :alt="title" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  poster: String,
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
