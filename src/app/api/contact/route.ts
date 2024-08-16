import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { body, validationResult } from "express-validator";
import sanitizeHtml from "sanitize-html";
import transporter from "@/app/utils/mailer";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const {
    name,
    email,
    companyName,
    phoneNumber,
    importantQuestion,
    howDidYouFindUs,
    budget,
    workLink,
  } = data;

  // Validate input (you may want to use a utility function for this)
  if (!name || !email || !companyName || !importantQuestion) {
    return NextResponse.json({ message: "Validation failed" }, { status: 400 });
  }

  // Sanitize input
  const sanitizedData = {
    name: sanitizeHtml(name),
    email: sanitizeHtml(email),
    companyName: sanitizeHtml(companyName),
    phoneNumber: sanitizeHtml(phoneNumber),
    importantQuestion: sanitizeHtml(importantQuestion),
    howDidYouFindUs: sanitizeHtml(howDidYouFindUs),
    budget: sanitizeHtml(budget),
    workLink: sanitizeHtml(workLink),
  };

  const mailOptions = {
    from: `"${sanitizedData.name}" <${process.env.SMTP_USER}>`,
    to: process.env.RECEIVING_EMAIL,
    subject: "New Contact Form Submission",
    text: `
      Name: ${sanitizedData.name}
      Email: ${sanitizedData.email}
      Company Name: ${sanitizedData.companyName}
      Phone Number: ${sanitizedData.phoneNumber}
      Most Important Question: ${sanitizedData.importantQuestion}
      How Did You Find Us: ${sanitizedData.howDidYouFindUs}
      Budget: ${sanitizedData.budget}
      Work Link: ${sanitizedData.workLink}
    `,
    replyTo: sanitizedData.email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      // @ts-ignore
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}
