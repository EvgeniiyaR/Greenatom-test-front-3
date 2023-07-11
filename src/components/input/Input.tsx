import './Input.css';
import { IInput } from '../../types/';
import { observer } from 'mobx-react-lite';

const Input = observer(({ isEmpty, value, label, onChange, name, type }: IInput) => {
  return (
    <label className="main__label">
      <input className={`main__input ${isEmpty ? 'shake' : ''}`} value={value || ''} onChange={onChange} name={name} type={type} placeholder={label} />
    </label>
  )
});

export default Input;