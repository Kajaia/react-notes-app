function NoteRemove(props) {
  return (
    <button
      className="btn btn-sm rounded-circle shadow-sm d-flex align-items-center justify-content-center action-btn"
      title="Remove from notes"
      onClick={props.handleRemove}
    >
      <i className="fas fa-trash fa-sm"></i>
    </button>
  );
}

export default NoteRemove;
