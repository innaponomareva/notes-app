import { useReducer } from "react";
import { dataReducer } from "./dataReducer";
import { DataContext } from "./dataContext";
import { DataActionEnum } from "./types";
import { INote } from "../models/INote";
import { notes } from "./../lib/notes";

export const DataState = ({ children }) => {
  const initialState = {
    data: [...notes],
  };
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const { data } = state;

  // Actions:
  const saveNote = (note: INote) =>
    dispatch({ type: DataActionEnum.SAVE_NOTE, payload: note });
  const deleteNote = (id: string) =>
    dispatch({ type: DataActionEnum.DELETE_NOTE, payload: id });

  return (
    <DataContext.Provider value={{ data, saveNote, deleteNote }}>
      {children}
    </DataContext.Provider>
  );
};
