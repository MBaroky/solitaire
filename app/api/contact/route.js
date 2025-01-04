import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const sendEmail = process.env.NEXT_EMAIL_FROM;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = "m.baroky@gmail.com, mitesh@bhatia.co";

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  let transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,

    auth: {
      // type: "oauth2",
      user: "m.baroky",
      pass: "khra synb tfpw jqwk",
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: sendEmail,
      to: myEmail,
      replyTo: email,
      subject: `Solitaire website activity from ${email}`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Phone number: ${phone} </p>
        <p>Message: ${message} </p>
        `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
