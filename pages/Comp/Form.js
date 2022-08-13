import { useState , useEffect } from "react";
import styles from "../../styles/Form.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";

function Form() {
  const [formData, setFormData] = useState({
    taskType: "",
    task: "",
  });

  const [task, setTask] = useState(tasks);

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    const newTodos = [...task];
    task.push(newTodos);
    setTask(task);
  };

  return (
    <div
      className={`w-100 mx-auto d-flex justify-content-center align-items-center ${styles.form} `}
    >
      <div className="text-center">
        <p className="fs-4">Add New Task</p>
        <div
          className={`mx-auto d-flex justify-content-center align-items-center ${styles.iconTask}`}
        >
          <AssignmentIcon width="50px" />
        </div>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className={`form-control shadow-none border-0 ${styles.input}`}
              placeholder="Task Type"
              value={formData.taskType}
              onChange={handleOnChange}
              name="taskType"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className={`form-control shadow-none border-0 ${styles.input}`}
              placeholder="Task"
              value={formData.task}
              onChange={handleOnChange}
              name="task"
            />
          </div>
          <button
            type="submit"
            className={`border-0 p-2 rounded-2 w-100 ${styles.btnAdd}`}
          >
            Add
          </button>
        </form>

        {tasks.map(({ id, taskType, task }) => (
          <div key={id}>
            <p>{taskType} : {task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;

const tasks = [
  { id: "1", taskType: "product", task: "task 1" },
  { id: "2", taskType: "product", task: "task 2" },
  { id: "3", taskType: "product", task: "task 3" },
  { id: "4", taskType: "product", task: "task 4" },
];
