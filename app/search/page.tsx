"use client";
import { Container, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import CVList from "../../component/Layout/CVList";

export default function AllGamePage() {
  return (
    <Container p={0} maxW={{ base: "90%", lg: "75%" }} my={10}>
      <Flex>
        <CVList />
        {/* <FilterBar /> */}
      </Flex>
    </Container>
  );
}
