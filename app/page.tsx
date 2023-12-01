"use client";
import { Box, Container, Flex, Icon } from "@chakra-ui/react";
import GameList from "../component/HeroSection/GameList";
import { useRouter } from "next/navigation";
import { ChevronRightIcon } from "@chakra-ui/icons";
export default function WithSubnavigation() {
  const router = useRouter();
  return (
    <>
      <title>Arcelity</title>
      <meta name="description" content="Home"></meta>

      <Container p={0} maxW={{ base: "90%", lg: "75%" }} my={10}>
        <Flex
          my={4}
          _hover={{ color: "blue.500", transform: "translateX(10px)" }}
          cursor={"pointer"}
          fontWeight="800"
          onClick={() => router.push("/games")}
          transition={"all .3s ease"}
          color={"white"}
          align={"left"}
          alignItems={"center"}
        >
          {"Games Collection"} <Icon w={5} h={5} as={ChevronRightIcon} />
        </Flex>
        <Flex>
          <GameList />
        </Flex>
      </Container>
    </>
  );
}
