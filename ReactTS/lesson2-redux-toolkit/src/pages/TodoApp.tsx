import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../tools/store"
import { add } from "../tools/slices/todoSlice";
import type { todoType } from "../types/todos.type";
import Swal from "sweetalert2";

const TodoApp = () => {
  const todos = useAppSelector(p => p.todo);
  const textRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const todoHandleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (textRef.current?.value == "") {
      Swal.fire({
        title: "Please fill input",
        icon: "warning"
      });
    } else {
      dispatch(add(textRef.current?.value))
      textRef.current.value = "";
    }
  }

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className='my-5'>Todo App</h1>
        <div className='col-6'>
          <form onSubmit={todoHandleSubmit}>
            <div className="input-group">
              <input ref={textRef} type="text" className="form-control" />
              <button className="btn btn-warning">Add new</button>
            </div>
          </form>
        </div>

        <div className="col-6 mt-3">
          <ul className="list-group">
            {todos.map((item: todoType, index: number) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">{item.text} <button className='btn btn-danger'>X</button></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoApp