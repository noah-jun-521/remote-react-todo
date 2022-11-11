import React from 'react';

import Check from './Check';

type Props = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
};

const InputBox = ({ value, onChange, onSubmit }: Props): React.ReactElement => (
  <div className="bg-white dark:bg-veryDarkGrayishBlue flex content-center align-center rounded-md w-full">
    <form
      className="flex flex-row w-full px-5 py-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Check checked={false} />
      <input
        className="grow outline-0 bg-transparent"
        type="text"
        placeholder="Create a new todo..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  </div>
);

export default InputBox;
