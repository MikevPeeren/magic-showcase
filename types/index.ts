import { ChangeEventHandler } from "react";

export interface IInput {
  title: string;
  inputID: string;
  inputName: string;
  inputChangedFunction: ChangeEventHandler<HTMLInputElement>;
}

export interface ISubmitButton {
  email: string;
}
