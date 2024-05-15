import {
  Avatar,
  Grid,
  Box,
  Button,
  Textarea,
  useDisclosure,
  useBoolean,
  ButtonGroup,
} from "@chakra-ui/react";

import { useTweets } from "../../hooks/useTweets";
import { UserModal } from "./UserModal";
import { GetRandomName } from "../functions/GetRandomName";
import ProgressCircle from "../elements/ProgressCircle";
import {
  useStaticContent,
  useStaticUsername,
  useStaticResponceTweet,
  useJsonToggle,
} from "../../stores/store";

export function TweetForm() {
  const { username } = useStaticUsername(GetRandomName());
  const { setResTweet } = useStaticResponceTweet(null);
  const { content, setContent } = useStaticContent("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { jsonToggle, setJsonToggle } = useJsonToggle();
  const { mutate } = useTweets();
  const [loadFlg, setLoadFlg] = useBoolean(false);

  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setContent(inputValue);
  };

  const onTweet = async () => {
    setLoadFlg.on();
    const apiUrl = import.meta.env.VITE_CLOUDFLARE_API_URL;
    const endPoint = `${apiUrl}/tweets`;
    const res = await fetch(endPoint, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        author: username,
      }),
    });
    setResTweet(await res.json());
    await mutate();
    setLoadFlg.off();
    setContent("");
  };
  return (
    <>
      <ProgressCircle isLoading={loadFlg} />
      <Box>
        <Grid templateColumns="3.5rem 1fr" gap={2} p={2} pb={5}>
          <Avatar
            name={username ? username : ""}
            onClick={onOpen}
            cursor="pointer"
          />
          <UserModal isOpen={isOpen} onClose={onClose} />

          <Textarea
            value={content ? content : ""}
            onChange={(e) => onChangeTextArea(e)}
            pt={2}
            fontSize={21}
            border="transparent"
            resize="none"
            placeholder="What's Happening?!"
          />
        </Grid>
        <Grid templateColumns="1fr 10rem" pb={2}>
          <Box />
          <ButtonGroup>
            {jsonToggle ? (
              <Button onClick={() => setJsonToggle(!jsonToggle)}>Reset</Button>
            ) : (
              <Button
                colorScheme="green"
                onClick={() => setJsonToggle(!jsonToggle)}
              >
                Json
              </Button>
            )}
            <Button colorScheme="blue" onClick={onTweet}>
              Tweet
            </Button>
          </ButtonGroup>
        </Grid>
      </Box>
    </>
  );
}
