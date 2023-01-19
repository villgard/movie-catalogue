import axios from 'axios';
import { FilmsApiFetchFilmResponse, FilmsApiFetchFilmsResponse } from '../../common/types';

export class FilmsApi {
  fetchFilms(page: number) {
    return axios.get<FilmsApiFetchFilmsResponse>(`https://kinobd.net/api/films?page=${page}`);
  }
  fetchFilm(filmId: number | string) {
    return axios.get<FilmsApiFetchFilmResponse>(`https://kinobd.net/api/films/${filmId}`);
  }
}
