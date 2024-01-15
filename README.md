React Quiz Application
Overview
This React Quiz Application is a simple web-based quiz platform that allows users to answer a set of 15 questions fetched from the Open Trivia Database API. The application features a timer, question navigation, and a report page displaying the user's answers and the correct answers.

Components
The main components of the application include:

App: The root component managing the overall application state and rendering child components.
Question: Displays a single quiz question and handles user input for answers.
Timer: Manages the countdown timer for the quiz.
Overview: Provides an overview panel showing all questions, indicating visited and attempted questions.
Report: Displays the user's answers and correct answers after completing the quiz.
Installation and Setup
To run the application locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/quiz-app.git
Navigate to the project directory:

bash
Copy code
cd quiz-app
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The application should now be running at http://localhost:3000.

Assumptions
The Open Trivia Database API provides consistent and reliable data.
The quiz consists of 15 questions with a fixed timer of 30 minutes.
Challenges Faced
API Data Structure: Understanding the structure of the data fetched from the Open Trivia Database API posed an initial challenge. Properly parsing and extracting relevant information were crucial.

Solution: Thoroughly reviewing the API documentation and adjusting the data processing logic to match the expected structure.

Styling and Layout: Ensuring a clean and user-friendly layout with proper styling required some iteration.

Solution: Utilizing CSS for styling and layout and referring to best practices for UI/UX design. Implementing a simple design that enhances user experience.

Deployment on Vercel: Deploying the application on Vercel and configuring the environment posed challenges related to setting up environment variables and ensuring a smooth deployment process.

Solution: Referring to Vercel documentation for deployment, adjusting environment variables, and utilizing Vercel's automatic build settings.
