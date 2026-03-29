"use client";

import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";

type UploadedTutorial = {
  title: string;
  category: string;
  duration: string;
  videoUrl: string;
};

export function UploadTutorialForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [uploadedTutorials, setUploadedTutorials] = useState<UploadedTutorial[]>([]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <form
      className="card-surface grid gap-4 p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        startTransition(async () => {
          setError("");
          const response = await fetch("/api/admin/tutorials", {
              method: "POST",
              body: formData,
            });

            const payload = await response.json();

            if (!response.ok) {
              setError(payload.error ?? "Upload failed");
              return;
            }

            setUploadedTutorials((current) => [payload.tutorial, ...current]);
            form.reset();
          });
        }}
      >
        <div>
          <p className="section-kicker">Admin Upload</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-slate">
            Upload a new tutorial
          </h2>
          <p className="mt-4 body-copy">
            Videos are sent to Cloudinary and returned with a hosted playback URL.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate">
            Tutorial Title
            <input
              required
              name="title"
              type="text"
              placeholder="Class 10 Science Revision Sprint"
              className="h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-secondary"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate">
            Category
            <input
              required
              name="category"
              type="text"
              placeholder="Science"
              className="h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-secondary"
            />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate">
            Duration
            <input
              required
              name="duration"
              type="text"
              placeholder="10h 30m"
              className="h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-secondary"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate">
            Video File
            <input
              required
              name="video"
              type="file"
              accept="video/*"
              className="h-12 rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-white focus:border-secondary"
            />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-medium text-slate">
          Description
          <textarea
            required
            name="description"
            rows={5}
            placeholder="Short course summary and value proposition"
            className="rounded-[24px] border border-slate-200 px-4 py-3 outline-none transition focus:border-secondary"
          />
        </label>
        {error ? (
          <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
            {error}
          </p>
        ) : null}
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            Configure Cloudinary env vars to enable production uploads.
          </p>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Uploading..." : "Upload Tutorial"}
          </Button>
        </div>
      </form>

      <div className="card-surface p-6 sm:p-8">
        <h3 className="font-display text-2xl font-semibold text-slate">
          Recent Uploads
        </h3>
        <div className="mt-6 grid gap-4">
          {uploadedTutorials.length ? (
            uploadedTutorials.map((tutorial) => (
              <div
                key={`${tutorial.title}-${tutorial.videoUrl}`}
                className="rounded-[24px] border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate">{tutorial.title}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {tutorial.category} • {tutorial.duration}
                </p>
                <a
                  href={tutorial.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-sm font-semibold text-primary hover:text-secondary"
                >
                  Open hosted video
                </a>
              </div>
            ))
          ) : (
            <p className="text-sm leading-7 text-slate-500">
              Uploaded tutorials will appear here after a successful Cloudinary upload.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
