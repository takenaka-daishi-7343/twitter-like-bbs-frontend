import { Box, Stack, Text } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa6";
import { LikeButtonProps } from "../../types/types";
import { useTweets } from "../../hooks/useTweets";

export function LikeButton({ tweetId, count }: LikeButtonProps) {
  const { mutate } = useTweets();
  const onLikeTweet = async () => {
    const apiUrl = import.meta.env.VITE_CLOUDFLARE_API_URL;
    const endPoint = `${apiUrl}/tweets/${tweetId}/like`;
    await fetch(endPoint, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });

    mutate();
  };
  return (
    <>
      <Stack
        onClick={onLikeTweet}
        direction="row"
        color={"gray.500"}
        _hover={{
          textDecoration: "none",
          color: "pink.300",
        }}
        cursor="pointer"
      >
        <Box pt={0.5}>
          <FaRegHeart size="17" />
        </Box>

        <Text fontSize={13}>{count}</Text>
      </Stack>
    </>
  );
}
