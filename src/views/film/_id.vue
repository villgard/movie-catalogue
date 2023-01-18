<template>
  <FilmPageContainer>
    <template #poster>
      <FilmsPoster :title="film?.name_russian" :poster="film?.big_poster" />
    </template>
    <template #title>
      {{ film?.name_russian }}
    </template>
    <template #description>
      {{ film?.description }}
    </template>
    <template #rating>
      Рейтинг:
      <span>
        {{ film?.rating_imdb }}
      </span>
    </template>
    <template #year>
      Год выпуска:
      <span>
        {{ film?.year }}
      </span>
    </template>
    <template #genres>
      Жанры:
      <span v-for="genre in film?.genres" :key="genre.id">
        {{ genre.name_ru }}
      </span>
    </template>
    <template #countries>
      Страны:
      <span v-for="country in film?.countries" :key="country.id">
        {{ country.name_ru }}
      </span>
    </template>
    <template #duration>
      Время:
      <span>
        {{ `${film?.time_minutes} мин. / ${film?.time}` }}
      </span>
    </template>
    <template #actions>
      <a :href="film?.trailer" target="_blank" :class="$style.link"> Трейлер </a>
      <a v-if="film?.kinopoisk_id" :class="[$style.link, $style.orange]" :href="kinopoiskLink" target="_blank">
        <img src="/image/kinopoisk.svg" alt="Kinopoisk" />
      </a>
    </template>
    <template #about>
      <h2>О фильме</h2>
    </template>
<!--    <template #information>-->
<!--      <li>-->
<!--        Продюсеры:-->
<!--        <span v-for="item in producers" :key="item.id">-->
<!--          <a href="">-->
<!--            {{ item.name_russian }}-->
<!--          </a>-->
<!--        </span>-->
<!--      </li>-->
<!--    </template>-->
  </FilmPageContainer>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useFilmsStore } from '@/stores/useFilmsStore';
import FilmPageContainer from '@/containers/FilmPageContainer.vue';
import FilmsPoster from '@/components/Films/FilmsPoster.vue';
import { storeToRefs } from 'pinia';

const route = useRoute();
const { fetchFilm } = useFilmsStore();
const { film } = storeToRefs(useFilmsStore());

const currentRouteFilmId = computed(() => {
  return route.params.film + '';
});
const kinopoiskLink = computed(() => {
  return `https://www.kinopoisk.ru/film/${film?.value?.kinopoisk_id}/`;
});

// const personsList = computed(() => {
//   return film?.value?.persons;
// });
//
// const producers = computed(() => {
//   return personsList?.value.map((person) => {
//     if (person?.profession?.profession_id === 'producer') {
//       return person;
//     }
//   });
// });

onMounted(async () => {
  await fetchFilm(currentRouteFilmId.value);
  // console.log(personsList.value);
  // console.log(producers.value);
});
</script>

<style lang="scss" module>
.link {
  width: 150px;
  padding: 5px;
  display: flex;
  justify-content: center;
  background-color: #888888;
  color: #ffffff;
  img {
    width: 100%;
    object-fit: contain;
  }
}

.orange {
  background-color: #f50;
}
</style>
