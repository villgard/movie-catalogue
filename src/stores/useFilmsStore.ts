import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Film, FilmsApiFetchFilmsResponse } from '@/common/types';
import useApi from '../hooks/useApi';

export const useFilmsStore = defineStore('films', () => {
  const filmsList = ref(null);
  const film = ref(null);
  const api = useApi();

  async function fetchFilms(page: number): Promise<FilmsApiFetchFilmsResponse | []> {
    return await api.films
      .fetchFilms(page)
      .then((response) => {
        filmsList.value = [...response.data.data];

        return response.data;
      })
      .catch((error) => {
        console.error(error);

        return [];
      });
  }

  async function fetchFilm(id: string): Promise<Film> {
    const response = await api.films.fetchFilm(id);

    film.value = response.data;

    return response.data;
  }

  return {
    filmsList,
    film,
    fetchFilms,
    fetchFilm,
  };
});
