import {FilmsApi} from "../api/endpoints/films.api";

const api = {
  films: new FilmsApi(),
}

const useApi = () => {
  return api;
}

export default useApi;