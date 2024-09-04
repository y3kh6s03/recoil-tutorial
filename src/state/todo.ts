import { atom, selector } from "recoil";
import { Todo } from "../types";

export const todosState = atom<Todo[]>({
  key: 'todosState',
  default: [
    { id: 1, text: 'foo', isDone: false },
    { id: 2, text: 'bar', isDone: true }
  ],
});

export const todoLengthState = selector({
  key: 'todoLengthState',
  get: ({ get }) => {
    const todos = get(todosState);
    const todosLength = todos.length;
    return todosLength;
  }
})