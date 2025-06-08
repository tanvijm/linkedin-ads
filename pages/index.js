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
        <title>How Mature Is Your Demand Gen Strategy? | Free Assessment</title>
        <meta name="description" content="Assess your demand generation maturity level! Discover if you're a Gut-feel Warrior, Spreadsheet Ninja, Multi-touch Tactician, Signal-based Orchestrator, or Agentic GTM Ops Master." />
        <meta name="keywords" content="demand generation maturity, marketing assessment, GTM strategy, demand gen levels, marketing evolution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="How Mature Is Your Demand Gen Strategy? | Free Assessment" />
        <meta property="og:description" content="Assess your demand generation maturity level and discover your strategic evolution stage!" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How Mature Is Your Demand Gen Strategy?" />
        <meta name="twitter:description" content="Assess your demand generation maturity level with our strategic assessment!" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          {!quizStarted && !quizCompleted && (
            <div className={styles.welcomeSection}>
              <h1 className={styles.title}>How Mature Is Your Demand Gen Strategy?</h1>
              <p className={styles.subtitle}>
                Assess your demand generation maturity level and discover where you stand on the strategic evolution ladder!
              </p>
              
              <div className={styles.maturityLevels}>
                <div className={styles.levelCard}>
                  <h3>🎯 Level 1: Gut-feel Warrior</h3>
                  <p>Intuition-driven decisions and basic tactics</p>
                </div>
                <div className={styles.levelCard}>
                  <h3>📊 Level 2: Spreadsheet Ninja</h3>
                  <p>Data collection and manual analysis</p>
                </div>
                <div className={styles.levelCard}>
                  <h3>🎪 Level 3: Multi-touch Tactician</h3>
                  <p>Coordinated campaigns across channels</p>
                </div>
                <div className={styles.levelCard}>
                  <h3>🎼 Level 4: Signal-based Orchestrator</h3>
                  <p>Intent-driven and predictive strategies</p>
                </div>
                <div className={styles.levelCard}>
                  <h3>🤖 Level 5: Agentic GTM Ops Master</h3>
                  <p>AI-powered autonomous operations</p>
                </div>
              </div>

              <button className={styles.startButton} onClick={handleStartQuiz}>
                Assess My Strategy (3 minutes)
              </button>
              
              <p className={styles.disclaimer}>
                Free assessment • No email required • Get instant maturity score
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