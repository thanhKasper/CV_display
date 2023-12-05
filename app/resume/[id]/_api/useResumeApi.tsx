import axios from "axios";
import { useEffect, useState } from "react";
import { ResumeInfo } from "../_interface/ResumeInfo";


const useResumeGetIdApi = (resumeID: string) => {

  const url = "https://synphylis.vercel.app/api/resume/" + resumeID;
  const [data, setData] = useState<ResumeInfo>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.get(url);
        console.log(result)

        setData(result.data.resume);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }];
};

export default useResumeGetIdApi;
