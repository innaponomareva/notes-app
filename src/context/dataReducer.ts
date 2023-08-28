import {
  DataActionEnum,
  DataActions,
  DeleteNoteAction,
  IState,
  SaveNoteAction,
} from "./types";

const handlers: any = {
  [DataActionEnum.DELETE_NOTE]: (state: IState, action: DeleteNoteAction) => {
    const data = [...state.data];
    const index = data.findIndex((obj) => obj.id === action.payload);
    data.splice(index, 1);
    return { ...state, data: data };
  },
  [DataActionEnum.SAVE_NOTE]: (state: IState, action: SaveNoteAction) => {
    const data = [...state.data];
    const index = data.findIndex((item) => item.id === action.payload.id);
    index >= 0 && data.splice(index, 1);
    data.unshift({ ...action.payload });
    return { ...state, data: data };
  },
  [DataActionEnum.DEFAULT]: (state: IState) => state,
};

export const dataReducer = (state: IState, action: DataActions) => {
  const handler = handlers[action.type] || handlers[DataActionEnum.DEFAULT];
  return handler(state, action);
};
