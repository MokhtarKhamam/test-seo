"use client";
import { ConfigProvider, theme } from 'antd';
import { useEffect, useState } from 'react';
import { ThemeMode, ThemeModeContext } from './ThemeModeContext';

export const LOCAL_STORAGE_KEY = 'themeMode';

const AntdConfigProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<ThemeMode | null>(null); // Start as null to indicate loading
  const value = {
    mode,
    setMode,
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeMode;
    setMode(savedTheme || ThemeMode.Light);
  }, []);

  useEffect(() => {
    if (mode) {
      console.log('mode', mode);
      if (mode === ThemeMode.Dark) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  }, [mode]);

  const THEME = {
    algorithm: mode === ThemeMode.Dark ? theme.darkAlgorithm : undefined,
  };

  // Prevent rendering until mode is determined dfg
  if (mode === null) {
    return null; // Or a loading spinner
  }

  return (
    <ThemeModeContext.Provider value={value}>
      <ConfigProvider theme={THEME}>{children}</ConfigProvider>
    </ThemeModeContext.Provider>
  );
};

type Props = {
  children: React.ReactNode;
};

export default AntdConfigProvider;