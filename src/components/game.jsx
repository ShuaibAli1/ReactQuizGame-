import React, { useState, useEffect } from "react";
import './game.css';

function shuffleArray(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function Game() {
  const initialQuestions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    
    {
        text: "What year was the Constitution of America written?",
        options: [
          { id: 0, text: "1787", isCorrect: true },
          { id: 1, text: "1776", isCorrect: false },
          { id: 2, text: "1774", isCorrect: false },
          { id: 3, text: "1826", isCorrect: false },
        ],
      },
      {
        text: "Who was the second president of the US?",
        options: [
          { id: 0, text: "John Adams", isCorrect: true },
          { id: 1, text: "Paul Revere", isCorrect: false },
          { id: 2, text: "Thomas Jefferson", isCorrect: false },
          { id: 3, text: "Benjamin Franklin", isCorrect: false },
        ],
      },
      {
        text: "What is the largest state in the US?",
        options: [
          { id: 0, text: "California", isCorrect: false },
          { id: 1, text: "Alaska", isCorrect: true },
          { id: 2, text: "Texas", isCorrect: false },
          { id: 3, text: "Montana", isCorrect: false },
        ],
      },
      {
        text: "Which of the following countries DO NOT border the US?",
        options: [
          { id: 0, text: "Canada", isCorrect: false },
          { id: 1, text: "Russia", isCorrect: true },
          { id: 2, text: "Cuba", isCorrect: true },
          { id: 3, text: "Mexico", isCorrect: false },
        ],
      },

      {
        text: "Who was the first woman to fly solo across the Atlantic Ocean?",
        options: [
          { id: 0, text: "Amelia Earhart", isCorrect: true },
          { id: 1, text: "Harriet Quimby", isCorrect: false },
          { id: 2, text: "Bessie Coleman", isCorrect: false },
          { id: 3, text: "Jacqueline Cochran", isCorrect: false },
        ],
      },
      {
        text: "In which year did the American Civil War end?",
        options: [
          { id: 0, text: "1865", isCorrect: true },
          { id: 1, text: "1861", isCorrect: false },
          { id: 2, text: "1877", isCorrect: false },
          { id: 3, text: "1859", isCorrect: false },
        ],
      },
      {
        text: "Who wrote the Declaration of Independence?",
        options: [
          { id: 0, text: "George Washington", isCorrect: false },
          { id: 1, text: "Thomas Jefferson", isCorrect: true },
          { id: 2, text: "John Adams", isCorrect: false },
          { id: 3, text: "Benjamin Franklin", isCorrect: false },
        ],
      },

    ];

  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const [questions, setQuestions] = useState(() => shuffleArray([...initialQuestions]));

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const optionClicked = (isCorrect, optionText) => {
    if (!isCorrect) {
      setIncorrectAnswers(incorrectAnswers.concat([{ 
        question: questions[currentQuestion].text, 
        answer: questions[currentQuestion].options.find(o => o.isCorrect).text,
      }]));
    }

    setTimeout(() => {
      if (isCorrect) {
        setScore(score + 1);
      }
  
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 2000);
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setIncorrectAnswers([]);
    setQuestions(shuffleArray([...initialQuestions]));
  };

  return (
    <div className="App">
      <h1>USA History</h1>
      <h2>Score: {score}</h2>

      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          {incorrectAnswers.length > 0 && (
            <div>
              <h3>Review Incorrect Answers:</h3>
              <ul>
                {incorrectAnswers.map((item, index) => (
                  <li key={index}>{item.question} - Correct Answer: {item.answer}</li>
                ))}
              </ul>
            </div>
          )}
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>Question: {currentQuestion + 1} out of {questions.length}</h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => (
              <li
                key={option.id}
                onClick={() => optionClicked(option.isCorrect, option.text)}
              >
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Game;
