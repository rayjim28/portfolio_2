import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === 'dark';
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Dark mode — switch to light' : 'Light mode — switch to dark'}
      onClick={() => setTheme(dark ? 'light' : 'dark')}
    >
      {dark ? <FiMoon size={18} aria-hidden="true" /> : <FiSun size={18} aria-hidden="true" />}
    </button>
  );
}
