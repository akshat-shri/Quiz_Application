import React from 'react';

const Overview = ({ questions, userAnswers, currentQuestion, onOverviewClick }) => {
  return (
    <div className="overview">
      <h3>Question Overview</h3>
      <ul>
        {questions.map((question, index) => (
          <li
            key={question.question}
            className={
              currentQuestion === index
                ? 'current-question'
                : userAnswers.hasOwnProperty(question.question)
                ? 'attempted'
                : ''
            }
            onClick={() => onOverviewClick(index)}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Overview;
