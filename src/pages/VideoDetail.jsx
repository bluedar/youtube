import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RealatedVideos from "../components/RealatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  //console.log("videovideo?", video);
  const { title, description, channelTitle, channelId } = video.snippet;

  const wrap = {
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: "30px",
    height: 0,
    overflow: "hidden",
  };

  const iframe = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };
  return (
    <section className="flex-col lg:flex-row">
      <article className="basis-2/3">
        <div style={wrap}>
          <iframe
            id="player"
            type="text/html"
            width="100%"
            height="640"
            src={`https://www.youtube.com/embed/${video.id}`}
            style={iframe}
            title={video.title}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold pt-2">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <div className="h-48 bg-zinc-700 overflow-y-auto p-2 rounded-2xl">
            <pre className=" whitespace-pre-wrap">{description}</pre>
          </div>
        </div>
      </article>
      <aside className="basis-1/3">
        <RealatedVideos id={video.id} />
      </aside>
    </section>
  );
}
