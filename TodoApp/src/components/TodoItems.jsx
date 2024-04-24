import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
function TodoItems() {
  //Using useSelector Hook For fetch currVal from TodoStore
  const { currVal } = useSelector((store) => store.items);
  return (
    <div className="container my-3">
      {currVal.map((item) => (
        <TodoItem key={item.inputData} item={item} />
      ))}
    </div>
  );
}
export default TodoItems;
