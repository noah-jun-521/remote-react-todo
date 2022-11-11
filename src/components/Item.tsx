import React, { useState } from 'react';

import { TodoItem } from '../types';
import Check from './Check';

type Props = {
  completed: boolean;
  todoItem: TodoItem;
  onComplete: () => void;
};

const Item = ({
  completed,
  todoItem,
  onComplete,
}: Props): React.ReactElement => {
  const [checked, setChecked] = useState(completed);

  const onClick = () => {
    onComplete();
    setChecked((prev) => !prev);
  };

  return (
    <div className="flex flex-row justify-between px-5 py-3 border-b-2 group">
      <div className="flex flex-row items-center">
        <Check checked={checked} setChecked={onClick} />
        <span
          className={`${
            checked
              ? "text-lightGrayishBlue dark:text-darkGrayishBlue"
              : "text-veryDarkGrayishBlueDark dark:text-lightGrayishBlue"
          } ${checked ? "line-through" : ""}`}
        >
          {todoItem.title}
        </span>
      </div>
    </div>
  );
};

export default Item;
