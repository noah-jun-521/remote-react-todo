import React from 'react';

import { Filter, TodoItem } from '../types';
import Item from './Item';

interface TodoActionsProps
  extends Pick<TodoListProps, "filter" | "setFilter" | "leftItemsCount"> {}

const TodoActions = ({
  filter,
  setFilter,
  leftItemsCount,
}: TodoActionsProps) => {
  const onClick = (newFilter) => setFilter(newFilter);

  const activeStyle = "text-brightBlue cursor-pointer";
  const inactiveStyle =
    "text-darkGrayishBlue hover:text-black dark:hover:text-white cursor-pointer";

  return (
    <div className="flex flex-col justify-between px-6 py-4 bg-white dark:bg-veryDarkGrayishBlue rounded-b-md">
      <div className="grid grid-cols-3">
        <div
          onClick={() => onClick("all")}
          className={filter === "all" ? activeStyle : inactiveStyle}
        >
          All
        </div>
        <div
          onClick={() => onClick("active")}
          className={filter === "active" ? activeStyle : inactiveStyle}
        >
          Active
        </div>
        <div
          onClick={() => onClick("completed")}
          className={filter === "completed" ? activeStyle : inactiveStyle}
        >
          Completed
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        {leftItemsCount} items left
      </div>
    </div>
  );
};

interface TodoListProps {
  list: TodoItem[];
  onComplete: (id: number) => void;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  leftItemsCount: number;
}

const TodoList = ({
  list,
  onComplete,
  filter,
  setFilter,
  leftItemsCount,
}: TodoListProps) => (
  <>
    <div className="bg-white dark:bg-veryDarkGrayishBlue rounded-md">
      {list.map((item) => (
        <Item
          key={item.id}
          completed={item.completed}
          todoItem={item}
          onComplete={() => onComplete(item.id)}
        />
      ))}
    </div>
    <TodoActions
      filter={filter}
      setFilter={setFilter}
      leftItemsCount={leftItemsCount}
    />
  </>
);

export default TodoList;
