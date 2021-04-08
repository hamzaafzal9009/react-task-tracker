import PropTypes from "prop-types";
import { FcFullTrash } from 'react-icons/fc'

const Task = ({ task, onDelete }) => {
  return (
    <>
      <li className="list-group-item " style={ (task.id % 2 === 0 ? bgColor:noBgColor) }>
          <span className="float-left" >
            <p style={{ marginBottom: '0px' }}>{task.title}</p>
            <sub>{ task.time }</sub>
          </span>
          <span className="float-right" style= {{ cursor: 'pointer', paddingTop: '10px', color: 'red' }}><FcFullTrash onClick={()=>onDelete(task.id)} /></span></li>
    </>
  );
};

Task.propType = {
  task: PropTypes.object.isRequired,
};

const bgColor = {
    backgroundColor: '#ffe6e6'
}
const noBgColor = {}

export default Task;
