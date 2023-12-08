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

  // useEffect(() => {
  //   console.log("data: ", data);
  //   console.log("data mail: ", data?.email);
  // }, [data]);

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
    text20: {
      fontSize: 20,
      fontWeight: 700,
      paddingVertical: 5,
    },
    text17: {
      fontSize: 17,
      fontWeight: 700,
      paddingVertical: 5,
      marginVertical: 10,
      borderBottom: "1 #dce1df solid",
      borderColor: "#dce1df",
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
      },
    ],
  });

  return (
    <>

      {!data ? (
        <><title> CV Details</title><p className="">
          There are some network errors, please wait for the page to load
        </p></>
      ) : (
        <><title> {data.name}</title><div className="m-auto mt-10 w-[80vw]">
            <PDFViewer style={{ width: "80vw", height: "80vh" }}>
              <Document title={`${data.name}_CV`}>
                <Page size="A4" style={styles.page}>
                  <View style={styles.section1}>
                    <Text style={styles.text17}>Contact</Text>
                    <Text style={styles.text12}>Phone</Text>
                    {data.phone_number?.map((phoneNumber, idx) => (
                      <Text key={idx} style={styles.text11}>{phoneNumber.phone_number}</Text>
                    ))}
                    <Text style={styles.text12}>Email</Text>
                    <Text style={styles.text11}>{data.email}</Text>
                    <Text style={styles.text17}>Education</Text>
                    {data.degree?.map((deg, idx) => (
                      <Text key={idx} style={styles.text11}>{deg.name}</Text>
                    ))}
                    <Text style={styles.text17}>Language</Text>
                    {data.language?.map((lang, idx) => (
                      <Text key={idx} style={styles.text11}>{lang.description}</Text>
                    ))}
                  </View>
                  <view style={styles.section2}>
                    <Text style={styles.text20}>{data.name}</Text>
                    <Text style={styles.text11}>{data.description}</Text>
                    <Text style={styles.text17}>Experience</Text>
                    <Text style={styles.text11}>{data.experience}</Text>
                    <Text style={styles.text17}>Skill</Text>
                    <Text style={styles.text11}>{data.skills}</Text>
                  </view>
                </Page>
              </Document>
            </PDFViewer>
          </div></>
      )}
    </>
  );
}
