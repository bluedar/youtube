import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi(); //함수를 사용

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword));

  /*
const { isLoading, error, data } = useQuery([],()=>{},options)

  function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
        (res) => res.json(),
      ),
  })
  */

  console.log("videos ? ", videos);
  return (
    <div className="w-full max-w-screen-2xl m-auto">
      <div>Videos - {keyword ? ` 🔍 ${keyword}` : "🔥 인기급상승"} </div>
      {/* keyword가 있을때 / 없을때 */}
      {isLoading && <p>Loading...</p>}
      {error && <p>에러발생</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 gap-y-6 p-4">
          {videos.map((video) => (
            <VideoCard video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
