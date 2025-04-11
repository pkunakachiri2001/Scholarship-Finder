document.getElementById('scholarshipForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const field = document.getElementById('field').value.trim();
  const interests = document.getElementById('interests').value.trim();

  const prompt = `Act as a scholarship advisor. A student named ${name} is studying ${field} and has the following interests/qualifications: ${interests}. Provide a list of 3 scholarship recommendations with brief descriptions and eligibility criteria.`;

  try {
    // 🛡️ Send the prompt to your backend, not directly to OpenAI
    const response = await fetch('/api/scholarships', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    // ✅ Extract and display the response
    const output = data.choices?.[0]?.text.trim();

    const resultBox = document.getElementById('result');
    resultBox.style.display = 'block';
    resultBox.innerText = output || 'No scholarships found. Try again.';

  } catch (error) {
    console.error('Error:', error);
    const resultBox = document.getElementById('result');
    resultBox.style.display = 'block';
    resultBox.innerText = 'Error connecting to the server.';
  }
});
