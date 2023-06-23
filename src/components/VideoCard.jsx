import React from "react";
import { formatAgo } from "../utill/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;

  const navigate = useNavigate();
  const isRelated = type === "related";

  return (
    <li
      className={
        isRelated ? "flex gap-x-4 mb4 cursor-pointer" : " cursor-pointer"
      }
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className=" w-full rounded-xl"
        src={thumbnails.medium.url}
        alr={title}
      ></img>
      <div>
        <p
          className={
            isRelated
              ? " text-base mt-0 leading-4 line-clamp-2"
              : " text-lg font-semibold leading-7 mb-2 line-clamp-2"
          }
        >
          {title}
        </p>
        <p className=" text-sm opacity-70">{channelTitle}</p>
        <p className=" text-xs opacity-70">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
