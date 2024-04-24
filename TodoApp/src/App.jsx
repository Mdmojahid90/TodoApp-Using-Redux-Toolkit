import Heading from "./components/Heading";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useSelector } from "react-redux";
import EmptyTodo from "./components/EmptyTodo";

function App() {
  //  fetching todoStore data
  const { currVal } = useSelector((store) => store.items);
  return (
    <center>
      <Heading />
      <AddTodo />
      {/*Checking TodoStore is Empty or Not and  It will display When todo will be empty  */}
      {currVal.length == 0 && <EmptyTodo />}
      <TodoItems />
    </center>
  );
}

export default App;
