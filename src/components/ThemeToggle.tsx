import Moon from '/public/images/icon-moon.svg';
import Sun from '/public/images/icon-sun.svg';
import React from 'react';

import { ThemeContext } from './ThemeContext';

const Toggle = (): React.ReactElement => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div
      className="transition duration-500 ease-in-out rounded-full p-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <img
        src={theme === "dark" ? Sun : Moon}
        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        alt="toggle"
      />
    </div>
  );
};

export default Toggle;
