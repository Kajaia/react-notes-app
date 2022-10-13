import { useEffect, useState } from "react";
import { getNotes } from "../../services/ApiService";
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
        notes.map((note) => (
          <div className="col-12 col-md-6 col-lg-4" key={note.id}>
            <div className={`card h-100 shadow-sm ${note.color}`}>
              <div className="card-header">
                <h4 className="mb-0">{note.title}</h4>
              </div>
              <div className="card-body">
                <p className="mb-0">{note.description}</p>
              </div>
            </div>
          </div>
        ))}
      <NotePagination
        meta={meta}
        onClick={(newPage) => handlePageChange(newPage)}
      />
    </div>
  );
}

export default NoteList;
