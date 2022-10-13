import { useState } from "react";
import NoteList from "./components/notes/NoteList";
import NotePerPage from "./components/notes/NotePerPage";

function App() {
  const [perPage, setPerPage] = useState(10);
  function handlePerPageChange(e) {
    setPerPage(parseInt(e.target.value));
  }

  return (
    <div className="container my-3">
      <h1 className="fw-bold text-center">Notes App</h1>
      <NotePerPage perPage={perPage} onChange={(e) => handlePerPageChange(e)} />
      <NoteList perPage={perPage} />
    </div>
  );
}

export default App;
