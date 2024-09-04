import { ChangeEvent, FormEvent } from "react";
import { SetterOrUpdater } from "recoil";
import { Todo } from "../types";

export const handleTodoEdit = (e: ChangeEvent<HTMLInputElement>, id: number, setTodos: SetterOrUpdater<Todo[]>) => {
  console.log('handoel');

  setTodos((prevTodos) => {
    const newTodos = [...prevTodos];
    return newTodos.map((newTodo) => {
      if (newTodo.id === id) {
        return { ...newTodo, text: e.target.value }
      }
      return newTodo
    })
  })
}

export const handleTodoCompletion = (id: number, setTodos: SetterOrUpdater<Todo[]>) => {
  console.log('handleTodoCompletion render');

  setTodos((prevTodos) => {
    const newTodos = [...prevTodos];
    return newTodos.map((newTodo) => {
      if (newTodo.id === id) {
        return { ...newTodo, isDone: !newTodo.isDone }
      }
      return newTodo;
    })
  })
}

export const handleTodoSubmit = (e: FormEvent<HTMLFormElement>, todos: Todo[], setTodos: SetterOrUpdater<Todo[]>) => {
  e.preventDefault();
  const todo = e.currentTarget.todo.value;
  setTodos((prevTodos) => {
    const newTodo = { id: todos.length + 1, text: todo, isDone: false }
    const newTodos = [...prevTodos, newTodo];
    return newTodos;
  })
  e.currentTarget.reset();
}