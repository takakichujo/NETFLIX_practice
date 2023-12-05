import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';
import { API_KEY } from '../request';
import { BASE_API } from '../request';
type movieData = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
  key: string;
};
type FetcherResponse = {
  results: movieData[];
};
export const Trailer = (movieId: string) => {
  const url = `${BASE_API}/tv/${movieId}/videos?api_key=${API_KEY}`;
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
    data: data?.results,
    isLoading: !error && !data,
    isError: error,
  };
};
