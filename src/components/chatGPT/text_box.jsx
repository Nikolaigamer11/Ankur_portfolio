import React, { useState, useEffect } from 'react';

function Text_box({ text = "Default text" }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust this value to control typing speed (in ms)

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text]);

  return (
    <div className="text-white dark:bg-[#414141] bg-[#ffffff60] p-4 text-wrap w-fit h-fit rounded-2xl">
      <p>{displayedText}</p>
    </div>
  );
}

export default Text_box;