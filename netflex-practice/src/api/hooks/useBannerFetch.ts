import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';

type MovieProps = {
  title?: string;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  overview?: string;
};

type FetcherResponse = {
  results: MovieProps[];
  url: string;
};

export const useBannerFetching = (url: string) => {
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

  const dataRandom =
    data && data.results && data.results.length > 0
      ? data.results[Math.floor(Math.random() * data.results.length)]
      : null;

  return {
    data: dataRandom,
    isLoading: !error && !data,
    isError: error,
  };
};
