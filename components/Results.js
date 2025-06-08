import styles from '../styles/Results.module.css';

const resultTypes = {
  experimenter: {
    title: "The Experimenter",
    emoji: "🧪",
    description: "You're the fearless pioneer of demand generation! You thrive on testing new channels, tactics, and technologies.",
    traits: [
      "Always first to try emerging platforms",
      "Comfortable with uncertainty and failure",
      "Constantly seeks new growth opportunities",
      "Energized by innovation and change"
    ],
    strengths: [
      "Discovers breakthrough strategies others miss",
      "Adapts quickly to market changes",
      "Builds resilient, diversified programs",
      "Inspires teams to think outside the box"
    ],
    challenges: [
      "May lack focus on proven strategies",
      "Could struggle with measurement consistency",
      "Might overwhelm team with too many tests"
    ],
    advice: "Your superpower is discovery, but remember to balance experimentation with optimization of your wins. Set aside budget for both testing and scaling proven tactics.",
    color: "#8B5CF6"
  },
  analyst: {
    title: "The Attribution Analyst",
    emoji: "📊",
    description: "You're the data-driven mastermind who turns numbers into growth. Every decision is backed by solid metrics and ROI analysis.",
    traits: [
      "Makes decisions based on hard data",
      "Obsessed with measurement and attribution",
      "Optimizes for efficiency and ROI",
      "Skeptical without proof of performance"
    ],
    strengths: [
      "Maximizes ROI through data insights",
      "Builds accountability into programs",
      "Identifies optimization opportunities",
      "Provides clear performance visibility"
    ],
    challenges: [
      "May miss opportunities that are hard to measure",
      "Could over-optimize short-term metrics",
      "Might paralyzed by analysis"
    ],
    advice: "Your analytical rigor is your strength, but don't let perfect measurement prevent good marketing. Sometimes the best opportunities require a leap of faith backed by directional data.",
    color: "#059669"
  },
  perfectionist: {
    title: "The Playbook Perfectionist",
    emoji: "📋",
    description: "You're the systematic strategist who builds repeatable, scalable demand generation machines through process and planning.",
    traits: [
      "Creates detailed processes and playbooks",
      "Focuses on systematic execution",
      "Values consistency and reliability",
      "Plans thoroughly before acting"
    ],
    strengths: [
      "Builds scalable, repeatable systems",
      "Ensures consistent quality execution",
      "Creates predictable results",
      "Excellent at team onboarding and training"
    ],
    challenges: [
      "May be slow to adapt to changes",
      "Could miss agile opportunities",
      "Might over-engineer simple solutions"
    ],
    advice: "Your systematic approach creates lasting value, but build flexibility into your processes. The best playbooks evolve with market conditions and new learnings.",
    color: "#DC2626"
  },
  closer: {
    title: "The Creative Closer",
    emoji: "🎨",
    description: "You're the brand storyteller who creates compelling experiences that not only generate demand but build lasting connections.",
    traits: [
      "Leads with creative and messaging",
      "Focuses on brand and experience",
      "Values storytelling and emotion",
      "Thinks about long-term brand building"
    ],
    strengths: [
      "Creates memorable, differentiated campaigns",
      "Builds strong brand equity",
      "Generates high engagement rates",
      "Develops emotional customer connections"
    ],
    challenges: [
      "May struggle with direct response optimization",
      "Could prioritize creativity over conversion",
      "Might find measurement challenging"
    ],
    advice: "Your creative vision drives breakthrough campaigns, but tie your stories to business outcomes. The most powerful marketing combines compelling narratives with measurable results.",
    color: "#7C3AED"
  }
};

const Results = ({ result, onRestart }) => {
  const resultData = resultTypes[result];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `I'm ${resultData.title}!`,
        text: `I just discovered I'm ${resultData.title} in demand generation marketing! ${resultData.description}`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const text = `I'm ${resultData.title}! ${resultData.description} Take the quiz: ${window.location.href}`;
      navigator.clipboard.writeText(text);
      alert('Result copied to clipboard!');
    }
  };

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.resultCard}>
        <div className={styles.resultHeader} style={{ backgroundColor: resultData.color }}>
          <div className={styles.emoji}>{resultData.emoji}</div>
          <h1 className={styles.resultTitle}>You're {resultData.title}!</h1>
        </div>
        
        <div className={styles.resultContent}>
          <p className={styles.description}>{resultData.description}</p>
          
          <div className={styles.section}>
            <h3>Your Core Traits</h3>
            <ul className={styles.traitsList}>
              {resultData.traits.map((trait, index) => (
                <li key={index}>{trait}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.section}>
            <h3>Your Superpowers</h3>
            <ul className={styles.strengthsList}>
              {resultData.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.section}>
            <h3>Growth Opportunities</h3>
            <ul className={styles.challengesList}>
              {resultData.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.advice}>
            <h3>Advice for {resultData.title}s</h3>
            <p>{resultData.advice}</p>
          </div>
        </div>
        
        <div className={styles.actions}>
          <button className={styles.shareButton} onClick={handleShare}>
            Share Your Result
          </button>
          <button className={styles.retakeButton} onClick={onRestart}>
            Take Quiz Again
          </button>
        </div>
      </div>
      
      <div className={styles.allTypes}>
        <h3>All Demand Gen Marketer Types</h3>
        <div className={styles.typeGrid}>
          {Object.entries(resultTypes).map(([key, type]) => (
            <div 
              key={key} 
              className={`${styles.typePreview} ${key === result ? styles.current : ''}`}
            >
              <div className={styles.typeEmoji}>{type.emoji}</div>
              <div className={styles.typeName}>{type.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;