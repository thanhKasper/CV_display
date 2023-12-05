import {
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import MobileNav from "../ui/search/MobileNav";
import ShowMenu from "../ui/search/ShowMenu";
import GameCard from "../Layout/ResumeCard";
import useGetAllGameApi from "@/app/resume/_api/useGetAllResumeApi";


export default function GameList() {
  const [{ data, isLoading, isError }] = useGetAllGameApi();

  return (
    <Box w={"full"} p={0} mr={{ base: 0, lg: 10 }}>
      {/*header*/}
      <Flex mb={5}>
        <Text textColor={"whiteAlpha.600"}>Show:</Text>
        <ShowMenu />
        <Spacer />
        <MobileNav display={{ base: "block", lg: "none" }} />
      </Flex>
      <SimpleGrid columns={{ base: 2, md: 4, lg: 5 }} spacing={5}>
        {data?.map((resume) => (
          <Skeleton key={resume.resume_id} isLoaded={!isLoading}>
<GameCard
              resume_id={resume.resume_id}
              name={resume.name}


              
              description={resume.description}
              age={resume.age}
              user_id={resume.user_id}
              gender={resume.gender}
              language={resume.language}
              reg_date={resume.reg_date}
            />
          </Skeleton>
        ))}
      </SimpleGrid>
      {/*content*/}
    </Box>
  );
}
