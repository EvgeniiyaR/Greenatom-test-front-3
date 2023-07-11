import './Button.css';
import { IButton } from '../../types/';

function Button({ text, typeButton }: IButton) {
  return (
    <button className='main__button' type={typeButton}>{text}</button>
  )
}

export default Button;