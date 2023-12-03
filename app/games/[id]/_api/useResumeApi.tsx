import axios from "axios";
import { useEffect, useState } from "react";
import { ResumeInfo } from "../_interface/ResumeInfo";
// import { IGameInfo } from "../_interface/IGameInfo";

const useResumeGetIdApi = (resumeID: string) => {
//   const url = "https://game-be-v2.vercel.app/games/getGameInfo/" + gameID;
  const url = "https://synphylis.vercel.app/api/resume/" + resumeID;
//   const url = "http://localhost:3000/api/resume/" + resumeID;
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
