import { useRef } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/tododatastore";

function AddTodo() {
  // Using useRef to get currentValue of inputText and inputDate and less repainting
  const inputElement = useRef();
  const dateElement = useRef();
  // using dispatch Hook for dispatch value to todoStore method
  const dispatch = useDispatch();
  const handleAdd = () => {
    const inputData = inputElement.current.value;
    const dateData = dateElement.current.value;
    dispatch(todoActions.addItem({ inputData, dateData }));
    inputElement.current.value = "";
    dateElement.current.value = "";
  };
  return (
    <>
      <div className="container my-3 todocontainer">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter Your Todo Here"
              ref={inputElement}
            ></input>
          </div>
          <div className="col-4">
            <input className="mx-3" type="date" ref={dateElement}></input>
          </div>
          <div className="col-4">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
