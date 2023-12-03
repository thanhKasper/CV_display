"use client";
import React, { use, useEffect } from "react";
import useResumeGetIdApi from "./_api/useResumeApi";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

export default function GamePage({ params }: { params: { id: string } }) {
  const [show, setShow] = React.useState(false);
  const [number, setNumber] = React.useState(3);
  const [{ data, isLoading, isError }] = useResumeGetIdApi(params.id);

  useEffect(() => {
    console.log("data: ", data);
  }, [data]);

  const styles = StyleSheet.create({
    page: {
      fontFamily: "Roboto",
      flexDirection: "row",
      backgroundColor: "#FFFFFF",
    },
    section1: {
      padding: 20,
      flexGrow: 1,
      width: "35vw",
      backgroundColor: "#323b4c",
      color: "#ffffff",
    },
    section2: {
      padding: 20,
      flexGrow: 1,
      width: "65vw",
      color: "#35251d",
    },
    text17: {
      fontSize: 17,
      fontWeight: 700,
      paddingVertical: 5,
      marginVertical: 10,
      borderBottom: '1 #FFFFFF solid',
      borderColor: '#FFFFFF'
    },
    text12: {
      fontSize: 12,
      fontWeight: 700,
      marginTop: 10,
    },
    text11: {
      fontSize: 11,
      marginVertical: 3,
    },
  });

  Font.register({
    family: "Roboto",
    fonts: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
        fontWeight: 400,
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
        fontWeight: 700,
      }
    ]
  });

  return (
    <>
      {!data ? (
        <p className="">There are some errors, please reload the page</p>
      ) : (
        <div className="m-auto mt-10 w-[80vw]">
          <PDFViewer style={{ width: "80vw", height: "80vh" }}>
            <Document title={`${data.name}_CV`}>
              <Page size="A4" style={styles.page}>
                <View style={styles.section1}>
                  <Text style={styles.text17}>Contact</Text>
                  <Text style={styles.text12}>Phone</Text>
                  {data.phone_number?.map((phoneNumber, idx) => (
                    <Text key={idx} style={styles.text11}>{phoneNumber}</Text>
                  ))}
                  <Text style={styles.text12}>Email</Text>
                  <Text style={styles.text11}>{data.email}</Text>
                  <Text style={styles.text17}>Education</Text>
                  {data.degree?.map((deg, idx) => (
                    <Text key={idx} style={styles.text11}>{deg}</Text>
                  ))}
                  <Text style={styles.text17}>Language</Text>
                  {data.language?.map((lang, idx) => (
                    <Text key={idx} style={styles.text11}>{lang}</Text>
                  ))}
                </View>
                <view style={styles.section2}>
                  <Text>{data.name}</Text>
                  <Text>{data.description}</Text>
                </view>
              </Page>
            </Document>
          </PDFViewer>
        </div>
      )}
    </>
  );
}

// "use client";

// import {
//   Container,
//   Heading,
//   SimpleGrid,
//   GridItem,
//   Skeleton,
//   Text,
//   Flex,
//   Spacer,
// } from "@chakra-ui/react";
// import React, { use } from "react";
// import GameImages from "./_components/GameImages";
// import BuyGame from "./_components/BuyGame";
// import GameDescription from "./_components/GameDescription";
// import useGameGetIdApi from "./_api/useGameIdApi";
// import CommentSection from "./_components/CommentSection";
// import AddComment from "./_components/AddComment";

// export default function GamePage({ params }: { params: { id: string } }) {
//   const [show, setShow] = React.useState(false);
//   const [number, setNumber] = React.useState(3);
//   const [{ data, isLoading, isError }] = useGameGetIdApi(params.id);

//   const handleShow = () => {
//     setShow(!show);
//     if (show) {
//       setNumber(3);
//     } else {
//       setNumber(6);
//     }
//   };
//   return (
//     <>
//       <title>{data?.name}</title>
//       <meta name="description" content={data?.name}></meta>
//       <Container p={0} maxW={"75%"} my={10}>
//         {data != undefined && (
//           <>
//             <Skeleton isLoaded={!isLoading}>
//               <Heading mb={5}>{data?.name}</Heading>
//             </Skeleton>
//             <SimpleGrid columns={{ sm: 1, md: 1, lg: 4 }} spacing={0}>
//               <GridItem colSpan={3}>
//                 <Skeleton isLoaded={!isLoading}>
//                   <GameImages id={params.id} />
//                 </Skeleton>
//               </GridItem>
//               <GridItem colSpan={1}>
//                 <Skeleton isLoaded={!isLoading}>
//                   <BuyGame
//                     price={data.price}
//                     releaseDate={data.releaseDate}
//                     developer={data.developer}
//                     genres={data.genres}
//                     saleDetails={data.saleDetails}
//                   />
//                 </Skeleton>
//               </GridItem>
//               <GridItem colSpan={3}>
//                 <Skeleton isLoaded={!isLoading}>
//                   <GameDescription
//                     description={data.description}
//                     systemRequirements={data.systemRequirements}
//                   />
//                 </Skeleton>

//                 {/* Ratings & Reviews */}
//                 <Skeleton isLoaded={!isLoading}>
//                   <Flex>
//                     <Text
//                       justifyContent={"left"}
//                       w={"full"}
//                       fontWeight={"bold"}
//                       py={5}
//                     >
//                       Ratings & Reviews
//                     </Text>
//                     <Spacer />
//                     <Text
//                       align={"right"}
//                       w={"full"}
//                       fontWeight={"bold"}
//                       py={5}
//                       textColor={"whiteAlpha.600"}
//                       _hover={{ textColor: "white" }}
//                       onClick={handleShow}
//                     >
//                       {show ? "Show less" : "Show more"}
//                     </Text>
//                   </Flex>
//                   <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
//                     {data.ratings.slice(0, number).map((rating) => (
//                       <CommentSection
//                         key={rating.id}
//                         id={rating.id}
//                         comment={rating.comment}
//                         ratingStar={rating.ratingStar}
//                         ratingDateTIme={rating.ratingDateTIme}
//                         user={rating.user}
//                       />
//                     ))}
//                   </SimpleGrid>

//                   {/* Add comment */}

//                   {<AddComment gameId={data.id} />}
//                 </Skeleton>
//               </GridItem>
//             </SimpleGrid>
//           </>
//         )}
//       </Container>
//     </>
//   );
// }
