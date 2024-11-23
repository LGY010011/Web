import React from "react";
import { useTodos } from "../context/TodoContext";
import ListItem from "./ListItem";

const TodoList = () => {
  const { todos, deleteTodo, updateTodo } = useTodos(); // 컨텍스트에서 데이터 및 함수 가져오기

  // 안전하게 데이터를 처리
  const todoItems = Array.isArray(todos[0]) ? todos[0] : [];

  if (!todoItems || todoItems.length === 0) {
    return <div>할 일이 없습니다. 새 할 일을 추가하세요!</div>;
  }

  

  console.log(todos)

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todoItems.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onEdit={updateTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
