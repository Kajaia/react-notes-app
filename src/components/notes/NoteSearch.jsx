function NoteSearch(props) {
  return (
    <div
      defaultValue={props.search}
      onChange={(e) => props.onChange(e)}
      className="row justify-content-center mt-3 mb-4"
    >
      <div className="col-12 col-md-8 col-lg-6">
        <input
          type="text"
          className="form-control"
          placeholder="Search for notes..."
          autoFocus
        />
      </div>
    </div>
  );
}

export default NoteSearch;
