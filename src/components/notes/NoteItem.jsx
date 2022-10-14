function NoteItem(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className={`card h-100 shadow-sm ${props.note.color}`}>
        <div className="card-header">
          <h4 className="mb-0">{props.note.title}</h4>
        </div>
        <div className="card-body">
          <p className="mb-0">{props.note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
