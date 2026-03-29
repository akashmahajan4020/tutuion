import { randomUUID } from "node:crypto";
import { Readable } from "node:stream";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { cloudinary, hasCloudinaryConfig } from "@/lib/cloudinary";
import { slugify } from "@/lib/utils";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "admin") {
    return NextResponse.json(
      { error: "Unauthorized. Admin access is required." },
      { status: 401 },
    );
  }

  if (!hasCloudinaryConfig()) {
    return NextResponse.json(
      {
        error:
          "Cloudinary environment variables are missing. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.",
      },
      { status: 500 },
    );
  }

  const formData = await request.formData();
  const title = String(formData.get("title") ?? "");
  const description = String(formData.get("description") ?? "");
  const category = String(formData.get("category") ?? "");
  const duration = String(formData.get("duration") ?? "");
  const video = formData.get("video");

  if (!title || !description || !category || !duration || !(video instanceof File)) {
    return NextResponse.json(
      { error: "Title, description, category, duration, and a video file are required." },
      { status: 400 },
    );
  }

  const arrayBuffer = await video.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const publicId = `${slugify(title)}-${randomUUID().slice(0, 8)}`;

  const uploadResult = await new Promise<{
    secure_url: string;
  }>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "academic-edge/tutorials",
        resource_type: "video",
        public_id: publicId,
      },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error("Upload failed"));
          return;
        }

        resolve(result as { secure_url: string });
      },
    );

    Readable.from(buffer).pipe(stream);
  });

  return NextResponse.json({
    tutorial: {
      title,
      category,
      duration,
      description,
      videoUrl: uploadResult.secure_url,
    },
  });
}
