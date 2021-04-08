import PropTypes from "prop-types";

import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item ">
            {tasks.length < 1 && (
              <p style={{ textAlign: "center" }}>No Task Added</p>
            )}
          </li>
          {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} />
          ))}
        </ul>
      </div>
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Tasks;
