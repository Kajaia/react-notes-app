function NotePagination(props) {
  const meta = props.meta;

  return (
    <div className="col-lg-12 d-flex justify-content-center mt-4">
      <nav>
        <ul className="pagination">
          <li
            className={`page-item ${meta.current_page === 1 ? "disabled" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => props.onClick(meta.current_page - 1)}
            >
              Prev
            </button>
          </li>
          <li
            className={`page-item ${
              meta.last_page === meta.current_page ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => props.onClick(meta.current_page + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NotePagination;
