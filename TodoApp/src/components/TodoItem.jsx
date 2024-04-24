import { useDispatch } from "react-redux";
import { todoActions } from "../store/tododatastore";

function TodoItem({ item }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="row my-3">
        <div className="col-4">{item.inputData}</div>
        <div className="col-4">{item.dateData}</div>
        <div className="col-4">
          <button
            type="submit"
            className="btn btn-danger"
            onClick={() =>
              dispatch(todoActions.deleteItem({ inputData: item.inputData }))
            }
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
