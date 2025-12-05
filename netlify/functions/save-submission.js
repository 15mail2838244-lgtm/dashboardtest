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

    // Initialize Supabase client with service role key
    const supabase = createClient(
      process.env.VITE_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Insert submission into database
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          message,
          submitted_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      throw error;
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        submission: data[0]
      })
    };
  } catch (error) {
    console.error('Error saving submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to save submission',
        message: error.message
      })
    };
  }
}
