"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

type VideoPlayerProps = {
  url: string;
  poster?: string;
};

export function VideoPlayer({ url, poster }: VideoPlayerProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-soft">
      <div className="aspect-video">
        <ReactPlayer
          src={url}
          controls
          width="100%"
          height="100%"
          light={poster}
          playsInline
          config={{
            youtube: {
              rel: 0,
            },
          }}
        />
      </div>
    </div>
  );
}
