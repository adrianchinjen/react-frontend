import { useEffect, useState } from 'react';

export const Home = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 dark:bg-slate-700 dark:text-red-600"
      >
        Click Me
      </button>
      <p>This is home</p>
    </>
  );
};
