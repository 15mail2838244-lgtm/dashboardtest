import fetch from "node-fetch";

export async function handler(event) {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const apiToken = process.env.NETLIFY_API_TOKEN;
    const formName = process.env.NETLIFY_FORM_NAME || "contact";

    if (!apiToken) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing NETLIFY_API_TOKEN" }),
      };
    }

    // 1️⃣ Get all forms for the site
    const formsResponse = await fetch(
      `https://api.netlify.com/api/v1/forms?access_token=${apiToken}`
    );

    const forms = await formsResponse.json();

    // 2️⃣ Find the target form by name
    const form = forms.find((f) => f.name === formName);

    if (!form) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: `Form "${formName}" not found` }),
      };
    }

    // 3️⃣ Fetch submissions from Netlify
    const submissionsResponse = await fetch(
      `https://api.netlify.com/api/v1/forms/${form.id}/submissions?access_token=${apiToken}`
    );

    const submissions = await submissionsResponse.json();

    // 4️⃣ Format response for your dashboard
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({
        submissions: submissions.map((sub) => ({
          id: sub.id,
          name: sub.data.name,
          email: sub.data.email,
          phone: sub.data.phone || "",
          message: sub.data.message,
          created_at: sub.created_at,
        })),
      }),
    };
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to fetch submissions",
        message: error.message,
      }),
    };
  }
}

