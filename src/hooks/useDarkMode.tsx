import { useEffect, useState } from 'react';
import { lightTheme, darkTheme, Theme } from '../styles/theme';

export const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const setMode = (mode: Theme) => {
    mode === lightTheme ? window.localStorage.setItem('theme', 'light') : window.localStorage.setItem('theme', 'dark');
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === lightTheme ? setMode(darkTheme) : setMode(lightTheme);
  };

  useEffect(() => {
    // 사용자의 시스템 환경에서 다크 모드를 지원하는지 확인
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme === 'dark' || (prefersDarkMode && localTheme !== 'light')) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, []);

  return { theme, toggleTheme };
};
