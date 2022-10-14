import { useEffect, useState } from "react";
import { getNotes, removeNote } from "../../services/ApiService";
import NoteItem from "./NoteItem";
import NotePagination from "./NotePagination";
import toast from "../alerts/toast";
import LoadingOverlay from "../spinners/LoadingOverlay";

function NoteList(props) {
  const [notes, setNotes] = useState([]);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getNotes({ perPage: props.perPage, search: props.search, page: page }).then(
      (res) => {
        setNotes(res.data.data);
        setMeta(res.data.meta);
        setIsLoading(false);
      }
    );
  }, [props.perPage, props.search, page]);

  function handlePageChange(newPage) {
    setPage(newPage);
  }

  function handleRemove(id, title) {
    removeNote(id);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    toast("success", `"${title}" removed successfully`, 2000);
  }

  return (
    <div className="row justify-content-center g-3 mt-3">
      {notes.length > 0 &&
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            handleRemove={() => handleRemove(note.id, note.title)}
          />
        ))}
      {meta.total > props.perPage && (
        <NotePagination
          meta={meta}
          onClick={(newPage) => handlePageChange(newPage)}
        />
      )}
      <LoadingOverlay isLoading={isLoading} />
    </div>
  );
}

export default NoteList;
