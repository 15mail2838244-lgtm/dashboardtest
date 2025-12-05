# Mafabana Holdings - Setup Guide

This document provides complete setup instructions for the project, including the admin panel and form submission system.

## Project Overview

This is a professional corporate website for Mafabana Holdings with the following features:

- Modern, responsive React application built with TypeScript and Vite
- Hidden admin panel for managing contact form submissions
- Integrated form submission system with Supabase database
- Optional Gmail email notifications
- Netlify serverless functions for backend operations

## Initial Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required variables:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (for server functions)

### 3. Database Setup

The database migration has already been applied. It creates a `contact_submissions` table with:
- Name, email, phone, message fields
- Automatic timestamps
- Row Level Security (RLS) enabled
- Admin-only access via service role key

### 4. Local Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

## Admin Panel

### Access

The admin panel is a hidden area not linked anywhere on the public site.

**URLs:**
- Login: `/autopilotai/login.html`
- Dashboard: `/autopilotai/index.html`

**Default Credentials:**
- Email: `admin@site.com`
- Password: `Admin123!`

### Features

1. **Secure Login**
   - Simple password-based authentication
   - Credentials stored in code (can be moved to environment variables)
   - Uses localStorage for session management

2. **Form Submissions Dashboard**
   - View all contact form submissions
   - Displays name, email, phone, message, and timestamp
   - Clean card-based layout
   - Real-time data from Supabase

3. **Security**
   - `noindex` meta tags prevent search engine indexing
   - No public links to admin area
   - RLS on database ensures data privacy
   - Auth guard redirects unauthorized users

## Form Submission System

### How It Works

When a user submits the contact form:

1. Form data is sent to `/.netlify/functions/save-submission`
2. Data is stored in Supabase `contact_submissions` table
3. Email notification is sent via `/.netlify/functions/send-email` (if configured)
4. Form also submits to Netlify Forms as backup
5. User sees success message

### Netlify Functions

Three serverless functions handle backend operations:

1. **save-submission**: Saves form data to Supabase
2. **get-submissions**: Retrieves all submissions for admin dashboard
3. **send-email**: Sends Gmail notification (requires configuration)

## Gmail Notifications (Optional)

To enable email notifications for new submissions:

### 1. Install Nodemailer

```bash
npm install nodemailer
```

### 2. Generate Gmail App Password

1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Sign in to your Google account
3. Create a new app password for "Mail"
4. Save the generated password

### 3. Configure Environment Variables

Add to your `.env` file and Netlify environment variables:

```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-generated-app-password
```

### 4. Update send-email Function

Edit `/netlify/functions/send-email.js` and uncomment the nodemailer code (see comments in file).

## Deployment to Netlify

### 1. Connect Your Repository

1. Push your code to GitHub
2. Log in to Netlify
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository

### 2. Configure Build Settings

Netlify will auto-detect settings from `netlify.toml`, but verify:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Functions directory**: `netlify/functions`

### 3. Set Environment Variables

In Netlify dashboard, go to Site settings → Environment variables and add:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `GMAIL_USER` (optional)
- `GMAIL_APP_PASSWORD` (optional)

### 4. Deploy

Netlify will automatically build and deploy your site.

## Project Structure

```
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── autopilotai/          # Hidden admin panel
│   ├── login.html        # Admin login page
│   ├── index.html        # Admin dashboard
│   ├── admin.js          # Dashboard logic
│   └── README.md         # Admin documentation
├── netlify/
│   └── functions/        # Serverless functions
│       ├── save-submission.js
│       ├── get-submissions.js
│       └── send-email.js
├── netlify.toml          # Netlify configuration
└── package.json          # Dependencies
```

## UI Enhancements

The project includes several UI improvements:

1. **Typography**
   - Improved letter spacing and line heights
   - Better font weight hierarchy
   - Enhanced readability

2. **Buttons**
   - Consistent hover and active states
   - Focus rings for accessibility
   - Smooth scale transitions

3. **Forms**
   - Better input focus states
   - Loading states during submission
   - Clear error messaging

4. **Cards**
   - Subtle hover animations
   - Consistent shadows and borders
   - Better spacing and padding

5. **Spacing**
   - More consistent vertical rhythm
   - Better section padding
   - Improved responsive breakpoints

## Security Best Practices

1. **Never commit `.env` file** - Always use `.env.example` as template
2. **Use service role key only in serverless functions** - Never expose in client code
3. **Enable RLS on all database tables** - Prevent unauthorized access
4. **Keep admin credentials secure** - Consider moving to environment variables
5. **Use HTTPS in production** - Netlify provides this automatically

## Troubleshooting

### Forms Not Submitting

1. Check browser console for errors
2. Verify Supabase credentials in environment variables
3. Test functions locally using Netlify CLI: `netlify dev`

### Admin Dashboard Not Loading Submissions

1. Verify `SUPABASE_SERVICE_ROLE_KEY` is set correctly
2. Check that database migration was applied
3. Verify function logs in Netlify dashboard

### Email Notifications Not Working

1. Ensure nodemailer is installed
2. Verify Gmail app password is correct
3. Check that code in `send-email.js` is uncommented
4. Review function logs in Netlify

## Support

For questions or issues:

- Check the documentation in `/autopilotai/README.md`
- Review Netlify function logs for backend errors
- Verify Supabase dashboard for database connectivity
- Check browser console for frontend errors

## License

Private project - All rights reserved by Mafabana Holdings
