import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
const AUTH_EMAIL= process.env.AUTH_EMAIL;
const AUTH_PASSWORD = process.env.AUTH_PASSWORD
export async function GET(request) {
    return new Response(JSON.stringify({"MESSAGE":"ok"}))
}
 
export async function HEAD(request) {}
 
export async function POST(request) {
    const { name, email,message } = await request.json()
    console.log(name , email , message)
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: AUTH_EMAIL,
          pass: AUTH_PASSWORD,
        },
      });
      const mailOptions = {
        from: email,
        to: 'vinaykumar752575@gmail.com', // Replace this with the recipient email
        subject: 'New contact form submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };
      try {
        await transporter.sendMail(mailOptions);
        console.log("email sent Successfully")
      } catch (error) {
        console.error('Error:', error);
        console.log("error")
      }
    return new Response(JSON.stringify({"MESSAGE":"ok"}))
}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 
export async function PATCH(request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request) {}