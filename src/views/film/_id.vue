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
      <a v-if="film?.trailer" :href="film?.trailer" target="_blank" :class="$style.link"> Трейлер </a>
      <a v-if="film?.kinopoisk_id" :class="[$style.link, $style.orange]" :href="kinopoiskLink" target="_blank">
        <img src="/image/kinopoisk.svg" alt="Kinopoisk" />
      </a>
    </template>
    <template #about>
      <h2>О фильме</h2>
    </template>
    <template #information>
      <li v-if="directors.length" :class="$style.item">
        Режиссёры:
        <span v-for="item in directors" :key="item.id">
          <a :href="personalLink(item.kinopoisk_id)" :class="$style.infoLink">
            {{ item.name_russian }}
          </a>
        </span>
      </li>
      <li :class="$style.item">
        Продюсеры:
        <span v-for="item in producers" :key="item.id">
          <a :href="personalLink(item.kinopoisk_id)" :class="$style.infoLink">
            {{ item.name_russian }}
          </a>
        </span>
      </li>
      <li :class="$style.item">
        Актеры:
        <span v-for="item in actors" :key="item.id">
          <a :href="personalLink(item.kinopoisk_id)" :class="$style.infoLink">
            {{ item.name_russian }}
          </a>
        </span>
      </li>
    </template>
  </FilmPageContainer>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useFilmsStore } from '@/stores/useFilmsStore';
import FilmPageContainer from '@/containers/FilmPageContainer.vue';
import FilmsPoster from '@/components/Films/FilmsPoster.vue';
import { storeToRefs } from 'pinia';
import { Person } from '@/common/types';

const route = useRoute();
const { fetchFilm } = useFilmsStore();
const { film } = storeToRefs(useFilmsStore());

const actors = ref<Person[]>([]);
const producers = ref<Person[]>([]);
const directors = ref<Person[]>([]);

const currentRouteFilmId = computed(() => {
  return route.params.film + '';
});

const kinopoiskLink = computed(() => {
  return `https://www.kinopoisk.ru/film/${film?.value?.kinopoisk_id}/`;
});
const persons = computed(() => film?.value?.persons);

function personalLink(id: number): string {
  return `https://www.kinopoisk.ru/name/${id}/`;
}

function personsProfessionFilter(arr: Person[]): void {
  arr.map((person: Person) => {
    const value: string = person.profession.profession_id;

    if (value === 'actor') {
      actors.value.push(person);
    } else if (value === 'producer') {
      producers.value.push(person);
    } else if (value === 'director') {
      directors.value.push(person);
    }
  });
}

onMounted(async () => {
  await fetchFilm(currentRouteFilmId.value);
  personsProfessionFilter(persons.value);
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


.item {
  margin-bottom: 10px;

  span {
    font-weight: 400;
    margin-right: 5px;
  }
}

.infoLink {
  text-decoration: none;
  color: #000000;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
}
</style>
