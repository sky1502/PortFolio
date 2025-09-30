import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { render, pretty } from "@react-email/render";
import validator from "validator";

import { EmailTemplate } from "@/components/template/Email";

export async function POST(request: Request) {
  const body = await request.json();
  const { senderName, senderEmail, reasonToContact, senderMsg } = body;

  if (
    !senderName ||
    !senderEmail ||
    !reasonToContact ||
    !senderMsg ||
    typeof senderName !== "string" ||
    typeof senderEmail !== "string" ||
    typeof reasonToContact !== "string" ||
    typeof senderMsg !== "string"
  ) {
    return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
  }

  if (!validator.isEmail(senderEmail)) {
    return NextResponse.json(
      { error: "Email format is not valid" },
      { status: 400 }
    );
  }

  try {
    const qevResponse = await fetch(
      `http://api.quickemailverification.com/v1/verify?email=${senderEmail}&apikey=${process.env.QEV_API_KEY}`
    );

    const data = await qevResponse.json();

    console.log("QuickEmailVerification response:", data);

    if (data.result !== "valid") {
      return NextResponse.json(
        { error: "Email address is not valid" },
        { status: 400 }
      );
    }
  } catch (err) {
    console.error("QuickEmailVerification API failed:", err);
    return NextResponse.json(
      { error: "Email validation service unavailable" },
      { status: 500 }
    );
  }

  const htmlContent = await pretty(
    await render(
      EmailTemplate({
        userName: senderName,
        contactReason: reasonToContact,
        userMessage: senderMsg,
      })
    )
  );

  const message = {
    from: `"Aarab Nishchal - Contact Team" <${process.env.email_from}>`,
    to: `${senderName} <${senderEmail}>`,
    subject: "Your message has landed! 🚀 We'll get back to you shortly",
    html: htmlContent,
    headers: {
      "X-Entity-Ref-ID": "newmail",
    },
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email_from,
      pass: process.env.email_password,
    },
  });

  try {
    await transporter.sendMail(message);
    return NextResponse.json(
      {
        message: `Email has been sent to ${senderEmail} successfully`,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error(`Error sending email to ${senderEmail}:`, err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
