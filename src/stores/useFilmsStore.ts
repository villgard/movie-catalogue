import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Film, FilmsApiFetchFilmsResponse } from '@/common/types';
import useApi from '../hooks/useApi';

export const useFilmsStore = defineStore('films', () => {
  const film = ref<Film>(null);
  const api = useApi();
  const loading = ref<boolean>(false);

  async function fetchFilms(page: number): Promise<FilmsApiFetchFilmsResponse | []> {
    loading.value = true;

    return await api.films
      .fetchFilms(page)
      .then((response) => {
        loading.value = false;

        return response.data;
      })
      .catch((error) => {
        console.error(error);
        loading.value = false;

        return [];
      });
  }

  async function fetchFilm(id: string): Promise<Film> {
    const response = await api.films.fetchFilm(id);

    film.value = response.data;

    return response.data;
  }

  return {
    film,
    loading,
    fetchFilms,
    fetchFilm,
  };
});
