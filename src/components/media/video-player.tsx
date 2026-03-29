"use client";

import dynamic from "next/dynamic";
import { PlayCircle } from "lucide-react";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-slate-950 text-sm text-slate-300">
      Loading video...
    </div>
  ),
});

type VideoPlayerProps = {
  url: string;
  poster?: string;
};

export function VideoPlayer({ url, poster }: VideoPlayerProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-soft">
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-5 py-4 text-slate-200">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
            Lesson Preview
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Tap play to start the tutorial video.
          </p>
        </div>
      </div>
      <div className="aspect-video bg-slate-950">
        <ReactPlayer
          src={url}
          wrapper="div"
          className="h-full w-full"
          controls
          width="100%"
          height="100%"
          light={poster}
          playsInline
          previewAriaLabel="Play tutorial video"
          playIcon={
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-lg shadow-slate-950/30">
              <PlayCircle className="h-8 w-8 fill-current" />
            </span>
          }
          fallback={
            <div className="flex h-full w-full items-center justify-center bg-slate-950 text-sm text-slate-300">
              Loading video...
            </div>
          }
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
