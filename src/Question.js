import React from 'react';

const Question = ({ question, onAnswer, onNext }) => {
  const { question: questionText, correct_answer, incorrect_answers } = question;
  const choices = [correct_answer, ...incorrect_answers];

  const handleAnswerClick = (choice) => {
    onAnswer(question.question, choice);
  };

  return (
    <div className="question">
      <h2>{questionText}</h2>
      <ul>
        {choices.map((choice) => (
          <li key={choice} onClick={() => handleAnswerClick(choice)}>
            {choice}
          </li>
        ))}
      </ul>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Question;
