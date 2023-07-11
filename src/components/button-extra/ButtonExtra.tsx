import './ButtonExtra.css';
import { IButton } from '../../types/';

function ButtonExtra({ text, typeButton, onClick }: IButton) {
  return (
    <button className='main__button-extra' type={typeButton} onClick={onClick}>{text}</button>
  )
}

export default ButtonExtra;