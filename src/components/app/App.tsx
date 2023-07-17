import { useEffect } from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import Input from '../input/Input';
import Button from '../button/Button';
import ButtonExtra from '../button-extra/ButtonExtra';
import AppStore from '../../stores/AppStore';
import Task from '../task/Task';

const App = observer(() => {
  const {
    changeColor,
    generateColor,
    handleChange,
    task,
    isEmptyTask,
    handleSubmitAdd,
    handleClickDeleteAll,
    tasks,
    handleClickSelectEvenElements,
    handleClickSelectOddElements,
    handleClickDeleteFirstElement,
    handleClickDeleteLastElement,
    oddColor,
    evenColor
  } = AppStore;

  useEffect(() => {
    const mainColor = generateColor();
    changeColor(mainColor);
  }, []);

  return (
    <main className='main'>
      <form name="form" className='main__prime' onSubmit={handleSubmitAdd}>
        <Input label='Задача' name='task' type='text' onChange={handleChange} value={task.value} isEmpty={isEmptyTask} />
        <Button typeButton='submit' text='Добавить' />
      </form>
      <div className='main__extra'>
        <ButtonExtra typeButton='button' text='Очистить' onClick={handleClickDeleteAll}/>
        <ButtonExtra typeButton='button' text='Выделить четные элементы' onClick={handleClickSelectEvenElements}/>
        <ButtonExtra typeButton='button' text='Выделить нечетные элементы' onClick={handleClickSelectOddElements}/>
        <ButtonExtra typeButton='button' text='Удалить последний элемент' onClick={handleClickDeleteLastElement}/>
        <ButtonExtra typeButton='button' text='Удалить первый элемент' onClick={handleClickDeleteFirstElement}/>
      </div>
      <ul className='main__list'>
        {tasks.map((item, index) => (
          <li key={index}>
            <Task text={item.value} complete={item.isComplete} id={index} oddColor={oddColor} evenColor={evenColor}/>
          </li>
        ))}
      </ul>
    </main>
  );
});

export default App;
