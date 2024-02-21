import { Email } from "../../../components/emails/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, location, img } = req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev", "arvitrust@gmail.com", "smt@thebanyan.org"],
      subject: "Hello world",
      react: Email({ name, img, location }) as React.ReactElement,
    });
    if (error) {
      console.log("error", error);
      return Response.json({ error });
    }
    return Response.json({ data });
  } catch (error) {
    console.log("error", error);
    return Response.json({ error });
  }
}
