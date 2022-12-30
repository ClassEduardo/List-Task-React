import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tarefas.css';

export default function Tarefas({ tasks, handleEdit, handleDelete }) {
  


  return(
      <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <span>
            <FaEdit className="edit" onClick={() => handleEdit(index)} />
            <FaWindowClose className="delete" onClick={() => handleDelete(index)} />
          </span>
        </li>
      ))}
    </ul>
  )
}