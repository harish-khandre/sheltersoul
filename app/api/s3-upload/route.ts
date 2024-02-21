import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const s3 = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function uploadFileToS3(file: File, fileName: File) {
  const fileBuffer = file;
  console.log(fileName);

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${fileName}-${Date.now()}`,
    Body: fileBuffer,
    ContentType: "image/jpeg",
  };

  const command = new PutObjectCommand(params);
  await s3.send(command);
  return fileName;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    if (!file) {
      return NextResponse.json({ message: "File not found" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const fileName = await uploadFileToS3(buffer, file.name);

    return NextResponse.json({ message: "File uploaded successfully" });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
