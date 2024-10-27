import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
    const { prompt } = await req.json();
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const generatedText = await response.text();

        return new Response(JSON.stringify({ generatedText }), { status: 200 });
    } catch (error) {
        return new Response(error.message, { status: 500 });
    }
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

export async function POST(req) {
    const { email } = await req.json();

    if (!email) {
        return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    try {
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: email,
            subject: "Subscription Confirmation",
            text: "Thank you for subscribing to our newsletter!",
        });
        return NextResponse.json({ message: "Subscription successful!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
}
