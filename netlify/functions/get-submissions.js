// netlify/functions/get-submissions.js
import fetch from 'node-fetch';

export async function handler() {
  try {
    const apiToken = process.env.NETLIFY_API_TOKEN;
    const formName = "contact";

    if (!apiToken) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing NETLIFY_API_TOKEN" })
      };
    }

    // Get all forms on the site
    const allFormsRes = await fetch(`https://api.netlify.com/api/v1/forms?access_token=${apiToken}`);
    if (!allFormsRes.ok) throw new Error(`Forms list error: ${allFormsRes.status}`);
    const formsJson = await allFormsRes.json();

    const form = formsJson.find(f => f.name === formName);
    if (!form) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: `Form '${formName}' not found` })
      };
    }

    // Fetch submissions for this form
    const submissionsRes = await fetch(
      `https://api.netlify.com/api/v1/forms/${form.id}/submissions?access_token=${apiToken}`
    );
    if (!submissionsRes.ok) throw new Error(`Submissions error: ${submissionsRes.status}`);
    const submissions = await submissionsRes.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ submissions })
    };

  } catch (error) {
    console.error("Netlify Fetch Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error", details: error.message })
    };
  }
}