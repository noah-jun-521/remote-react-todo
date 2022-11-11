import React from 'react';

interface ContextInterface {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = React.createContext<ContextInterface | null>(null);

export const ThemeProvider = ({ initialTheme = "light", children }) => {
  const [theme, setTheme] = React.useState(initialTheme);

  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  React.useEffect(() => {
    rawSetTheme(initialTheme);
  }, []);

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
