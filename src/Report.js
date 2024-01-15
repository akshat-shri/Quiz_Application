import React from 'react';

const Report = ({ questions, userAnswers }) => {
  return (
    <div>
      <h2>Quiz Report</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={question.question}>
            <strong>Question {index + 1}:</strong> {question.question}
            <br />
            <strong>Your Answer:</strong> {userAnswers[question.question] || 'Not Attempted'}
            <br />
            <strong>Correct Answer:</strong> {question.correct_answer}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Report;

