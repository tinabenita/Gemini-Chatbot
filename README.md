# Gemini Chatbot

A full-stack web application that leverages Google's Generative AI API to create an interactive chatbot. This project combines a React frontend with an Express.js backend to deliver real-time conversational AI capabilities.

## Features

- **Interactive Chat Interface**: Clean and intuitive UI for conversing with the Gemini AI model
- **Conversation History**: Maintains chat history throughout the session
- **Surprise Me**: Random prompt suggestions to inspire conversations
- **Real-time Responses**: Fast API integration with Google's Generative AI
- **Error Handling**: Graceful error messages for failed requests
- **Clear Chat**: Reset the conversation at any time

## Tech Stack

### Frontend
- **React** (v18.2.0) - UI library
- **React DOM** - DOM rendering
- **React Scripts** - Build and test tools
- **CSS** - Styling

### Backend
- **Express.js** (v4.18.3) - Web server framework
- **Node.js** - JavaScript runtime
- **Nodemon** (v3.1.0) - Development server auto-restart

### API & External Services
- **Google Generative AI** (@google/generative-ai v0.2.1) - AI model integration
- **CORS** (v2.8.5) - Cross-Origin Resource Sharing middleware
- **dotenv** (v16.4.5) - Environment variable management

### Testing & Quality
- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities

## Project Structure

```
Gemini-Chatbot/
├── gemini-app/
│   ├── public/                 # Static files
│   │   ├── index.html          # Main HTML entry point
│   │   ├── favicon.ico         # App favicon
│   │   ├── manifest.json       # PWA manifest
│   │   ├── robots.txt          # SEO robots file
│   │   └── logo*.png           # App logos
│   │
│   ├── src/                    # React source code
│   │   ├── App.js              # Main React component
│   │   ├── index.js            # React DOM render
│   │   └── index.css           # Global styles
│   │
│   ├── server.js               # Express backend server
│   ├── package.json            # Project dependencies
│   └── README.md               # Project documentation
│
└── .gitignore                  # Git ignore rules
```

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- A **Google Gemini API Key** (from [Google AI Studio](https://makersuite.google.com/app/apikey))

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tinabenita/Gemini-Chatbot.git
   cd Gemini-Chatbot
   ```

2. **Navigate to the app directory**
   ```bash
   cd gemini-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

## Configuration

1. **Create a `.env` file** in the `gemini-app` directory:
   ```bash
   touch .env
   ```

2. **Add your Google API Key** to the `.env` file:
   ```
   API_KEY=your_google_generative_ai_api_key_here
   ```

   >  **Important**: Never commit your `.env` file or API key to version control. It's already included in `.gitignore`.

## Running the Application

### Option 1: Run Both Frontend and Backend Concurrently

If you have a process manager like `concurrently` installed, you can run both:
```bash
npm run start:frontend &
npm run start:backend
```

### Option 2: Run Frontend and Backend Separately

**Terminal 1 - Backend (Express server)**
```bash
cd gemini-app
npm run start:backend
```
The backend will start on `http://localhost:8000`

**Terminal 2 - Frontend (React app)**
```bash
cd gemini-app
npm run start:frontend
```
The frontend will start on `http://localhost:3000`

### Production Build
```bash
npm run build
```
This creates an optimized production build in the `build/` directory.

Created by [@tinabenita](https://github.com/tinabenita)

---

**Happy Chatting! 🤖💬**
