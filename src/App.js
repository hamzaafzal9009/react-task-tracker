import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "This is Title 1",
      time: "Feb 14th at 4:10am",
      remainder: true,
    },
    {
      id: 2,
      title: "This is Title 2",
      time: "Feb 14th at 4:11am",
      remainder: false,
    },
    {
      id: 3,
      title: "This is Title 3",
      time: "Feb 14th at 5:10am",
      remainder: true,
    },
    {
      id: 4,
      title: "This is Title 4",
      time: "Feb 14th at 4:11am",
      remainder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <div className="App container">
      <div className="mt-3 row justify-content-center">
        <div className="col-sm-7">
          <div className="card">
            <div className="card-header">
              <Header title="Task Tracker" />
            </div>
            <div className="card-body">
              
              <Tasks tasks={tasks} onDelete={deleteTask} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
