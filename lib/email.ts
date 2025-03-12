import nodemailer from "nodemailer";
import { z } from "zod";

const emailSchema = z.object({
  to: z.string().email(),
  subject: z.string().min(1),
  text: z.string().min(1),
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER_SPECS as string,
    pass: process.env.EMAIL_PASS_SPECS,
  },
});

export const sendEmail = async (data: {
  to: string;
  subject: string;
  text: string;
}) => {
  const validation = emailSchema.safeParse(data);
  if (!validation.success) {
    throw new Error("Invalid data");
  }

  const { to, subject, text } = data;

  const mailOptions = {
    from: process.env.EMAIL_USER_SPECS,
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
