# Admin Area Documentation

This folder contains the hidden admin panel for managing contact form submissions.

## Access

- **Login URL**: `/autopilotai/login.html`
- **Dashboard URL**: `/autopilotai/index.html`

## Credentials

- **Email**: `admin@site.com`
- **Password**: `Admin123!`

## Features

- Secure login with localStorage authentication
- View all contact form submissions
- Clean, responsive dashboard interface
- Real-time submission data from Supabase

## Security

- This folder is hidden from search engines via `noindex` meta tags
- Not linked anywhere in the public site
- Should only be accessed via direct URL
- Submissions are stored securely in Supabase with RLS enabled

## Gmail Notification Setup (Optional)

To enable email notifications for new form submissions:

1. Install nodemailer in your project:
   ```bash
   npm install nodemailer
   ```

2. Set up a Gmail App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Generate an app password for this application

3. Add environment variables in Netlify:
   - `GMAIL_USER`: Your Gmail address
   - `GMAIL_APP_PASSWORD`: The app password you generated

4. Edit `/netlify/functions/send-email.js` and uncomment the nodemailer code

## Database

All form submissions are stored in the `contact_submissions` table in Supabase with the following schema:

- `id` (uuid): Unique identifier
- `name` (text): Submitter's name
- `email` (text): Submitter's email
- `phone` (text): Optional phone number
- `message` (text): Message content
- `submitted_at` (timestamptz): Submission timestamp
- `created_at` (timestamptz): Record creation timestamp

## Deployment Notes

- The admin area is automatically deployed with the rest of the site
- Functions are serverless and run on Netlify
- Supabase credentials are configured via environment variables
- No additional configuration needed for basic functionality
