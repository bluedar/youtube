//실제 유튜브 연결 - 실제 유튜브 API를 가져올 수가 없음 (사용제한)

//import axios from "axios";

export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#popular();
  }

  // 채널 이미지를 가져오기 위해 필요한 옵션을 정의하는 함수
  async channelImageURL(id) {
    return this.apiClient
      .channels({
        params: {
          part: "snippet",
          id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  // 관련 비디오 가져오기 위해 필요한 옵션을 정의하는 함수
  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 10,
          type: "video",
          relatedToVideoId: id,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  // 아읻값만 수정해서 얻어옴
  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  async #popular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}

// export async function search(keyword) {
//   return axios
//     .get(`/videos/${keyword ? "search" : "popular"}.json`)
//     .then((res) => res.data.items);
// }
