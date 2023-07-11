import './Task.css';
import { ITask } from '../../types/';

function Task({ text }: ITask) {
  return (
    <div className='main__task'>{text}</div>
  )
}

export default Task;