# 🎙️ VocalPrep

<div align="center">
  
  **AI-Powered Interview Practice Platform**
  
  <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="Next.js" width="50" height="50"/>
  </a>
  <a href="https://ai.google.dev/models/gemini" target="_blank" rel="noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google Gemini" width="50" height="50"/>
  </a>
  <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="Firebase" width="50" height="50"/>
  </a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" width="50" height="50"/>
  </a>
</div>
  
</div>

## 📋 Overview

VocalPrep is an advanced interview preparation platform leveraging artificial intelligence to help job seekers master their interview skills. Through Google's Gemini LLM and voice interaction capabilities, VocalPrep delivers:

- **Realistic interview simulations** that adapt to your responses
- **Personalized feedback** on your performance
- **Progress tracking** to monitor improvement over time

Whether you're preparing for technical interviews, behavioral assessments, or both, VocalPrep customizes the experience based on your target role and preferred technology stack.

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🤖 **AI-Powered Interviews** | Realistic interview simulations powered by Google's Gemini LLM |
| 🗣️ **Voice Interaction** | Natural conversation flow using VAPI for voice recognition and response |
| 📊 **Multiple Interview Types** | Choose from technical, behavioral, or mixed format interviews |
| 💼 **Role-Specific Questions** | Tailored questions based on job roles and selected tech stacks |
| 📝 **Comprehensive Feedback** | Detailed scoring and improvement suggestions after each session |
| 📈 **Progress Tracking** | Monitor your improvement over time with performance analytics |
| 🖥️ **Tech Stack Selection** | Customize interviews based on your target technology environment |
| 🔒 **Secure Authentication** | User account management via Firebase |


## 🔄 How It Works

1. **User Sign-Up/Login**: Create an account or sign in using Firebase authentication
2. **Interview Configuration**: Select interview type, job role, and relevant tech stack
3. **Interview Session**: Engage in a voice-based interview with the AI interviewer
4. **Real-time Interaction**: AI adapts questions based on your responses
5. **Feedback & Scoring**: Receive comprehensive feedback and scoring after the interview
6. **Progress Tracking**: Review past interviews and track improvement over time

## 🛠️ Tech Stack

VocalPrep is built using modern web technologies:

<div align="center">
  <table>
    <tr>
      <td align="center" width="96">
        <a href="https://nextjs.org/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="48" height="48" alt="Next.js" />
        </a>
        <br>Next.js
      </td>
      <td align="center" width="96">
        <a href="https://vapi.ai/">
          <img src="https://api.placeholder.com/48/48" width="48" height="48" alt="VAPI" />
        </a>
        <br>VAPI
      </td>
      <td align="center" width="96">
        <a href="https://ai.google.dev/models/gemini">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" width="48" height="48" alt="Gemini" />
        </a>
        <br>Gemini
      </td>
    </tr>
    <tr>
      <td align="center" width="96">
        <a href="https://firebase.google.com/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" width="48" height="48" alt="Firebase" />
        </a>
        <br>Firebase
      </td>
      <td align="center" width="96">
        <a href="https://tailwindcss.com/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="48" height="48" alt="Tailwind" />
        </a>
        <br>Tailwind
      </td>
      <td align="center" width="96">
        <a href="https://day.js.org/">
          <img src="https://api.placeholder.com/48/48" width="48" height="48" alt="Day.js" />
        </a>
        <br>Day.js
      </td>
    </tr>
  </table>
</div>

## 📂 Project Structure

```
vocalprep/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   ├── auth/                 # Authentication pages
│   ├── dashboard/            # User dashboard
│   ├── interviews/           # Interview sessions
│   ├── feedback/             # Interview feedback
│   └── page.tsx              # Home page
├── components/               # Reusable components
│   ├── auth/                 # Authentication components
│   ├── dashboard/            # Dashboard components
│   ├── interview/            # Interview components
│   ├── layout/               # Layout components
│   └── ui/                   # UI components
├── lib/                      # Utility functions and services
│   ├── firebase/             # Firebase configuration
│   ├── vapi/                 # VAPI integration
│   └── gemini/               # Gemini LLM integration
├── public/                   # Static assets
│   └── assets/               # Images and icons
├── styles/                   # Global styles
├── types/                    # TypeScript type definitions
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```



