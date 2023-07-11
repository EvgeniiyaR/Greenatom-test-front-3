import { ChangeEvent } from "react";

export interface IButton {
  typeButton: 'button' | 'submit';
  text: string;
  onClick?: () => void;
}

export interface IInput {
  type: 'text';
  value: string;
  name: string;
  label: string;
  isEmpty: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ITask {
  text: string;
}
