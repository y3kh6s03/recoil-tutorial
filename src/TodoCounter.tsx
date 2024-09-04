import { useRecoilValue } from "recoil"
import { todoLengthState } from "./state/todo"

const TodoCounter = () => {
  const todosLength = useRecoilValue(todoLengthState);
  return (
    <>
      <div>TodoCounter</div>
      <h1>Todo: {todosLength}件</h1>
    </>
  )
}

export default TodoCounter