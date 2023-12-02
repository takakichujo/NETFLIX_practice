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
type TruncateFunction = {
  truncate: (str: string | undefined, n: number) => string | undefined;
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
  if (data) {
    const dataResults = data.results;
    if (dataResults && dataResults.length > 0) {
      const dataRandom =
        dataResults[Math.floor(Math.random() * dataResults.length)];
      return {
        data: dataRandom,
        isLoading: !error && !data,
        isError: error,
      };
    }
  }
  return {
    isLoading: !error && !data,
    isError: error,
  };
};
export const truncate: TruncateFunction['truncate'] = (str, n) => {
  if (str !== undefined) {
    return str.length > n ? str.substring(0, n - 1) + '...' : str;
  }
  return str;
};
