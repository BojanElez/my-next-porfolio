import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/[locale]/components/email-template";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail =
      process.env.FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    console.log("Sending email with data:", {
      from: fromEmail,
      to: "belez911@gmail.com",
      subject: `Portfolio Contact: ${body.subject}`,
    });

    const data = await resend.emails.send({
      from: fromEmail,
      to: "belez911@gmail.com",
      subject: `Portfolio Contact: ${body.subject}`,
      react: EmailTemplate({
        description: `From: ${body.firstName} ${body.lastName} (${body.email})\n\nMessage: ${body.message}`,
      }),
      text: `New contact form submission:
          From: ${body.firstName} ${body.lastName}
          Email: ${body.email}
          Subject: ${body.subject}

          Message:
          ${body.message}`,
    });

    console.log("Resend response:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
