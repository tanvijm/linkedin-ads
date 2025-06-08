import { useState } from 'react';
import Head from 'next/head';
import Quiz from '../components/Quiz';
import Results from '../components/Results';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [results, setResults] = useState(null);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleQuizComplete = (result) => {
    setResults(result);
    setQuizCompleted(true);
  };

  const handleRestart = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setResults(null);
  };

  return (
    <>
      <Head>
        <title>What Type of Demand Gen Marketer Are You? | Free Quiz</title>
        <meta name="description" content="Discover your demand generation marketing personality! Take our fun quiz to find out if you're The Experimenter, Attribution Analyst, Playbook Perfectionist, or Creative Closer." />
        <meta name="keywords" content="demand generation, marketing quiz, marketing personality, demand gen marketer, marketing assessment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="What Type of Demand Gen Marketer Are You? | Free Quiz" />
        <meta property="og:description" content="Discover your demand generation marketing personality! Take our fun quiz to find out your marketing type." />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What Type of Demand Gen Marketer Are You?" />
        <meta name="twitter:description" content="Discover your demand generation marketing personality with our fun quiz!" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          {!quizStarted && !quizCompleted && (
            <div className={styles.welcomeSection}>
              <h1 className={styles.title}>What Type of Demand Gen Marketer Are You?</h1>
              <p className={styles.subtitle}>
                Discover your demand generation marketing personality and unlock insights about your unique approach to driving growth!
              </p>
              
              <div className={styles.marketingTypes}>
                <div className={styles.typeCard}>
                  <h3>🧪 The Experimenter</h3>
                  <p>Always testing new channels and tactics</p>
                </div>
                <div className={styles.typeCard}>
                  <h3>📊 The Attribution Analyst</h3>
                  <p>Data-driven and ROI-focused</p>
                </div>
                <div className={styles.typeCard}>
                  <h3>📋 The Playbook Perfectionist</h3>
                  <p>Process-oriented and systematic</p>
                </div>
                <div className={styles.typeCard}>
                  <h3>🎨 The Creative Closer</h3>
                  <p>Brand-focused with creative flair</p>
                </div>
              </div>

              <button className={styles.startButton} onClick={handleStartQuiz}>
                Take the Quiz (2 minutes)
              </button>
              
              <p className={styles.disclaimer}>
                Free quiz • No email required • Get instant results
              </p>
            </div>
          )}

          {quizStarted && !quizCompleted && (
            <Quiz onComplete={handleQuizComplete} />
          )}

          {quizCompleted && results && (
            <Results result={results} onRestart={handleRestart} />
          )}
        </div>
      </main>
    </>
  );
}