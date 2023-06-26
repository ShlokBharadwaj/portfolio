import React, { useEffect, useState } from 'react';

const Welcome = () => {
  const [welcomeText, setWelcomeText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const welcomeText = `Welcome to my Terminal Portfolio!

Type 'help' to see a list of available commands.
    `;

    setWelcomeText(welcomeText);
  }, []);

  useEffect(() => {
    let currentIndex = 0;

    const typingEffect = () => {
      if (currentIndex < welcomeText.length) {
        const nextChar = welcomeText[currentIndex];
        setDisplayedText(prevText => prevText + nextChar);
        currentIndex++;
        setTimeout(typingEffect, 20); // Delay between each character
      }
    };

    if (currentIndex === 0) {
      typingEffect();
    }
  }, [welcomeText]);

  return (
    <div className="welcome-container">
      <div className="terminal-body">
        <pre className="terminal-text">{displayedText}</pre>
      </div>
    </div>
  );
};

export default Welcome;
