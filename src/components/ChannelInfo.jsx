import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 }
  );
  return (
    <div className="flex">
      {url && <img src={url} alt={name} className="w-10 h-10 rounded-full" />}
      <p>{name}</p>
    </div>
  );
}
