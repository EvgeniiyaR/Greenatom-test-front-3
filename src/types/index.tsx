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
  complete: boolean;
  text: string;
  id: number;
  oddColor: string;
  evenColor: string;
}

export interface IAssignment {
  value: string;
  isComplete: boolean;
}
