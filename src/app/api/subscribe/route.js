import nodemailer from "nodemailer";

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
