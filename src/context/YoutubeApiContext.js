import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";
import fakeYoutubeClient from "../api/fakeYoutubeClient";

export const YoutubeApiContext = createContext();

const client = new YoutubeClient(); // 실제 유튜브
const youtube = new Youtube(client);

//context가 적용될 영역을 지정하는 함수정의
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
