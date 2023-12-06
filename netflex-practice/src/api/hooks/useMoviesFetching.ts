import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';
type FetcherResponse = {
  results: Movie[];
};
type Movie = {
  id: string;
  name: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
  total_pages: number;
};

export const useDataFetching = (url: string) => {
  const fetcher = async (url: string): Promise<FetcherResponse> => {
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
    movies: data?.results,
    isLoading: !error && !data,
    isError: error,
  };
};
