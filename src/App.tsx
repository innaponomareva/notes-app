import { useContext, useState } from "react";
import "./App.css";
import DraftEditor from "./components/DraftEditor/DraftEditor";
import NoteList from "./components/NoteList/NoteList";

import { DataContext, DataContextInterface } from "./context/dataContext";

const App: React.FC = () => {
  const { data } = useContext(DataContext) as DataContextInterface;
  const [currNote, setCurrNote] = useState(null);

  return (
    <div className="app-container">
      <NoteList notes={data} setCurrNote={setCurrNote} />
      <DraftEditor currNote={currNote} setCurrNote={setCurrNote} />
    </div>
  );
};

export default App;
