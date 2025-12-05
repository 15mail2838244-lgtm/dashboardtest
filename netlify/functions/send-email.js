import { createClient } from '@supabase/supabase-js';

export async function handler(event) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { name, email, phone, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    /*
     * GMAIL INTEGRATION PLACEHOLDER
     *
     * To enable Gmail notifications, you'll need to:
     *
     * 1. Install nodemailer:
     *    npm install nodemailer
     *
     * 2. Set up Gmail App Password:
     *    - Go to https://myaccount.google.com/apppasswords
     *    - Generate an app password for this application
     *
     * 3. Add environment variables in Netlify:
     *    GMAIL_USER=your-email@gmail.com
     *    GMAIL_APP_PASSWORD=your-app-password
     *
     * 4. Uncomment and configure the code below:
     *
     * import nodemailer from 'nodemailer';
     *
     * const transporter = nodemailer.createTransport({
     *   service: 'gmail',
     *   auth: {
     *     user: process.env.GMAIL_USER,
     *     pass: process.env.GMAIL_APP_PASSWORD
     *   }
     * });
     *
     * const mailOptions = {
     *   from: process.env.GMAIL_USER,
     *   to: process.env.GMAIL_USER,
     *   subject: `New Contact Form Submission from ${name}`,
     *   html: `
     *     <h2>New Contact Form Submission</h2>
     *     <p><strong>Name:</strong> ${name}</p>
     *     <p><strong>Email:</strong> ${email}</p>
     *     ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
     *     <p><strong>Message:</strong></p>
     *     <p>${message.replace(/\n/g, '<br>')}</p>
     *   `
     * };
     *
     * await transporter.sendMail(mailOptions);
     */

    // For now, just log and return success
    console.log('Email notification would be sent for:', { name, email, phone, message });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        message: 'Email notification queued (configure Gmail to enable)'
      })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to send email notification',
        message: error.message
      })
    };
  }
}
