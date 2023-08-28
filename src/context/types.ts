import { INote } from "../models/INote";

export enum DataActionEnum {
  SAVE_NOTE = "SAVE_NOTE",
  DELETE_NOTE = "DELETE_NOTE",
  DEFAULT = "DEFAULT",
}

export interface SaveNoteAction {
  type: DataActionEnum.SAVE_NOTE;
  payload: INote;
}

export interface DeleteNoteAction {
  type: DataActionEnum.DELETE_NOTE;
  payload: string;
}

export type DataActions = DeleteNoteAction | SaveNoteAction;

export interface IState {
  data: INote[] | [];
}
