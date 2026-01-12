import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      service,
      message,
      recaptchaToken,
      formType,
    } = body;

    // Verify reCAPTCHA token (optional - for production, verify on backend)
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email content
    const subject =
      formType === "enquiry"
        ? `New Enquiry: ${service || "ISO Certification"}`
        : formType === "quote"
        ? `New Quote Request: ${service || "ISO Certification"}`
        : `New Contact Form Submission: ${service || "General Inquiry"}`;

    const htmlContent =
      formType === "enquiry"
        ? `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service Type:</strong> ${service || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${
          message ? message.replace(/\n/g, "<br />") : "No message provided"
        }</p>
        <hr />
        <p><em>This email was sent from your website's enquiry form.</em></p>
      `
        : formType === "quote"
        ? `
        <h2>New Quote Request Received</h2>
        <p><strong>Company Name:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Needed:</strong> ${service || "N/A"}</p>
        <p><strong>Additional Details:</strong></p>
        <p>${
          message ? message.replace(/\n/g, "<br />") : "No details provided"
        }</p>
        <hr />
        <p><em>This email was sent from your website's quote request form.</em></p>
      `
        : `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Subject:</strong> ${service || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${
          message ? message.replace(/\n/g, "<br />") : "No message provided"
        }</p>
        <hr />
        <p><em>This email was sent from your website's contact form.</em></p>
      `;

    // Send email
    const info = await transporter.sendMail({
      from: `WIZMS <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: subject,
      html: htmlContent,
    });

    // Also send confirmation email to user
    const confirmationHtml = `
      <h2>Thank You for Your Submission!</h2>
      <p>Hi ${name},</p>
      <p>We have received your ${
        formType === "quote"
          ? "quote request"
          : formType === "enquiry"
          ? "enquiry"
          : "message"
      } and will get back to you within 24 hours.</p>
      <p>In the meantime, if you have any additional questions, feel free to contact us at:</p>
      <p>
        <strong>Phone:</strong> +971 55 277 4123<br />
        <strong>Email:</strong> karthiga@wizms.net
      </p>
      <hr />
      <p>Best regards,<br />WIZMS Management Solutions</p>
    `;

    await transporter.sendMail({
      from: `WIZMS <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Confirmation: We received your ${
        formType === "quote"
          ? "quote request"
          : formType === "enquiry"
          ? "enquiry"
          : "message"
      }`,
      html: confirmationHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to send email",
        details:
          process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      { status: 500 }
    );
  }
}
