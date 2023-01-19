<template>
  <ul :class="$style.list">
    <FilmsCard v-for="film in filmsList" :key="film.id" :film="film" />
    <FilmsIntersection v-if="!loading" @loadMore="fetchMoreFilms" />
  </ul>
</template>

<script setup lang="ts">
import { useFilmsStore } from '@/stores/useFilmsStore';
import { onMounted, ref } from 'vue';
import FilmsCard from '@/components/Films/FilmsCard.vue';
import FilmsIntersection from '@/components/Films/FilmsIntersection.vue';
import { storeToRefs } from 'pinia';
import { Film } from '@/common/types';

const { fetchFilms } = useFilmsStore();
const { loading } = storeToRefs(useFilmsStore());

const filmsList = ref<Film[]>([]);
const counter = ref<number>(1);

async function fetchFilmsList(): Promise<void> {
  const response = await fetchFilms(counter.value);

  filmsList.value.push(...response.data);
  counter.value++;
}

async function fetchMoreFilms(): Promise<void> {
  await fetchFilmsList();
}

onMounted(async () => {
  await fetchFilmsList();
});
</script>

<style lang="scss" module>
.list {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
}
</style>
