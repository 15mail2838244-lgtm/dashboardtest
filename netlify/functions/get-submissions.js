export async function handler() {
  try {
    const API_TOKEN = process.env.NETLIFY_API_TOKEN;
    const FORM_NAME = process.env.NETLIFY_FORM_NAME || "contact";

    const response = await fetch(
      `https://api.netlify.com/api/v1/forms?access_token=${API_TOKEN}`
    );

    const forms = await response.json();
    const form = forms.find((f) => f.name === FORM_NAME);

    if (!form) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Form not found" }),
      };
    }

    const submissionsRes = await fetch(
      `https://api.netlify.com/api/v1/forms/${form.id}/submissions?access_token=${API_TOKEN}`
    );

    const submissions = await submissionsRes.json();

    return {
      statusCode: 200,
      body: JSON.stringify(submissions),
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "Error fetching submissions" };
  }
}
