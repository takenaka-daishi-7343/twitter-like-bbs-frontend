import { KeyedMutator } from "swr";
import useStaticSWR from "../hooks/useStaticSWR";
import { Tweet } from "../types/types";

export const useStaticUsername = (initData?: string) => {
  const { data, mutate } = useStaticSWR("username", initData);
  return {
    username: data as string | null,
    setUsername: mutate as KeyedMutator<string | null>,
  };
};

export const useStaticContent = (initData?: string) => {
  const { data, mutate } = useStaticSWR("content", initData);
  return {
    content: data as string | null,
    setContent: mutate as KeyedMutator<string | null>,
  };
};

export const useStaticResponceTweet = (initData?: Tweet | null) => {
  const { data, mutate } = useStaticSWR("resTweet", initData);
  return {
    resTweet: data == undefined ? null : (data as Tweet),
    setResTweet: mutate as KeyedMutator<Tweet | null>,
  };
};

export const useJsonToggle = (initData?: boolean | null) => {
  const { data, mutate } = useStaticSWR("jsonToggle", initData);
  return {
    jsonToggle: data as boolean,
    setJsonToggle: mutate as KeyedMutator<boolean | null>,
  };
};
