import { createClient } from '@supabase/supabase-js';

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { name, email, phone, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    const supabase = createClient(
      process.env.VITE_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { error } = await supabase.from('contact_submissions').insert([
      {
        name,
        email,
        phone,
        message,
        submitted_at: new Date().toISOString()
      }
    ]);

    if (error) {
      throw error;
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Submission saved successfully' })
    };
  } catch (err) {
    console.error('Save submission error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save submission' })
    };
  }
}
