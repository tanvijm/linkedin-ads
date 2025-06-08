import styles from '../styles/Results.module.css';

const maturityLevels = {
  1: {
    title: "Gut-feel Warrior",
    emoji: "🎯",
    level: "Level 1",
    description: "You're in the early stages of demand generation maturity. You rely on intuition and basic tactics, which is a great foundation to build upon!",
    characteristics: [
      "Makes decisions based on intuition and experience",
      "Uses basic tools and manual processes",
      "Focuses on individual campaigns and tactics",
      "Measures success through simple metrics"
    ],
    strengths: [
      "Agile and can pivot quickly",
      "Strong customer intuition and market sense",
      "Entrepreneurial approach to growth",
      "Not over-complicated by complex systems"
    ],
    nextSteps: [
      "Start tracking key metrics systematically",
      "Implement basic marketing automation",
      "Create standardized processes and templates",
      "Begin A/B testing your campaigns"
    ],
    advice: "Your intuition is valuable, but adding data will supercharge your results. Start with simple metrics and build from there.",
    color: "#EF4444"
  },
  2: {
    title: "Spreadsheet Ninja",
    emoji: "📊",
    level: "Level 2",
    description: "You've moved beyond gut-feel and are now data-driven! You're building systematic approaches to demand generation with solid measurement.",
    characteristics: [
      "Tracks metrics systematically in spreadsheets",
      "Uses marketing automation platforms",
      "Creates detailed buyer personas",
      "Implements basic lead scoring"
    ],
    strengths: [
      "Data-driven decision making",
      "Systematic approach to campaigns",
      "Good grasp of key metrics and ROI",
      "Building scalable processes"
    ],
    nextSteps: [
      "Implement multi-touch attribution",
      "Integrate more sophisticated tools",
      "Develop account-based marketing strategies",
      "Create cross-channel campaign orchestration"
    ],
    advice: "You're building a solid foundation! Focus on connecting the dots between touchpoints to understand the full customer journey.",
    color: "#F59E0B"
  },
  3: {
    title: "Multi-touch Tactician",
    emoji: "🎪",
    level: "Level 3",
    description: "You're orchestrating sophisticated multi-channel campaigns with integrated attribution. You understand the complexity of modern B2B buying!",
    characteristics: [
      "Orchestrates multi-channel campaigns",
      "Uses sophisticated attribution modeling",
      "Maps content to buyer journey stages",
      "Implements account-based marketing"
    ],
    strengths: [
      "Understands complex customer journeys",
      "Coordinates campaigns across channels",
      "Uses advanced attribution modeling",
      "Builds integrated martech stacks"
    ],
    nextSteps: [
      "Implement intent data and predictive analytics",
      "Add AI-powered personalization",
      "Develop signal-based campaign triggers",
      "Build predictive lead scoring models"
    ],
    advice: "You're in the sweet spot of demand gen maturity. Now focus on predictive insights and real-time personalization to reach the next level.",
    color: "#8B5CF6"
  },
  4: {
    title: "Signal-based Orchestrator",
    emoji: "🎼",
    level: "Level 4",
    description: "You're leveraging intent signals and predictive analytics to orchestrate demand generation at scale. You're operating at an advanced level!",
    characteristics: [
      "Uses intent data and predictive analytics",
      "Triggers campaigns based on buyer signals",
      "Implements AI-powered personalization",
      "Leverages machine learning for optimization"
    ],
    strengths: [
      "Predictive and proactive approach",
      "Uses advanced AI and machine learning",
      "Real-time campaign optimization",
      "Sophisticated signal-based triggers"
    ],
    nextSteps: [
      "Explore autonomous AI agents",
      "Implement generative AI for content",
      "Build self-optimizing campaign systems",
      "Develop fully automated GTM operations"
    ],
    advice: "You're operating at an elite level! Consider how autonomous AI agents could further amplify your sophisticated strategies.",
    color: "#06B6D4"
  },
  5: {
    title: "Agentic GTM Ops Master",
    emoji: "🤖",
    level: "Level 5",
    description: "Welcome to the future! You're leveraging autonomous AI agents to manage demand generation operations. You're at the cutting edge of marketing evolution!",
    characteristics: [
      "Uses autonomous AI agents for operations",
      "AI generates and personalizes content automatically",
      "Self-optimizing campaign systems",
      "Predictive demand forecasting with auto-adjustment"
    ],
    strengths: [
      "Fully autonomous marketing operations",
      "AI-powered content generation and personalization",
      "Self-healing and self-optimizing systems",
      "Predictive and prescriptive analytics"
    ],
    nextSteps: [
      "Share your learnings with the community",
      "Continue experimenting with emerging AI capabilities",
      "Help others advance their maturity",
      "Build the future of demand generation"
    ],
    advice: "You're a pioneer! Your role now is to help others on their journey while continuing to push the boundaries of what's possible.",
    color: "#10B981"
  }
};

const Results = ({ result, onRestart }) => {
  const { level, score } = result;
  const resultData = maturityLevels[level];
  
  const getScoreDescription = (score) => {
    if (score <= 1.5) return "Foundational stage with lots of growth potential";
    if (score <= 2.5) return "Building systematic approaches";
    if (score <= 3.5) return "Well-coordinated and sophisticated";
    if (score <= 4.5) return "Advanced with predictive capabilities";
    return "Cutting-edge autonomous operations";
  };

  const handleShare = () => {
    const text = `I just assessed my demand gen strategy maturity! I'm a ${resultData.title} (${resultData.level}) 🚀 How mature is YOUR strategy? Take the assessment: ${window.location.href}`;
    
    if (navigator.share) {
      navigator.share({
        title: `I'm a ${resultData.title}!`,
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Result copied to clipboard!');
    }
  };

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.resultCard}>
        <div className={styles.resultHeader} style={{ backgroundColor: resultData.color }}>
          <div className={styles.emoji}>{resultData.emoji}</div>
          <h1 className={styles.resultTitle}>{resultData.title}</h1>
          <div className={styles.levelBadge}>{resultData.level}</div>
          <div className={styles.scoreInfo}>
            <div className={styles.score}>Score: {score.toFixed(1)}/5.0</div>
            <div className={styles.scoreDescription}>{getScoreDescription(score)}</div>
          </div>
        </div>
        
        <div className={styles.resultContent}>
          <p className={styles.description}>{resultData.description}</p>
          
          <div className={styles.section}>
            <h3>Your Current Characteristics</h3>
            <ul className={styles.characteristicsList}>
              {resultData.characteristics.map((characteristic, index) => (
                <li key={index}>{characteristic}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.section}>
            <h3>Your Strategic Strengths</h3>
            <ul className={styles.strengthsList}>
              {resultData.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.section}>
            <h3>Next Level Evolution</h3>
            <ul className={styles.nextStepsList}>
              {resultData.nextSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.advice}>
            <h3>Strategic Advice</h3>
            <p>{resultData.advice}</p>
          </div>
        </div>
        
        <div className={styles.actions}>
          <button className={styles.shareButton} onClick={handleShare}>
            Share Your Maturity Level
          </button>
          <button className={styles.retakeButton} onClick={onRestart}>
            Retake Assessment
          </button>
        </div>
      </div>
      
      <div className={styles.maturityPath}>
        <h3>The Demand Gen Maturity Path</h3>
        <div className={styles.levelGrid}>
          {Object.entries(maturityLevels).map(([levelNum, levelData]) => (
            <div 
              key={levelNum} 
              className={`${styles.levelPreview} ${parseInt(levelNum) === level ? styles.current : ''} ${parseInt(levelNum) < level ? styles.completed : ''}`}
            >
              <div className={styles.levelEmoji}>{levelData.emoji}</div>
              <div className={styles.levelTitle}>{levelData.title}</div>
              <div className={styles.levelNumber}>{levelData.level}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;