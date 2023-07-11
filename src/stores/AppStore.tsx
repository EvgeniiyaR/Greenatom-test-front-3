import { makeAutoObservable } from "mobx";
import { ChangeEvent, FormEvent } from "react";

class AppStore {
  public task: string = '';
  public tasks: string[] = [];
  public isEmptyTask: boolean = false;
  private body: HTMLElement;

  constructor() {
    makeAutoObservable(this);
    this.body = document.querySelector('body') as HTMLElement;
  }

  generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  changeColor = () => {
    this.body.style.backgroundColor = `${this.generateColor()}`;
    this.body.style.transition = 'background-color 1s';
  };

  public handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    this.task = target.value;
  }

  public handleSubmitAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.task) {
      this.tasks.push(this.task);
      this.task = '';
    } else {
      const timer = setInterval(() => {
        this.isEmptyTask = true;
      }, 500)
      setTimeout(() => {
        clearInterval(timer);
        this.isEmptyTask = false;
      }, 1500);
    }
  }

  public handleClickDeleteAll = () => {
    this.tasks = [];
  }

}

export default new AppStore;