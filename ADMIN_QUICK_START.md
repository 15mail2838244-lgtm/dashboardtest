# Admin Panel - Quick Start Guide

## Access Admin Panel

1. **Login Page**: Open `your-site.com/autopilotai/login.html`
2. **Credentials**:
   - Email: `admin@site.com`
   - Password: `Admin123!`
3. **View Submissions**: After login, you'll see the dashboard with all form submissions

## What You Get

### Form Submission Management
- All contact form submissions are automatically saved to Supabase database
- View submissions in a clean dashboard interface
- Each submission shows:
  - Submitter name
  - Email address
  - Phone number (if provided)
  - Message content
  - Submission date/time

### Security Features
- Admin area is hidden from search engines
- No public links to admin panel
- Login required to access dashboard
- Data stored securely in Supabase with RLS

## Next Steps After Deployment

### 1. Test the Contact Form
- Go to your site's contact page
- Submit a test form
- Log in to admin panel to verify submission appears

### 2. (Optional) Enable Gmail Notifications

To get email alerts when someone submits the contact form:

```bash
# 1. Install nodemailer
npm install nodemailer

# 2. Get Gmail app password from:
# https://myaccount.google.com/apppasswords

# 3. Add to Netlify environment variables:
# GMAIL_USER=your-email@gmail.com
# GMAIL_APP_PASSWORD=your-app-password

# 4. Edit netlify/functions/send-email.js
# Uncomment the nodemailer code (see comments in file)

# 5. Redeploy
```

### 3. Change Admin Password (Recommended)

Edit `autopilotai/login.html` and change these lines:

```javascript
const ADMIN_EMAIL = 'admin@site.com';      // Change this
const ADMIN_PASSWORD = 'Admin123!';         // Change this
```

Then redeploy your site.

## URLs to Remember

- **Public Site**: `your-site.com`
- **Admin Login**: `your-site.com/autopilotai/login.html`
- **Admin Dashboard**: `your-site.com/autopilotai/index.html` (requires login)

## Support

See `SETUP.md` for complete documentation and troubleshooting.

---

**Important**: Keep your admin credentials secure and never share the admin panel URL publicly.
