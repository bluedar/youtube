//실제 유튜브 연결 - 실제 유튜브 API를 가져올 수가 없음 (사용제한)

import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(prams) {
    return this.httpClient.get("search", prams);
  }
  async videos(prams) {
    return this.httpClient.get("videos", prams);
  }
  async videos(prams) {
    return this.httpClient.get("channers", prams);
  }
}
