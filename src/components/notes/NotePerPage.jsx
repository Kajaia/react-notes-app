function NotePerPage(props) {
  return (
    <div className="col-6 d-flex align-items-center gap-2">
      <select
        defaultValue={props.perPage}
        onChange={(e) => props.onChange(e)}
        id="perPage"
        className="form-select"
        style={{ width: 80 }}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={75}>75</option>
        <option value={100}>100</option>
      </select>
      <label htmlFor="perPage">
        <small>Per page</small>
      </label>
    </div>
  );
}

export default NotePerPage;
