import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import Timer from './Timer';
import Overview from './Overview';
import Report from './Report';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timer, setTimer] = useState(30 * 60);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=15');
        setQuestions(response.data.results);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleStartQuiz = () => {
    if (email.trim() !== '') {
      setShowQuiz(true);
    } else {
      alert('Please enter your email address.');
    }
  };

  const handleAnswer = (questionIndex, answer) => {
    setUserAnswers((prevAnswers) => ({ ...prevAnswers, [questionIndex]: answer }));
  };

  const handleTimerTick = () => {
    setTimer((prevTimer) => prevTimer - 1);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleOverviewClick = (index) => {
    setCurrentQuestion(index);
  };

  const handleSubmitQuiz = () => {
    // Implement quiz submission logic here
    // Redirect to report page or display report
  };

  if (!showQuiz) {
    return (
      <div className="container">
        <h2>Quiz Start Page</h2>
        <label>
          Enter your email address:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button onClick={handleStartQuiz}>Start Quiz</button>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="container">Loading...</div>;
  }

  if (currentQuestion >= questions.length) {
    return <Report questions={questions} userAnswers={userAnswers} />;
  }

  return (
    <div className="container">
      <Timer timer={timer} onTick={handleTimerTick} onFinish={handleSubmitQuiz} />
      <Question
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
        onNext={handleNextQuestion}
      />
      <Overview
        questions={questions}
        userAnswers={userAnswers}
        currentQuestion={currentQuestion}
        onOverviewClick={handleOverviewClick}
      />
    </div>
  );
};

export default App;
