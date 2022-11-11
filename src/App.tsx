import './index.scss';

import React, { useState } from 'react';

import Background from './components/Background';
import InputBox from './components/InputBox';
import { ThemeProvider } from './components/ThemeContext';
import Toggle from './components/ThemeToggle';
import TodoList from './components/TodoList';
import { mockData } from './mockData';
import { Filter, TodoItem } from './types';

interface Props {
  list?: TodoItem[];
}

const App = ({ list }: Props) => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoItem[]>(list);
  const [filter, setFilter] = useState<Filter>("all");

  const onSubmit = () => {
    setTodoList((prev) => [
      ...prev,
      { title: todo, completed: false, id: todoList.length + 1 },
    ]);
    setTodo("");
  };

  const onComplete = (id) => {
    const temp = [...todoList];
    temp.forEach((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });
    setTodoList(temp);
  };

  const filterFunc = () => {
    switch (filter) {
      case "active":
        return todoList.filter((item) => !item.completed);
      case "completed":
        return todoList.filter((item) => item.completed);
      case "all":
      default:
        return todoList;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col">
        <div className="flex justify-between w-full">
          <p className="font-normal text-white text-3xl">T O D O</p>
          <Toggle />
        </div>
        <div className="flex w-full mb-10">
          <InputBox value={todo} onChange={setTodo} onSubmit={onSubmit} />
        </div>
        <TodoList
          list={filterFunc()}
          onComplete={onComplete}
          filter={filter}
          setFilter={setFilter}
          leftItemsCount={todoList.filter((item) => !item.completed).length}
        />
      </div>
    </div>
  );
};

const Wrapper = ({ list = mockData }: Props) => {
  return (
    <ThemeProvider>
      <Background>
        <App list={list} />
      </Background>
    </ThemeProvider>
  );
};

export default Wrapper;
