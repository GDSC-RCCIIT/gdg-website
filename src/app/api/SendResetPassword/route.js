import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse request body
    const { userEmail } = await req.json();

    // Check required fields
    if (!userEmail) {
      return new Response(JSON.stringify({ message: "Email is required." }), {
        status: 400,
      });
    }

   const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email message options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Password Reset Request for GDG-RCIIT",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
          <!-- Header with embedded image -->
          <div style="background-color: #ffffff; padding: 20px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            <!-- Referencing the image by cid -->
            <img src="cid:GDGLogo" alt="GDG-RCIIT Logo" style="max-width: 200px; height: auto; margin-bottom: 10px;" />
            <h1 style="color: #000000; margin: 0;">Password Reset Request</h1>
          </div>
    
          <!-- Body Content -->
          <div style="padding: 20px; text-align: left;">
            <p>Dear User,</p>
            <p>We received a request to reset your password for your GDG-RCIIT account. Click the button below to reset your password:</p>
            <a href="#" style="display: inline-block; padding: 10px 20px; color: #ffffff; background-color: #2176b8; text-decoration: none; border-radius: 4px; font-weight: bold;">Reset Password</a>
            <p style="margin-top: 20px;">If you didn't request a password reset, you can safely ignore this email.</p>
          </div>
    
          <!-- Footer -->
          <div style="background-color: #f5f5f5; padding: 15px; text-align: center;">
            <p style="font-size: 14px; color: #666;">Best Regards,<br><strong>GDG-RCIIT Team</strong></p>
            <p style="font-size: 12px; color: #999;">&copy; ${new Date().getFullYear()} GDG-RCIIT. All rights reserved.</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: "gdg-logo.jpg",
          path: "C:/Users/ayush/OneDrive/Desktop/gdg-website/src/app/api/SendResetPassword/image.png",
          cid: "GDGLogo",
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(
      JSON.stringify({ message: "Password reset email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    // Log error for debugging
    console.error("Error in sending password reset email:", error);

    // Return error response
    return new Response(
      JSON.stringify({ message: "Error sending password reset email." }),
      { status: 500 }
    );
  }
}
