"use client";
import { Container, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import GameList from "../../component/Layout/ResumeList";

export default function AllGamePage() {
  return (
    <Container p={0} maxW={{ base: "90%", lg: "75%" }} my={10}>
      <Flex>
        <GameList />
        {/* <FilterBar /> */}
      </Flex>
    </Container>
  );
}
