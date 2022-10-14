import { useEffect, useState } from "react";
import { getNotes } from "../../services/ApiService";
import NoteItem from "./NoteItem";
import NotePagination from "./NotePagination";

function NoteList(props) {
  const [notes, setNotes] = useState([]);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    getNotes({ perPage: props.perPage, search: props.search, page: page }).then(
      (res) => {
        setNotes(res.data.data);
        setMeta(res.data.meta);
      }
    );
  }, [props.perPage, props.search, page]);

  function handlePageChange(newPage) {
    setPage(newPage);
  }

  return (
    <div className="row justify-content-center g-3 mt-3">
      {notes.length > 0 &&
        notes.map((note) => <NoteItem key={note.id} note={note} />)}
      {meta.total > props.perPage && (
        <NotePagination
          meta={meta}
          onClick={(newPage) => handlePageChange(newPage)}
        />
      )}
    </div>
  );
}

export default NoteList;
