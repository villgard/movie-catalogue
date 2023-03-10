import { Film } from '../films';

export interface FilmsApiResponse<T> {
  current_page: number;
  data: T;
  first_page_url: number;
  from: number;
  next_page_url: number;
  path: number;
  per_page: number;
  prev_page_url: string;
  to: number;
}

export type FilmsApiFetchFilmsResponse = FilmsApiResponse<{ data: Film[] }>;

export type FilmsApiFetchFilmResponse = Film;
