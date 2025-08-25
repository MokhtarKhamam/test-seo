"use client";
import { Space, Switch, Typography } from "antd";
import { useContext } from "react";
import { LOCAL_STORAGE_KEY } from "./AntdConfigProvider";
import { ThemeMode, ThemeModeContext } from "./ThemeModeContext";

const { Text } = Typography;

export const ModeSwitch = () => {
  const { mode, setMode } = useContext(ThemeModeContext);

  if (mode === null) return null; // Prevent rendering until mode is determined

  const text =
    mode === ThemeMode.Dark ? "Switch to Light Mode" : "Switch to Dark Mode";

  return (
    <Space align="baseline">
      <Text strong>{text}</Text>
      <Switch
        checked={mode === ThemeMode.Dark}
        onChange={(value) => {
          const themeMode = value ? ThemeMode.Dark : ThemeMode.Light;
          localStorage.setItem(LOCAL_STORAGE_KEY, themeMode);
          setMode(themeMode);
        }}
      />
    </Space>
  );
};