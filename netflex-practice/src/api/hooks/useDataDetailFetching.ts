import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';
import { API_KEY } from '../request';
type FetcherResponse = {
  original_name: string;
  backdrop_path: string;
  first_air_date: string;
  homepage: string;
  genres: genres[];
  overview: string;
};
type genres = {
  id: number;
  name: string;
};
export const useDataDetailFetching = (movieId: string) => {
  const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${API_KEY}&language=en-us`;
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
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
