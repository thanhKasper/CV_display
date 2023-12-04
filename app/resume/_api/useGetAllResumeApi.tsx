import axios from "axios";
import { useEffect, useState } from "react";
import { Resume } from "../_interface/IResumeCard";

const useGetAllResumeAPI = () => {
  const url = "https://synphylis.vercel.app/api/resume/";

  const [data, setData] = useState<Resume[]>();
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
  console.log(data)
  return [{ data, isLoading, isError }];
};

export default useGetAllResumeAPI;
