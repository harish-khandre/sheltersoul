import { Email } from "../../../components/emails/email-template";
import { Resend } from "resend";
import * as React from "react";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const resend = new Resend(process.env.RESEND_API_KEY);

if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
  throw new Error("AWS credentials are not provided in environment variables.");
}

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function uploadFileToS3(
  file: Buffer,
  fileName: string,
  size: number,
) {
  const fileBuffer = file;

  if (fileBuffer.length > size) {
    return NextResponse.json({ error: "File is too large" }, { status: 400 });
  }

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${fileName}-${Date.now()}`,
    Body: fileBuffer,
    ContentType: "image/jpeg",
  };

  try {
    const command = new PutObjectCommand(params);
    await s3.send(command);
    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
    return signedUrl.split("?")[0];
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const location = formData.get("location") as string;
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ message: "File not found" }, { status: 400 });
  }
  const buffer = Buffer.from(await file.arrayBuffer());

  const maxFileSize = 1024 * 1024 * 10;

  const img = (await uploadFileToS3(buffer, file.name, maxFileSize)) as string;
  console.log(img);

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev", "arvitrust@gmail.com", "smt@thebanyan.org"],
      subject: "Hello world",
      react: Email({ name, location, img }) as React.ReactElement,
    });
    if (error) {
      console.log("error", error);
      return Response.json({ error });
    }
    return NextResponse.json({ success: "ok" });
  } catch (error) {
    console.log("error", error);
    return Response.json({ error });
  }
}
