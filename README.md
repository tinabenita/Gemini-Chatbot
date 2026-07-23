# Gemini Chatbot

A full-stack web application that leverages Google's Generative AI API to create an interactive chatbot. This project combines a React frontend with an Express.js backend to deliver real-time conversational AI capabilities.

## 🌟 Features

- **Interactive Chat Interface**: Clean and intuitive UI for conversing with the Gemini AI model
- **Conversation History**: Maintains chat history throughout the session
- **Surprise Me**: Random prompt suggestions to inspire conversations
- **Real-time Responses**: Fast API integration with Google's Generative AI
- **Error Handling**: Graceful error messages for failed requests
- **Clear Chat**: Reset the conversation at any time

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [File Descriptions](#file-descriptions)

## 🛠️ Tech Stack

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

## 📁 Project Structure

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

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- A **Google Gemini API Key** (from [Google AI Studio](https://makersuite.google.com/app/apikey))

## 🚀 Installation

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

## ⚙️ Configuration

1. **Create a `.env` file** in the `gemini-app` directory:
   ```bash
   touch .env
   ```

2. **Add your Google API Key** to the `.env` file:
   ```
   API_KEY=your_google_generative_ai_api_key_here
   ```

   > ⚠️ **Important**: Never commit your `.env` file or API key to version control. It's already included in `.gitignore`.

## ▶️ Running the Application

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

## 💬 Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Type your question in the input field (e.g., "When is Easter?")
3. Click **"Ask me"** to send your message to Gemini
4. The AI will respond with an answer below
5. Continue the conversation - the chat history is maintained
6. Click **"Surprise me"** for random prompt suggestions
7. Click **"Clear"** to reset the conversation

## 🔌 API Endpoints

### POST `/gemini`
Sends a message to Google's Gemini AI and returns the response.

**Request Body:**
```json
{
  "message": "Your question here",
  "history": [
    {
      "role": "User",
      "parts": "Previous user message"
    },
    {
      "role": "Model",
      "parts": "Previous model response"
    }
  ]
}
```

**Response:**
```
Text response from the Gemini AI model
```

**Example:**
```bash
curl -X POST http://localhost:8000/gemini \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What is the capital of France?",
    "history": []
  }'
```

## 📄 File Descriptions

### `gemini-app/server.js`
Express.js backend server that:
- Initializes Express with CORS middleware
- Loads environment variables from `.env`
- Instantiates the Google Generative AI client
- Handles POST requests to `/gemini` endpoint
- Sends messages to Gemini with conversation history
- Returns AI responses to the frontend

### `gemini-app/src/App.js`
Main React component that:
- Manages chat input state
- Maintains conversation history
- Handles API calls to the backend
- Displays error messages
- Renders chat interface with user/model messages
- Implements "Surprise me" feature with random prompts

### `gemini-app/src/index.css`
Global styles for:
- Chat container layout
- Input field styling
- Message display formatting
- Button styling
- Responsive design

### `gemini-app/package.json`
Project configuration containing:
- Dependencies and versions
- NPM scripts for development and production
- ESLint configuration
- Browser compatibility settings

## 🐛 Troubleshooting

**Issue**: "Error! Please ask a question."
- **Solution**: Make sure you've typed a message before clicking "Ask me"

**Issue**: "Something went wrong! Please try again later."
- **Solution**: Check that the backend server is running on port 8000
- Verify your API key is correctly set in the `.env` file
- Check browser console for detailed error messages

**Issue**: CORS errors
- **Solution**: The backend already has CORS enabled. Ensure the frontend URL matches the backend's CORS configuration

**Issue**: Cannot connect to backend
- **Solution**: Make sure both frontend (`localhost:3000`) and backend (`localhost:8000`) are running

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `API_KEY` | Google Generative AI API Key | Yes |

## 📚 Additional Resources

- [Google Generative AI API Documentation](https://ai.google.dev/)
- [React Documentation](https://react.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [Google AI Studio](https://makersuite.google.com/app/apikey)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created by [@tinabenita](https://github.com/tinabenita)

---

**Happy Chatting! 🤖💬**
