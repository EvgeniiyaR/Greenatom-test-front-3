import './Task.css';
import { ITask } from '../../types/';
import AppStore from '../../stores/AppStore';
import { observer } from 'mobx-react-lite';

const Task = observer(({ text, complete, id, oddColor, evenColor }: ITask) => {
  const { isEven, isOdd, handleClickComplete, handleClickDelete, handleClickEdit, isEdit, edit, editIndex, handleChange, handleClickEditSave } = AppStore;

  return (
    <>
      {(editIndex === id && isEdit) ?
      <div className='main__task main__task_edit'>
        <input className='main__input-edit' type="text" value={edit || ''} name="edit" onChange={handleChange}/>
        <button className='main__action' type="button" onClick={() => handleClickEditSave(id)}>🆗</button>
      </div>
      :
      <div className='main__task' style={{backgroundColor: `${(isOdd || isEven) ? (((id % 2 === 0 && isOdd && !isEven) && oddColor) || ((id % 2 !== 0 && isEven && !isOdd) && evenColor)) : ''}`}}>
        <p className={`main__title ${complete ? 'main__title_active' : ''}`}>{text}</p>
        <div className='main__actions'>
          {!complete && <button className='main__action' type="button" onClick={() => handleClickEdit(id)}>✐</button>}
          <button className={`main__action ${complete ? 'main__action_active' : ''}`} type="button" onClick={() => handleClickComplete(id)}>✔</button>
          <button className='main__action' type="button" onClick={() => handleClickDelete(id)}>❌</button>
        </div>
      </div>
      }
    </>
  )
});

export default Task;