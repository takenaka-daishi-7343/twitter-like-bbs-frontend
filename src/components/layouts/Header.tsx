import {
  Stack,
  Heading,
  Spacer,
  Avatar,
  useDisclosure,
  Box,
  Flex,
  useBreakpointValue,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { UserModal } from "./UserModal";
import { TweetFormModal } from "./TweetFormModal";
import { GetRandomName } from "../functions/GetRandomName";
import { useStaticUsername } from "../../stores/store";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaTwitter } from "react-icons/fa";
export function Header() {
  const { username } = useStaticUsername(GetRandomName());
  const userModal = useDisclosure();
  const tweetFormModal = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bvHeading = useBreakpointValue({
    base: "0%",
    md: "30%",
  });

  return (
    <>
      <Flex
        as="header"
        p={3}
        position="sticky"
        top={0}
        zIndex="docked"
        backgroundColor={useColorModeValue("rgba(255, 255, 255, 0.8)", "")}
        backdropFilter="saturate(180%) blur(5px)"
      >
        <Box w={bvHeading} />
        <Heading textAlign="center" size="md" w="40%" mt={1}>
          Twitter like BBS
        </Heading>
        <Spacer />
        <Stack direction="row">
          <Button size="sm" onClick={tweetFormModal.onOpen} colorScheme="blue">
            <FaTwitter />
          </Button>
          <Button size="sm" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Avatar
            size="sm"
            name={username ? username : ""}
            onClick={userModal.onOpen}
            cursor="pointer"
          />
          <Heading size="ms" pt={1} pr={5}>
            {username}
          </Heading>
        </Stack>
      </Flex>
      <TweetFormModal
        isOpen={tweetFormModal.isOpen}
        onClose={tweetFormModal.onClose}
      />
      <UserModal isOpen={userModal.isOpen} onClose={userModal.onClose} />
    </>
  );
}
