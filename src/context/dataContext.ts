import { createContext } from "react";
import { INote } from "../models/INote";

export interface DataContextInterface {
  data: INote[];
  saveNote: (note: INote) => void;
  deleteNote: (id: string) => void;
}

export const DataContext = createContext<DataContextInterface | null>(null);
