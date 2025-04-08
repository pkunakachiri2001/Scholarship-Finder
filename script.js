// Add console logging for debugging
const OPENAI_API_KEY = "my api key but i removed it for my security"; 
const API_ENDPOINT = "https://api.openai.com/v1/chat/completions";

document.getElementById('scholarshipForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log("Form submitted"); // Debug 1

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    field: document.getElementById('field').value,
    interests: document.getElementById('interests').value
  };
  console.log("Form data:", formData); // Debug 2

  const resultDiv = document.getElementById('result');
  resultDiv.style.display = 'block';
  resultDiv.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Analyzing profile...</div>';

  try {
    console.log("Starting API call"); // Debug 3
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Use cheaper model
        messages: [{
          role: "system",
          content: "Provide 3 scholarships with: Name, Amount, Eligibility. Markdown list."
        }, {
          role: "user",
          content: `Field: ${formData.field}, Interests: ${formData.interests}`
        }]
      })
    });

    console.log("API response status:", response.status); // Debug 4
    const data = await response.json();
    console.log("API response data:", data); // Debug 5

    if(!response.ok) {
      throw new Error(`API Error: ${data.error?.message || 'Unknown error'}`);
    }

    resultDiv.innerHTML = data.choices[0].message.content;

  } catch (error) {
    console.error("Error:", error); // Debug 6
    resultDiv.innerHTML = `
      <div class="error">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Error: ${error.message}</p>
      </div>
    `;
  }
});