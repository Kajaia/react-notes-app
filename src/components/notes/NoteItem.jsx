import NoteRemove from "./NoteRemove";

function NoteItem(props) {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className={`card h-100 shadow-sm rounded-3 ${props.note.color}`}>
        <div className="card-body">
          <h6 className="mb-0">{props.note.title}</h6>
          <small className="mb-0">{props.note.description}</small>
        </div>
        <div className="card-footer d-flex align-items-center justify-content-center flex-wrap gap-2">
          <NoteRemove handleRemove={props.handleRemove} />
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
