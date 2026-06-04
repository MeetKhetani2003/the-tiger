import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, city, message, recaptchaToken } = await request.json();

    // 1. Validate required fields
    if (!name || !phone || !service || !city) {
      return NextResponse.json(
        { error: 'Name, Phone, Service, and City are required fields' },
        { status: 400 }
      );
    }

    // 2. Verify reCAPTCHA token if present (or enforce it)
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA token is missing' },
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECERETE;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

    const verifyResponse = await fetch(verifyUrl, {
      method: 'POST',
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // 3. Setup Nodemailer transporter using credentials from env
    const senderEmail = process.env.EMAIL;
    const appPassword = process.env.APP_PASSWORD;

    if (!senderEmail || !appPassword) {
      console.error('Mail configuration environment variables (EMAIL or APP_PASSWORD) are missing.');
      return NextResponse.json(
        { error: 'Mail server configuration error on server side' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: senderEmail,
        pass: appPassword,
      },
    });

    // 4. Create the email content (HTML format)
    const mailOptions = {
      from: `"Maa Shiva Web Portal" <${senderEmail}>`,
      to: senderEmail, // Sends lead details to the company email itself
      replyTo: email || undefined,
      subject: `🚨 New Lead: ${name} (${service} - ${city})`,
      text: `
New Security Inquiry Received:
-----------------------------
Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}
Service: ${service}
Location: ${city}
Additional Requirements:
${message || 'None'}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead Inquiry</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f7f9fc; margin: 0; padding: 0; color: #333333; }
    .email-container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; border: 1px solid #e1e8ed; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #05080E, #0d1527); padding: 30px; text-align: center; border-bottom: 4px solid #FCCA09; }
    .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
    .header p { color: #fcca09; margin: 5px 0 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; }
    .content { padding: 40px 30px; }
    .lead-badge { background-color: rgba(252, 202, 9, 0.15); color: #c49a00; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; display: inline-block; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 1px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
    .info-table td { padding: 14px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px; }
    .info-table td.label { font-weight: 700; color: #64748b; width: 35%; text-transform: uppercase; font-size: 12px; letter-spacing: 0.5px; }
    .info-table td.value { color: #0f172a; font-weight: 500; }
    .message-box { background-color: #f8fafc; border-left: 4px solid #05080E; padding: 20px; border-radius: 0 8px 8px 0; margin-top: 10px; font-style: italic; line-height: 1.6; color: #334155; font-size: 14px; }
    .footer { background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #f1f5f9; }
    .footer p { margin: 0; font-size: 12px; color: #94a3b8; }
    .btn-action { display: inline-block; padding: 12px 24px; background-color: #FCCA09; color: #05080E !important; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 14px; margin-top: 15px; text-align: center; transition: background-color 0.3s; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Maa Shiva Security</h1>
      <p>Operations Command Center</p>
    </div>
    <div class="content">
      <span class="lead-badge">🚨 New Consultation Inquiry</span>
      <h2 style="margin-top: 0; color: #0f172a; font-size: 20px;">Lead Security Assessment Request</h2>
      <p style="color: #64748b; font-size: 14px; line-height: 1.5; margin-bottom: 24px;">A new security audit request has been registered via the digital command portal. The details of the inquirer are compiled below:</p>
      
      <table class="info-table">
        <tr>
          <td class="label">Lead Name</td>
          <td class="value">${name}</td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td class="value"><a href="tel:${phone}" style="color: #0f172a; text-decoration: underline; font-weight: 600;">${phone}</a></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value">${email ? `<a href="mailto:${email}" style="color: #0f172a; text-decoration: underline;">${email}</a>` : 'Not provided'}</td>
        </tr>
        <tr>
          <td class="label">Requested Service</td>
          <td class="value" style="color: #c49a00; font-weight: 700;">${service}</td>
        </tr>
        <tr>
          <td class="label">Deployment City</td>
          <td class="value" style="font-weight: 600;">${city}</td>
        </tr>
      </table>

      ${message ? `
        <div style="font-weight: 700; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Additional Requirements:</div>
        <div class="message-box">"${message.replace(/\n/g, '<br>')}"</div>
      ` : ''}

      <div style="text-align: center; margin-top: 30px;">
        <a href="tel:${phone}" class="btn-action">Initiate Callback Now</a>
      </div>
    </div>
    <div class="footer">
      <p>This inquiry was generated automatically from the Maa Shiva Security contact form portal.</p>
      <p style="margin-top: 5px; font-size: 10px; color: #cbd5e1;">&copy; 2026 Maa Shiva Services Pvt. Ltd. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
      `,
    };

    // 5. Send the mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Inquiry email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: errorMessage },
      { status: 500 }
    );
  }
}
