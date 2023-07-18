import React, { useEffect, useState } from 'react';

const Welcome = () => {
  const [welcomeText, setWelcomeText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const welcomeText = `Welcome to <a href="https://www.linkedin.com/in/shlokbharadwaj/" class="text-green-400" target="_blank">Shlok Bharadwaj</a>'s Terminal Portfolio!\nType '<span class="text-green-400">help</span>' to see a list of available commands.`;

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
        <pre className="terminal-text whitespace-pre-line" dangerouslySetInnerHTML={{ __html: displayedText }} />
      </div>
    </div>
  );
};

export default Welcome;
