import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';
import { API_KEY } from '../request';
type FetcherResponse = {
  genres: Movie[];
};
type Movie = {
  id: string;
  name: string;
};

export const useGenresFetching = () => {
  const url = `https://api.themoviedb.org/3/genre//list?api_key=${API_KEY}`;
  const fetcher = async (): Promise<FetcherResponse> => {
    try {
      const response: AxiosResponse<FetcherResponse> = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('データ取得中にエラーが発生しました', error);
      throw error;
    }
  };
  const { data, error } = useSWR<FetcherResponse>(url, fetcher);
  return {
    data: data?.genres,
    isLoading: !error && !data,
    isError: error,
  };
};
