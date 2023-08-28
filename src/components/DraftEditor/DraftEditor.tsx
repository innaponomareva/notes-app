import React, { useEffect, useRef, useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
import Toolbar from "./Toolbar/Toolbar";
import "./DraftEditor.css";
import { inlineStyleMap } from "../../lib/inlineStyleMap";
import { blockStyleFn } from "../../lib/blockStyleFn";
import { INote } from "../../models/INote";

interface DraftEditorProps {
  currNote: INote | null;
  setCurrNote: (note: INote) => void;
}

const DraftEditor: React.FC<DraftEditorProps> = ({ currNote, setCurrNote }) => {
  const [noteState, setNoteState] = useState(currNote);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (currNote) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw({ blocks: currNote.blocks, entityMap: {} })
        )
      );
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [currNote, setEditorState]);

  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    setNoteState({
      id: currNote ? currNote.id : Date.now().toString(),
      timestamp: currNote ? currNote.timestamp : "",
      blocks: rawContent.blocks,
    });
  }, [editorState, currNote]);

  const editor = useRef(null);

  const focusEditor = () => {
    editor.current.focus();
  };

  const handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return true;
    }
    return false;
  };

  return (
    <div className="editor-wrapper">
      <Toolbar
        noteState={noteState}
        editorState={editorState}
        setEditorState={setEditorState}
        setCurrNote={setCurrNote}
      />
      <div className="editor-container" onClick={focusEditor}>
        <Editor
          ref={editor}
          handleKeyCommand={handleKeyCommand}
          editorState={editorState}
          customStyleMap={inlineStyleMap}
          blockStyleFn={blockStyleFn}
          onChange={(editorState: EditorState) => setEditorState(editorState)}
        />
      </div>
    </div>
  );
};

export default DraftEditor;
