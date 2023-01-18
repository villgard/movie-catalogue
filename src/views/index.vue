<template>
  <ul :class="$style.list">
    <FilmsCard v-for="film in filmsList" :key="film.id" :film="film" />
  </ul>
</template>

<script setup lang="ts">
import { useFilmsStore } from '@/stores/useFilmsStore';
import { onMounted, ref } from 'vue';
import FilmsCard from '@/components/Films/FilmsCard.vue';
import { storeToRefs } from 'pinia';

const { fetchFilms } = useFilmsStore();
const { filmsList } = storeToRefs(useFilmsStore());

const counter = ref<number>(1);

onMounted(async () => {
  await fetchFilms(counter.value);
});
</script>

<style lang="scss" module>
.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
</style>
