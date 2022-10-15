import { useState } from "react";
import Modal from "../modals/Modal";

function NoteEdit(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    id: props.note.id,
    title: props.note.title,
    description: props.note.description,
    color: props.note.color,
    pinned: props.note.pinned,
    archived: props.note.archived,
  });

  function handleTitleChange(e) {
    setData((prevData) => {
      return { ...prevData, title: e.target.value };
    });
  }

  function handleDescriptionChange(e) {
    setData((prevData) => {
      return { ...prevData, description: e.target.value };
    });
  }

  return (
    <>
      <button
        className="btn btn-sm rounded-circle shadow-sm d-flex align-items-center justify-content-center action-btn"
        title="Edit note"
        onClick={() => setIsOpen(true)}
      >
        <i className="fas fa-pen fa-sm"></i>
      </button>
      <Modal isOpen={isOpen} title="Add note" onClose={() => setIsOpen(false)}>
        <form
          className="d-flex flex-column"
          onSubmit={(e) => {
            props.handleEdit(e, data);
            setIsOpen(false);
          }}
        >
          <div className="card-body scrollable">
            <div className="form-group mb-3">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={props.note.title}
                onChange={(e) => handleTitleChange(e)}
                className="form-control"
                placeholder="Lorem ipsum"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                defaultValue={props.note.description}
                onChange={(e) => handleDescriptionChange(e)}
                className="form-control"
                placeholder="Lorem ipsum dorlo, sit amet..."
                required
              />
            </div>
          </div>
          <div className="card-footer mt-auto text-center pt-3">
            <button
              type="submit"
              className="btn btn-sm btn-primary shadow-sm rounded-2 px-3"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default NoteEdit;
