// netlify/functions/get-submissions.js
export async function handler() {
  try {
    const token = process.env.NETLIFY_API_TOKEN;
    const siteId = process.env.NETLIFY_SITE_ID;
    const formName = 'contact'; // keep this if your form is named "contact"

    if (!token) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Missing NETLIFY_API_TOKEN' })
      };
    }
    if (!siteId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Missing NETLIFY_SITE_ID' })
      };
    }

    // 1) Fetch forms for this site (site-scoped avoids team/listing 404)
    const formsRes = await fetch(
      `https://api.netlify.com/api/v1/sites/${siteId}/forms`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // bubble up Netlify API errors for troubleshooting
    if (!formsRes.ok) {
      const text = await formsRes.text();
      throw new Error(`Forms list error: ${formsRes.status} ${text}`);
    }

    const forms = await formsRes.json();
    const targetForm = forms.find(f => f.name === formName);

    if (!targetForm) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: `Form '${formName}' not found` })
      };
    }

    // 2) Fetch submissions for that form (site-scoped)
    const submissionsRes = await fetch(
      `https://api.netlify.com/api/v1/forms/${targetForm.id}/submissions`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!submissionsRes.ok) {
      const text = await submissionsRes.text();
      throw new Error(`Submissions fetch error: ${submissionsRes.status} ${text}`);
    }

    const submissions = await submissionsRes.json();

    // Normalize to shape your UI expects (name, email, phone, message, created_at)
    const normalized = submissions.map(s => ({
      name: (s.data && s.data.name) || '',
      email: (s.data && s.data.email) || '',
      phone: (s.data && s.data.phone) || '',
      message: (s.data && s.data.message) || '',
      created_at: s.created_at || s.submitted_at || new Date().toISOString()
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ submissions: normalized })
    };
  } catch (err) {
    console.error('Netlify Fetch Error:', err.message || err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error', details: err.message || String(err) })
    };
  }
}
