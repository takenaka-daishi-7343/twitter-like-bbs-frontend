import {
  Box,
  Button,
  Card,
  CardHeader,
  Grid,
  GridItem,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { TweetCards } from "./components/layouts/TweetCards";
import { Header } from "./components/layouts/Header";
import { APIRequestText } from "./components/layouts/APIRequestText";
import { useJsonToggle } from "./stores/store";

function App() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { jsonToggle, setJsonToggle } = useJsonToggle(false);

  const desktopView = jsonToggle ? (
    <Grid templateColumns="repeat(2, 1fr)" gap={2} p={4}>
      <GridItem>
        <TweetCards />
      </GridItem>
      <GridItem>
        <APIRequestText />
      </GridItem>
    </Grid>
  ) : (
    <SimpleGrid templateColumns="repeat(3, 1fr)">
      <Box />
      <GridItem>
        <TweetCards />
      </GridItem>
      <Box />
    </SimpleGrid>
  );

  const mobileView = jsonToggle ? (
    <Box>
      <APIRequestText />
      <Button mt={4} onClick={() => setJsonToggle(!jsonToggle)}>
        Reset
      </Button>
    </Box>
  ) : (
    <TweetCards />
  );

  return (
    <>
      <Header />
      <Card>
        <CardHeader>
          <Box />
          {isMobile ? mobileView : desktopView}
          <Box />
        </CardHeader>
      </Card>
    </>
  );
}

export default App;
