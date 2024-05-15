import { Stack, Text } from "@chakra-ui/react";
import { AiOutlineRetweet } from "react-icons/ai";
import { RetweetButtonProps } from "../../types/types";
import { useTweets } from "../../hooks/useTweets";

export function RetweetButton({ tweetId, count }: RetweetButtonProps) {
  const { mutate } = useTweets();
  const onRetweet = async () => {
    const apiUrl = import.meta.env.VITE_CLOUDFLARE_API_URL;
    const endPoint = `${apiUrl}/tweets/${tweetId}/retweet`;
    await fetch(endPoint, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });
    mutate();
  };
  return (
    <Stack
      onClick={onRetweet}
      direction="row"
      color={"gray.500"}
      _hover={{
        textDecoration: "none",
        color: "green.300",
      }}
      cursor="pointer"
    >
      <AiOutlineRetweet size="20" />
      <Text fontSize={13}>{count ? count : 0}</Text>
    </Stack>
  );
}
