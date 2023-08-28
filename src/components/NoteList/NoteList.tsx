import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INote } from "../../models/INote";
import CustomButton from "../CustomButton/CustomButton";
import "./NoteList.css";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { DataContext, DataContextInterface } from "../../context/dataContext";

interface NoteListProps {
  notes: INote[] | null;
  setCurrNote: (note: INote) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, setCurrNote }) => {
  const { deleteNote } = useContext(DataContext) as DataContextInterface;

  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <div className="note" key={index}>
            <div className="note-content" onClick={() => setCurrNote(note)}>
              <div className="text">
                {note.blocks[0].text.substring(0, 30) + "..."}
              </div>
              <div className="timestamp">{note.timestamp}</div>
            </div>

            <CustomButton
              icon={<FontAwesomeIcon icon={faTrashCan} />}
              title="Delete note"
              onClickHandler={() => deleteNote(note.id)}
            />
          </div>
        ))
      ) : (
        <p className="help-text">no notes</p>
      )}
    </div>
  );
};

export default NoteList;
