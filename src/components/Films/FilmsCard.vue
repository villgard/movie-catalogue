<template>
  <RouterLink
    :to="{ name: 'film', params: { film: film.id } }"
    :class="[$style.link, focusOnCard && $style.focus]"
    @mouseover="focusOnCard = true"
    @mouseleave="focusOnCard = false"
  >
    <FilmsCardContainer :onFocus="focusOnCard">
      <template #poster>
        <FilmsPoster :title="film.name_original" :poster="film.small_poster" />
      </template>
      <template #title>
        {{ film.name_russian }}
      </template>
      <template #genres>
        <li v-for="genre in film.genres" :key="genre.id">
          {{ genre.name_ru }}
        </li>
      </template>
      <template #time>
        {{ film.time }}
      </template>
      <template #year>
        {{ film.year }}
      </template>
      <template #rating> IMDB {{ film.rating_imdb }} </template>
      <template #description>
        {{ film.description }}
      </template>
    </FilmsCardContainer>
  </RouterLink>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue';
import { Film } from '@/common/types';
import FilmsCardContainer from '@/containers/FilmsCardContainer.vue';
import FilmsPoster from '@/components/Films/FilmsPoster.vue';

defineProps({
  film: {
    type: Object as PropType<Film>,
  },
});

const focusOnCard = ref(false);
</script>

<style lang="scss" module>
.link {
  width: calc(20% - 20px);
  min-width: 203px;
  max-height: 304px;
  border-radius: 5px;
  margin: 0 10px 30px;
  background: #4d4d55;
  cursor: pointer;
  text-decoration: none;
}
</style>
