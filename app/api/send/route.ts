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

  // if one state is choose then based on that state a array like be submitted to the to parameter of the email
  // like if user selected maharashtra then the list of orgs email should get selected and that list should go to
  // "to" param of the email
  // also for child only ngos
  // create a seggregation between male and female ngo's for wider target of ngos
  // based on the users input like state and gender the array of ngos should be submitted in "to" param of email

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [
        "1.harishkhandre@gmail.com",
        "smt@thebanyan.org", // the banyan:  hospital-based care, housing in rural and urban neighbourhoods and community and clinic-based mental health solutions.
        "info@neptunefoundation.com", // Neptune : adopts them and arranges for their treatment. Once they are cured and are able to regain their memory, traces their families and reunites them
        "info@narayanseva.org", // Narayan Seva Sansthan : it is a non-profit organization helps in medical treatment, education, vocational training, and social rehabilitation of disabled and underprivileged people.
        "headoffice@helpageindia.org", //Help Age : takes care of their needs such as a pension, quality healthcare, action against elderly abuse, and many more, at a national, state, and societal level.
        "amc.bangalore@gmail.com", // run a school for educating children with special needs within the age group of 4-16 years, a multi-category vocational training center for adolescents and adults, a day-care center, and many more.
        "contact@apd-india.org", //The Association of people with disability india : this org enable, equip and empower children and adults with a range of disabilities, including locomotive difficulty, spinal cord injury, speech and hearing impairments, cerebral palsy, and to some extent, mental issues.
        "info@samarthanam.org", // smamarthanam:  The organization works for the empowerment of persons with disabilities and the underserved through various initiatives focused on providing quality education, accommodation, nutritious food, vocational training, and placement-based rehabilitation
        "societyashadeep@yahoo.com", // , it has helped individuals suffering from mental illness and intellectual disability by providing therapy. 650 homeless mentally-ill persons have been housed and treated in rehabilitation homes, and more than 1200 people have intervened upon issues related to mental health. Over 120 training and orientation programmes on mental health have been organized for school and college students, Anganwadi workers, etc.
        "aaa@homelesspeople.in", // homelesspeople.in: shelter
        "chinc.blr@gmail.com", // leonard cheshire disability : shelter
        "info@cadms.org",
        "shraddha.karjat@gmail.com", // Shraddha Rehabilitation Foundation : shelter and medical
        "anugrahaindia@gmail.com", // Anugraha : shelter and medical
        "admin@diyafoundation-india.org", //The mentally challenged are given hands-on training in skills that help them to get a job and become self-reliant
      ],
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
