# 🎙️ VocalPrep

<div align="center">
  
  
  **AI-Powered Interview Practice Platform**
  
  [![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/models/gemini)
  [![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  
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

- **[Next.js](https://nextjs.org/)** - React framework for full-stack development
- **[VAPI](https://vapi.ai/)** - Voice interaction capabilities
- **[Google Gemini](https://ai.google.dev/models/gemini)** - Large language model powering the AI interviewer
- **[Firebase](https://firebase.google.com/)** - Authentication and database
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Day.js](https://day.js.org/)** - Date formatting and manipulation

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


