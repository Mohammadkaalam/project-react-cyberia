import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'}`}
      onClick={toggleDarkMode}
      aria-label="تغییر حالت شب/روشن"
    >
      {darkMode ? '🌞 روشن' : '🌙 تاریک'}
    </button>
  );
}
