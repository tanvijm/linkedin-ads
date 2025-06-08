import { useState } from 'react';
import styles from '../styles/Quiz.module.css';

const questions = [
  {
    id: 1,
    question: "How do you currently measure campaign success?",
    answers: [
      { text: "I check if leads are coming in and trust my instincts", level: 1 },
      { text: "I track key metrics in spreadsheets and calculate ROI", level: 2 },
      { text: "I analyze multi-touch attribution across all touchpoints", level: 3 },
      { text: "I use predictive analytics and intent signals to optimize", level: 4 },
      { text: "AI agents automatically optimize campaigns based on performance", level: 5 }
    ]
  },
  {
    id: 2,
    question: "How do you determine your target audience?",
    answers: [
      { text: "I know our customers well and target based on gut feel", level: 1 },
      { text: "I create detailed buyer personas based on customer data", level: 2 },
      { text: "I segment audiences based on behavioral and firmographic data", level: 3 },
      { text: "I use intent data and predictive models to identify prospects", level: 4 },
      { text: "AI continuously identifies and targets new audience segments", level: 5 }
    ]
  },
  {
    id: 3,
    question: "How coordinated are your marketing campaigns?",
    answers: [
      { text: "I run individual campaigns and tactics as needed", level: 1 },
      { text: "I plan campaigns in advance and track them systematically", level: 2 },
      { text: "I orchestrate multi-channel campaigns with consistent messaging", level: 3 },
      { text: "I trigger dynamic campaigns based on real-time buyer signals", level: 4 },
      { text: "AI automatically creates and executes personalized campaign sequences", level: 5 }
    ]
  },
  {
    id: 4,
    question: "What tools and technology do you primarily use?",
    answers: [
      { text: "Basic tools - email, social media, maybe a simple CRM", level: 1 },
      { text: "Marketing automation platform plus analytics tools", level: 2 },
      { text: "Integrated martech stack with attribution and ABM tools", level: 3 },
      { text: "Advanced platforms with AI insights and predictive capabilities", level: 4 },
      { text: "Autonomous AI agents that manage most marketing operations", level: 5 }
    ]
  },
  {
    id: 5,
    question: "How do you handle lead scoring and qualification?",
    answers: [
      { text: "Sales team reviews all leads and decides what's qualified", level: 1 },
      { text: "I use basic lead scoring based on demographics and actions", level: 2 },
      { text: "I have sophisticated scoring models with multiple touchpoints", level: 3 },
      { text: "I use intent signals and predictive scoring algorithms", level: 4 },
      { text: "AI automatically scores, routes, and nurtures leads dynamically", level: 5 }
    ]
  },
  {
    id: 6,
    question: "How do you approach content strategy?",
    answers: [
      { text: "I create content based on what feels right for our audience", level: 1 },
      { text: "I plan content calendars and track engagement metrics", level: 2 },
      { text: "I map content to buyer journey stages and personas", level: 3 },
      { text: "I use data insights to trigger personalized content delivery", level: 4 },
      { text: "AI generates and personalizes content for each prospect", level: 5 }
    ]
  },
  {
    id: 7,
    question: "How do you optimize campaign performance?",
    answers: [
      { text: "I make changes based on intuition and basic metrics", level: 1 },
      { text: "I run A/B tests and analyze results in spreadsheets", level: 2 },
      { text: "I use systematic testing frameworks across channels", level: 3 },
      { text: "I leverage machine learning for continuous optimization", level: 4 },
      { text: "AI agents autonomously test and optimize all campaigns", level: 5 }
    ]
  },
  {
    id: 8,
    question: "How do you align sales and marketing?",
    answers: [
      { text: "We communicate informally and share basic lead information", level: 1 },
      { text: "We have regular meetings and shared reporting dashboards", level: 2 },
      { text: "We have defined SLAs and integrated systems for lead handoff", level: 3 },
      { text: "We use shared intent data and coordinated account-based plays", level: 4 },
      { text: "AI orchestrates seamless handoffs and account intelligence", level: 5 }
    ]
  },
  {
    id: 9,
    question: "How do you predict and forecast demand?",
    answers: [
      { text: "I estimate based on past experience and gut instinct", level: 1 },
      { text: "I analyze historical data trends to project future performance", level: 2 },
      { text: "I use attribution modeling to forecast pipeline impact", level: 3 },
      { text: "I leverage predictive analytics and leading indicators", level: 4 },
      { text: "AI provides real-time demand forecasting and auto-adjusts strategy", level: 5 }
    ]
  },
  {
    id: 10,
    question: "How automated are your marketing operations?",
    answers: [
      { text: "Most tasks are manual with some basic automation", level: 1 },
      { text: "I have workflows for lead nurturing and follow-up", level: 2 },
      { text: "I have sophisticated automation across the marketing funnel", level: 3 },
      { text: "I use AI-powered automation with dynamic decisioning", level: 4 },
      { text: "Autonomous AI agents handle most marketing operations", level: 5 }
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
        // Calculate maturity level based on average score
        const totalScore = newAnswers.reduce((sum, answer) => sum + answer.level, 0);
        const averageScore = totalScore / newAnswers.length;
        
        let maturityLevel;
        if (averageScore <= 1.5) maturityLevel = 1;
        else if (averageScore <= 2.5) maturityLevel = 2;
        else if (averageScore <= 3.5) maturityLevel = 3;
        else if (averageScore <= 4.5) maturityLevel = 4;
        else maturityLevel = 5;
        
        onComplete({
          level: maturityLevel,
          score: averageScore,
          answers: newAnswers
        });
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
            <span className={styles.levelBadge}>Level {answer.level}</span>
            {answer.text}
          </button>
        ))}
      </div>
      
      <button
        className={styles.nextButton}
        onClick={handleNextQuestion}
        disabled={!selectedAnswer}
      >
        {currentQuestion + 1 === questions.length ? 'Get My Maturity Score' : 'Next Question'}
      </button>
    </div>
  );
};

export default Quiz;