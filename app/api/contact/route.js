import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request) {
  const username = process.env.NEXT_EMAIL_USERNAME;
  const password = process.env.NEXT_EMAIL_PASSWORD;
  const myEmail = "m.baroky@gmail.com";

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    service: "outlook",
    port: 587,

    secure: false, // true for port 465, false for other ports
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },

    auth: {
      type: "oauth2",
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>
        `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.status(500).json({
      message: "COULD NOT SEND MESSAGE",
    });
  }
}
