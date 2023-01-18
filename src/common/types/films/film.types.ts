interface Profession {
  film_id: number;
  person_id: number;
  profession_id: string;
}

interface Person {
  id: number;
  name_english: string;
  name_russian: string;
  sex: string;
  kinopoisk_id: number;
  birthday: string;
  created_at: string;
  profession: Profession;
}

interface Genre {
  id: number;
  name_ru: string;
}

interface Country {
  id: number;
  name_ru: string;
}

export interface Film {
  id: number;
  kinopoisk_id: number;
  imdb_id: string;
  popular_weight: number;
  name_original: string;
  name_russian: string;
  year: number;
  year_start: number;
  year_end: number;
  rating_kp: number;
  rating_kp_count: number;
  rating_imdb: number;
  rating_imdb_count: number;
  time: string;
  age_restriction: number;
  description: string;
  slogan: string;
  budget: string;
  trailer: string;
  country_ru: string;
  type: string;
  premiere_ru: string;
  premiere_world: string;
  premiere_dvd: string;
  created_at: string;
  updated_at: string;
  time_minutes: number;
  player: string;
  small_poster: string;
  big_poster: string;
  persons: Person;
  genres: Genre;
  countries: Country;
}
