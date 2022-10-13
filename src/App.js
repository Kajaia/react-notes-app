import { useState } from "react";
import NoteList from "./components/notes/NoteList";
import NotePerPage from "./components/notes/NotePerPage";
import NoteSearch from "./components/notes/NoteSearch";

function App() {
  const [perPage, setPerPage] = useState(10);
  function handlePerPageChange(e) {
    setPerPage(parseInt(e.target.value));
  }

  const [search, setSearch] = useState(null);
  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="container my-3">
      <h1 className="fw-bold text-center">Notes App</h1>
      <NoteSearch search={search} onChange={(e) => handleSearchChange(e)} />
      <NotePerPage perPage={perPage} onChange={(e) => handlePerPageChange(e)} />
      <NoteList perPage={perPage} search={search} />
    </div>
  );
}

export default App;
