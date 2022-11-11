import CheckMark from '/public/images/icon-check.svg';
import React from 'react';

type Props = {
  checked: boolean;
  setChecked?: () => void;
};

const Check = ({ checked, setChecked }: Props): React.ReactElement => (
  <div
    className="w-9 h-9 border-2 rounded-full flex justify-center items-center mr-4 cursor-pointer"
    style={{
      backgroundImage:
        checked &&
        "linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
    }}
    onClick={setChecked}
  >
    {checked ? <img src={CheckMark} className="w-4/5" alt="check" /> : null}
  </div>
);

export default Check;
