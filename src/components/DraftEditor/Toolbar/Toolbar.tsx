import React, { useContext } from "react";
import { RichUtils, EditorState } from "draft-js";
import { tools } from "../../../lib/tools";
import CustomButton from "../../CustomButton/CustomButton";
import {
  DataContext,
  DataContextInterface,
} from "../../../context/dataContext";
import { INote } from "../../../models/INote";

interface ToolbarProps {
  noteState: INote;
  editorState: EditorState;
  setEditorState: (editorState: EditorState) => void;
  setCurrNote: (noteState: INote) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  noteState,
  editorState,
  setEditorState,
  setCurrNote,
}) => {
  const { saveNote } = useContext(DataContext) as DataContextInterface;

  const applyStyle = (
    event: React.MouseEvent,
    style: string,
    method: string
  ) => {
    event.preventDefault();
    method === "block"
      ? setEditorState(RichUtils.toggleBlockType(editorState, style))
      : setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const isActive = (style: string, method: string) => {
    if (method === "block") {
      const selection = editorState.getSelection();
      const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
      return blockType === style;
    } else {
      const currentStyle = editorState.getCurrentInlineStyle();
      return currentStyle.has(style);
    }
  };

  const startNewNoteHandler = () => {
    setCurrNote(null);
    setEditorState(EditorState.createEmpty());
  };

  const saveNoteHandler = (noteState: INote) => {
    console.log("noteState", noteState);
    saveNote({ ...noteState, timestamp: new Date().toUTCString() });
    setCurrNote(noteState);
  };

  return (
    <div className="toolbar-grid">
      {tools.map((item, index) => (
        <CustomButton
          key={`${item.label}-${index}`}
          className="tools-btn"
          style={{
            color: isActive(item.style, item.method)
              ? "rgba(57, 57, 57, 1)"
              : "rgba(57, 57, 57, 0.3)",
          }}
          icon={item.icon}
          label={item.label}
          title={item.label}
          onClickHandler={(event) => applyStyle(event, item.style, item.method)}
          onMouseDownHandler={(event) => event.preventDefault()}
        />
      ))}
      <div className="label-btn-container">
        <CustomButton
          className="tools-btn label-btn"
          label="Save note"
          onClickHandler={() => saveNoteHandler(noteState)}
        />

        <CustomButton
          className="tools-btn label-btn"
          label="New note"
          onClickHandler={() => startNewNoteHandler()}
        />
      </div>
    </div>
  );
};

export default Toolbar;
