import {
  Card,
  CardBody,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Box,
} from "@chakra-ui/react";
import {
  useStaticContent,
  useStaticResponceTweet,
  useStaticUsername,
} from "../../stores/store";

export function APIRequestText() {
  const { content } = useStaticContent();
  const { username } = useStaticUsername();
  const { resTweet } = useStaticResponceTweet();
  return (
    <>
      <Card>
        <CardBody>
          <Tabs>
            <TabList>
              <Tab>Request JSON</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Card>
                  {"{"}
                  <Box pl={3}>{`author : ${username}`}</Box>
                  <Box pl={3}>{`content : ${content ? content : ""}`}</Box>
                  {"}"}
                </Card>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Box pb={5} />
          <Tabs>
            <TabList>
              <Tab>Responce JSON</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Card>
                  {"{"}
                  <Box pl={3}>{`tweetId : ${resTweet ? resTweet.id : ""}`}</Box>
                  <Box pl={3}>{`author : ${
                    resTweet ? resTweet.author : ""
                  }`}</Box>
                  <Box pl={3}>{`content :  ${
                    resTweet ? resTweet.content : ""
                  }`}</Box>
                  <Box pl={3}>{`likeCount :  ${
                    resTweet ? resTweet.likeCount : ""
                  }`}</Box>
                  <Box pl={3}>{`retweetCount :  ${
                    resTweet ? resTweet.retweetCount : ""
                  }`}</Box>
                  <Box pl={3}>{`createdAt :  ${
                    resTweet ? resTweet.createdAt : ""
                  }`}</Box>
                  {"}"}
                </Card>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
}
