import React from 'react';

const Background = ({ children }): React.ReactElement => (
  <div className="w-full h-screen bg-veryLightGray dark:bg-veryDarkBlue bg-contain dark:bg-darkMobile dark:sm:bg-darkDesktop bg-lightMobile sm:bg-lightDesktop">
    {children}
  </div>
);

export default Background;
