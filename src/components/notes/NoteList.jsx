import { useEffect, useState } from "react";
import { addNote, getNotes, removeNote } from "../../services/ApiService";
import NoteItem from "./NoteItem";
import NotePagination from "./NotePagination";
import toast from "../alerts/toast";
import LoadingOverlay from "../spinners/LoadingOverlay";
import NoteAdd from "./NoteAdd";

function NoteList(props) {
  const [notes, setNotes] = useState([]);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getNotes({
      perPage: props.perPage,
      search: props.search,
      page: page,
      orderBy: "created_at",
      orderDirection: "desc",
    }).then((res) => {
      setNotes(res.data.data);
      setMeta(res.data.meta);
      setIsLoading(false);
    });
  }, [props.perPage, props.search, page]);

  function handlePageChange(newPage) {
    setPage(newPage);
  }

  function handleAdd(e, data) {
    e.preventDefault();
    setIsLoading(true);
    addNote(data).then((res) => {
      if (res.status === 201) {
        setIsLoading(false);
        const newNotes = [res.data.data, ...notes];
        setNotes(newNotes);
        toast("success", `"${data.title}" added successfully`, 2000);
      }
    });
  }

  function handleRemove(id, title) {
    setIsLoading(true);
    removeNote(id).then((res) => {
      if (res.status === 200) {
        setIsLoading(false);
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        toast("success", `"${title}" removed successfully`, 2000);
      }
    });
  }

  return (
    <div className="row justify-content-center g-3 mt-1">
      <NoteAdd handleAdd={(e, data) => handleAdd(e, data)} />
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
