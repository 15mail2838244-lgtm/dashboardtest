/*
  # Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - Submitter's name
      - `email` (text) - Submitter's email
      - `phone` (text, nullable) - Optional phone number
      - `message` (text) - Message content
      - `submitted_at` (timestamptz) - Submission timestamp
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - No public access - admin only via service role
    - This ensures form submissions are private and only accessible via authenticated backend
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  submitted_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- No policies needed - admin access only via service role key
-- Public users cannot read or write directly to this table