import { FilmsApi } from '@/api';

const api = {
  films: new FilmsApi(),
};

const useApi = () => {
  return api;
};

export default useApi;
