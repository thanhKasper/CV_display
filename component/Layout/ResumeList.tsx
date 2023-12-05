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
import ResumeCard from "./ResumeCard";
import { searchResults } from "@/component/Layout/SearchBar";
// import { Resume } from "../Interface/IResumeCard";

export default function CVList() {
  const [data, setData] = useState(searchResults);

  setInterval(function () {
    setData(searchResults);
  }, 300);
  // useEffect(()=> {
  //   setData(searchResults);
  // }, []);

  const isLoading = false;
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
        {data?.map(resume => (
          <Skeleton key={resume.resume_id} isLoaded={!isLoading}>
            <ResumeCard
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
