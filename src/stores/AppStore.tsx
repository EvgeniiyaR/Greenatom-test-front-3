import { makeAutoObservable } from "mobx";
import { ChangeEvent, FormEvent } from "react";
import { IAssignment } from "../types";

class AppStore {
  public task: IAssignment = {
    value: '',
    isComplete: false
    };
  public edit: string = '';
  public tasks: IAssignment[] = [];
  public isEmptyTask: boolean = false;
  public isEven: boolean = false;
  public isOdd: boolean = false;
  public isEdit: boolean = false;
  public editIndex: number | null = null;
  private body: HTMLElement;
  public oddColor: string = '';
  public evenColor: string = '';
  public mainColor: string = '';

  constructor() {
    makeAutoObservable(this);
    this.body = document.querySelector('body') as HTMLElement;
  }

  public generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  public changeColor = (mainColor: string) => {
    this.mainColor = mainColor;
    this.body.style.backgroundColor = `${mainColor}`;
    this.body.style.transition = 'background-color 1s';
  };

  public handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.name === 'task') {
      this.task = {
        value: target.value,
        isComplete: false
      };
    } else if (target.name === 'edit') {
      this.edit = target.value;
    }
  }

  public handleSubmitAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.task.value) {
      this.tasks.unshift(this.task);
      this.task = {
        value: '',
        isComplete: false
      };
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
    this.isEven = false;
    this.isOdd = false;
  }

  public handleClickSelectEvenElements = () => {
    if (!this.isOdd) {
      if (this.isEven) {
        this.isEven = false;
      } else {
        this.isEven = true;
        this.evenColor = this.generateColor();
        while (this.mainColor === this.evenColor) {
          this.evenColor = this.generateColor();
        }
      }
    }
  }

  public handleClickSelectOddElements = () => {
    if (!this.isEven) {
      if (this.isOdd) {
        this.isOdd = false;
      } else {
        this.isOdd = true;
        this.oddColor = this.generateColor();
        while (this.mainColor === this.oddColor) {
          this.oddColor = this.generateColor();
        }
      }
    }
  }

  public handleClickDeleteFirstElement = () => {
    this.tasks.shift();
  }

  public handleClickDeleteLastElement = () => {
    this.tasks.pop();
  }

  public handleClickComplete = (index: number) => {
    this.tasks[index].isComplete = true;
  }

  public handleClickDelete = (index: number) => {
    this.tasks.splice(index, 1);
  }

  public handleClickEdit = (index: number) => {
    this.isEdit = true;
    this.editIndex = index;
    this.edit = this.tasks[index].value;
  }

  public handleClickEditSave = (index: number) => {
    this.isEdit = false;
    this.tasks[index].value = this.edit;
  }

}

export default new AppStore;