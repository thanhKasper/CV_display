import axios from "axios";
import { useEffect, useState } from "react";
import { get } from "http";
import { Resume } from "./Interface/IGameCard";



const allGameDataAPI = () => {
  const url = "https://game-be-v2.vercel.app/games";
  const [allGameData, setAllGameData] = useState<Resume[]>([]);
  const [images, setImages] = useState<Resume[]>([]);


  useEffect(() => {
    const fetchData = async () => {
    
        try {
          const response = await axios.get(url)
          const gameData: Resume[] = response.data;
          setAllGameData(gameData);
          setImages(gameData.slice(0, 5))
        } catch (error) {
          console.error('Lỗi khi lấy dữ liệu từ API:', error);
        }
      };
      fetchData();
    }, []); 

    

  return [ allGameData, images ];
};

export default allGameDataAPI;
