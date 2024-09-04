import { useRecoilState } from 'recoil'
import './App.css'
import { todosState } from './state/todo'
import { FC } from 'react'
import { handleTodoCompletion, handleTodoEdit } from './utils/utils'

export const App: FC = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  return (
    <div>
      {
        todos.map((todo) => {
          return (
            <div key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => handleTodoCompletion(todo.id, setTodos)} />
              <input
                type='text'
                value={todo.text}
                onChange={(e) => handleTodoEdit(e, todo.id, setTodos)}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default App
