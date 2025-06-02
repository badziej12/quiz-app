# ReactQuiz

A simple interactive quiz application built with React and Vite.

## Features

- Multiple-choice questions with shuffled answers
- Timed questions with visual progress bar
- Automatic skipping of unanswered questions
- Instant feedback on answer correctness
- Summary screen with statistics and answer review

## Project Structure
```sh
.
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── questions.js
│   ├── assets/
│   │   ├── quiz-logo.png
│   │   └── quiz-complete.png
│   └── components/
│       ├── Header.jsx
│       ├── Quiz.jsx
│       ├── Question.jsx
│       ├── QuestionTimer.jsx
│       ├── Answers.jsx
│       └── Summary.jsx
├── vite.config.js
├── package.json
└── README.md
```


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone git@github.com:badziej12/quiz-app.git
   cd quiz-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the App

**Start the development server:**
   ```sh
   npm run dev
   ```

Open http://localhost:5173 in your browser to view the app.

## License
This project is licensed under the MIT License.

