import { FC } from "react"
import { useRecoilState } from "recoil";
import { todosState } from "./state/todo";
import { handleTodoSubmit } from "./utils/utils";

const Add: FC = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  return (
    <form onSubmit={(e) => handleTodoSubmit(e, todos, setTodos)}>
      <input type="text" name="todo" />
      <button>add</button>
    </form>
  )
}

export default Add