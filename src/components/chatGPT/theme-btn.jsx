import { useEffect, useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Load saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button onClick={toggleTheme} className="transition-all  duration-300 bg-white w-fit p-1 mr-2 rounded-full shadow-md dark:hover:outline-solid hover:outline-gray-500 hover:outline-solid dark:hover:outline-yellow-400 hover:shadow-lg">
      <FaLightbulb size={18}
        className={` transition-all w-full duration-300 cursor-pointer
          ${theme === 'light' ? 'text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]' : 'text-gray-600'}`}
      />
    </button>
  );
}
