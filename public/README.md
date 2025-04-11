# 🎓 AI Scholarship Finder

[![Open in GitHub Codespaces](https://img.shields.io/badge/Open%20in-Codespaces-blue?logo=github)](https://codespaces.new/your-username/Scholarship-Finder)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An intelligent web application that matches students with personalized scholarship opportunities using OpenAI GPT-4.

![Scholarship Finder Interface](assets/screenshot.png)

## ✨ Features
- **AI-Powered Recommendations**: Get 3 relevant scholarships based on your profile
- **Dynamic Prompt Engineering**: Context-aware queries for accurate results
- **Modern UI**: Glassmorphism design with responsive layout
- **Real-Time Processing**: Loading states and error handling

## 🛠️ Technologies Used
- **Frontend**: HTML5, CSS3 (Flexbox/Grid), JavaScript
- **AI Integration**: OpenAI GPT-4 API
- **Design**: Glassmorphism, Gradient Animations
- **Tools**: GitHub Pages, Axios

## 🚀 Quick Start

### Prerequisites
- OpenAI API Key ([Get Yours](https://platform.openai.com))

### Installation
1. Clone repository:
```bash
git clone https://github.com/your-username/Scholarship-Finder.git
cd Scholarship-Finder
```

2. Add API key in `script.js`:
```javascript
const OPENAI_API_KEY = "sk-your-key-here"; // Replace with your key
```

3. Open `index.html` in browser

## 📝 Usage
1. Fill in your details:
   - Full Name
   - Field of Study
   - Academic Interests

2. Click "Find Scholarships"

3. View AI-generated recommendations with:
   - Scholarship Name
   - Eligibility Criteria
   - Award Amount
   - Application Deadline

## 🤖 Prompt Engineering
**System Prompt**:
```text
Act as a scholarship advisor with 10+ years experience. Recommend 3 scholarships matching the student's profile. Include:
1. Scholarship Name
2. Eligibility Requirements
3. Award Amount
4. Deadline
Format as numbered list with markdown bold headers.
```

**User Prompt Template**:
```text
Student Profile:
Name: {name}
Field: {field}
Interests: {interests}
```

## 🌐 Live Demo
[Try it Now](https://pkunaka2001.github.io/Scholarship-Finder) (Requires API key in local copy)

## 📂 Project Structure
```
Scholarship-Finder/
├── index.html          # Main application interface
├── styles.css          # Glassmorphism styling
├── script.js           # OpenAI API integration
├── assets/             # Media files
│   └── screenshot.png
└── README.md           # You are here
```


## 🙏 Acknowledgments
- OpenAI for GPT-4 API
- Font Awesome for icons
- Google Fonts for Inter typeface