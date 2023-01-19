<template>
  <div :class="$style.filmsIntersection" key="intersection" ref="intersectionRef" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const emit = defineEmits<{
  (e: 'loadMore'): void;
}>();

const intersectionRef = ref(null);

useIntersectionObserver(intersectionRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    emit('loadMore');
  }
});
</script>

<style lang="scss" module>
.filmsIntersection {
  position: absolute;
  bottom: 0;
}
</style>