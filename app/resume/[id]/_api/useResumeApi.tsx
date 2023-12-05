import axios from "axios";
import { useEffect, useState } from "react";
import { ResumeInfo } from "../_interface/ResumeInfo";


const useResumeGetIdApi = (resumeID: string) => {

  const url = "http://localhost:3000/resume/" + resumeID;
  const [data, setData] = useState<ResumeInfo>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
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
