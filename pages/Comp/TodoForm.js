import { useState, useEffect, useRef } from "react";
import styles from "../../styles/Form.module.css";
import AddIcon from '@mui/icons-material/Add';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <div
          className={`w-100 mx-auto d-flex justify-content-center align-items-center ${styles.form} `}
        >
          <div className="w-50">
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className={`form-control shadow-none border-0 ${styles.input}`}
          /><br/>
          <button onClick={handleSubmit} className={`border-0 p-2 rounded-2 w-100 ${styles.btnAdd}`}>
            Update
          </button>
          </div>
        </div>
      ) : (
        <div
          className={`w-100 mx-auto d-flex justify-content-center align-items-center ${styles.form} `}
        >
        <div className="w-50">
          <input
            placeholder="Todo"
            value={input}
            onChange={handleChange}
            name="text"
            className={`form-control shadow-none border-0 ${styles.input}`}
            ref={inputRef}
          /><br/>
          <button onClick={handleSubmit} className={`border-0 p-2 rounded-2 w-100 ${styles.btnAdd}`}>
            <AddIcon/> Add todo
          </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
