
import allGameDataAPI from "../AllGameAPI";
import useGetAllGameApi from "@/app/games/_api/useGetAllGameApi";
import { Resume } from "../interface/IGameCard";

const searchGames = (query: string, allReusumData: Resume[]): Resume[] => {
  



  if (query==="") return allReusumData;
  const result: Resume[] = [];
  
  const filteredQuery = query.replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  for (const resume of allReusumData) {
    const resumeName = resume.name.toLowerCase().replace(/\s+/g, "");
    const resumeDecription = resume.description.toLowerCase().replace(/\s+/g, "");
    if (resumeName.includes(filteredQuery)||resumeDecription.includes(filteredQuery)) {
      result.push(resume);
    }

  

  }
  
  return result;
}

export default searchGames;
