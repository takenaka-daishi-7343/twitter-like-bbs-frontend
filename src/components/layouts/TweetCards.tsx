import {
  Avatar,
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTweets } from "../../hooks/useTweets";
import ProgressCircle from "../elements/ProgressCircle";
import { LikeButton } from "../elements/LikeButton";
import { RetweetButton } from "../elements/RetweetButton";
import { TweetForm } from "./TweetForm";
import { useEffect } from "react";
import { FormatDate } from "../functions/FormatDate";

export function TweetCards() {
  const { tweets, isLoading, isError, size, setSize, isReachingEnd } =
    useTweets();

  const bv = useBreakpointValue({
    base: "280px",
    md: "500px",
    lg: "600px",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        !isReachingEnd && setSize(size + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [size, setSize, isReachingEnd]);
  if (isError) return <div>Load is Failed</div>;
  if (isLoading) return <ProgressCircle isLoading={isLoading} />;

  return (
    <Card>
      <CardBody>
        <Box>
          <Stack divider={<StackDivider />} spacing="1">
            <TweetForm />
            {tweets?.flat().map((v, k) => (
              <Grid templateColumns="3.5rem 1fr" gap={2} p={2} pb={-2} key={k}>
                <Avatar name={v.author} />
                <GridItem key={k}>
                  <Stack direction="row">
                    <Heading fontSize="18">{v.author}</Heading>
                    <Text color="gray">{FormatDate(v.createdAt)}</Text>
                  </Stack>

                  <Text
                    pt={1}
                    fontSize="16"
                    style={{
                      marginRight: 10,
                      minWidth: bv,
                      maxWidth: bv,
                      overflow: "hidden",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {v?.content}
                  </Text>
                  <Stack direction="row" pt={2}>
                    <LikeButton tweetId={v.id} count={v.likeCount} />
                    <RetweetButton tweetId={v.id} count={v.retweetCount} />
                  </Stack>
                </GridItem>
              </Grid>
            ))}
          </Stack>
        </Box>
      </CardBody>
      {!isReachingEnd && (
        <Box textAlign="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="lg"
          />
        </Box>
      )}
    </Card>
  );
}
