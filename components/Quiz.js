import { useState } from 'react';
import styles from '../styles/Quiz.module.css';

const questions = [
  {
    id: 1,
    question: "What's your first instinct when a campaign isn't performing?",
    answers: [
      { text: "Try a completely different channel or approach", type: "experimenter" },
      { text: "Dive deep into the data to find the problem", type: "analyst" },
      { text: "Review the process and optimize each step", type: "perfectionist" },
      { text: "Brainstorm more compelling messaging and creative", type: "closer" }
    ]
  },
  {
    id: 2,
    question: "How do you prefer to spend your marketing budget?",
    answers: [
      { text: "Testing 5 small experiments across different channels", type: "experimenter" },
      { text: "Doubling down on proven high-ROI activities", type: "analyst" },
      { text: "Following a structured plan with defined allocations", type: "perfectionist" },
      { text: "Investing in premium creative and brand experiences", type: "closer" }
    ]
  },
  {
    id: 3,
    question: "What gets you most excited about a new marketing tool?",
    answers: [
      { text: "It opens up possibilities I never thought of", type: "experimenter" },
      { text: "The advanced analytics and reporting capabilities", type: "analyst" },
      { text: "How well it integrates with existing workflows", type: "perfectionist" },
      { text: "The creative possibilities and user experience", type: "closer" }
    ]
  },
  {
    id: 4,
    question: "Your CEO asks for a campaign update. What do you lead with?",
    answers: [
      { text: "The exciting new tactics we're testing", type: "experimenter" },
      { text: "ROI metrics and attribution data", type: "analyst" },
      { text: "Progress against our strategic milestones", type: "perfectionist" },
      { text: "The story our campaigns are telling", type: "closer" }
    ]
  },
  {
    id: 5,
    question: "What's your ideal team meeting agenda?",
    answers: [
      { text: "Brainstorming wild new ideas to try", type: "experimenter" },
      { text: "Reviewing performance data and optimizations", type: "analyst" },
      { text: "Walking through processes and best practices", type: "perfectionist" },
      { text: "Workshopping messaging and creative concepts", type: "closer" }
    ]
  },
  {
    id: 6,
    question: "How do you handle conflicting advice from marketing experts?",
    answers: [
      { text: "Test both approaches and see what works", type: "experimenter" },
      { text: "Look for data to support each recommendation", type: "analyst" },
      { text: "Evaluate which fits better with our framework", type: "perfectionist" },
      { text: "Consider which aligns with our brand story", type: "closer" }
    ]
  },
  {
    id: 7,
    question: "What's your biggest marketing fear?",
    answers: [
      { text: "Getting stuck doing the same things forever", type: "experimenter" },
      { text: "Making decisions without enough data", type: "analyst" },
      { text: "Missing important details in execution", type: "perfectionist" },
      { text: "Creating boring, forgettable campaigns", type: "closer" }
    ]
  },
  {
    id: 8,
    question: "When evaluating a campaign's success, you focus on:",
    answers: [
      { text: "What we learned and what to try next", type: "experimenter" },
      { text: "Conversion rates and cost per acquisition", type: "analyst" },
      { text: "How well we executed our planned strategy", type: "perfectionist" },
      { text: "Brand awareness and engagement quality", type: "closer" }
    ]
  }
];

const Quiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);
      
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Calculate result
        const scores = {
          experimenter: 0,
          analyst: 0,
          perfectionist: 0,
          closer: 0
        };
        
        newAnswers.forEach(answer => {
          scores[answer.type]++;
        });
        
        const resultType = Object.keys(scores).reduce((a, b) => 
          scores[a] > scores[b] ? a : b
        );
        
        onComplete(resultType);
      }
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className={styles.quizContainer}>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${progress}%` }}></div>
      </div>
      
      <div className={styles.questionCounter}>
        Question {currentQuestion + 1} of {questions.length}
      </div>
      
      <h2 className={styles.question}>
        {questions[currentQuestion].question}
      </h2>
      
      <div className={styles.answers}>
        {questions[currentQuestion].answers.map((answer, index) => (
          <button
            key={index}
            className={`${styles.answerButton} ${
              selectedAnswer === answer ? styles.selected : ''
            }`}
            onClick={() => handleAnswerSelect(answer)}
          >
            {answer.text}
          </button>
        ))}
      </div>
      
      <button
        className={styles.nextButton}
        onClick={handleNextQuestion}
        disabled={!selectedAnswer}
      >
        {currentQuestion + 1 === questions.length ? 'Get My Results' : 'Next Question'}
      </button>
    </div>
  );
};

export default Quiz;