import React from "react";
import TodoListStats from "./TodoListStats";
import TodoListFiters from "./TodoListFilters";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../recoil/todo";

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);// filter된 state로 보이게함.
    
    return (
        <>
          <TodoListStats /> 
          <TodoListFiters />
          <TodoItemCreator />

          {todoList.map((todoItem) => (
              <TodoItem key={todoItem.id} item={todoItem} />
          ))}
        </>
    )
}


export default TodoList;