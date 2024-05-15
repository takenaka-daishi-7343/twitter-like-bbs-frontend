import useSWRInfinite from "swr/infinite";
import { Tweet } from "../types/types";

async function fetcher(url: string) {
  const res = await fetch(url);
  return res.json() as Promise<Tweet[] | null>;
}

export const useTweets = () => {
  const apiUrl = import.meta.env.VITE_CLOUDFLARE_API_URL;
  const getKey = (pageIndex: number, previousPageData: Tweet[][]) => {
    if (previousPageData && !previousPageData.length) return null;
    return `${apiUrl}/timeline?offset=${pageIndex}`;
  };
  const { data, error, isLoading, mutate, size, setSize } = useSWRInfinite(
    getKey,
    fetcher
  );
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && (data[data.length - 1]?.length as number) < 10);

  return {
    tweets: data as Tweet[][] | null,
    isLoading,
    isError: error,
    mutate: mutate,
    size,
    setSize,
    isReachingEnd,
  };
};
