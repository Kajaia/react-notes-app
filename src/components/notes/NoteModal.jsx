import { useState } from "react";
import Modal from "../modals/Modal";

function NoteModal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    id: props.note.id,
    title: props.note.title,
    description: props.note.description,
    color: props.note.color ? props.note.color : "bg-white",
    pinned: props.note.pinned ? props.note.pinned : 0,
    archived: props.note.archived ? props.note.archived : 0,
  });

  function handleChange(e) {
    setData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }

  return (
    <>
      <button
        className="btn btn-sm rounded-circle shadow-sm d-flex align-items-center justify-content-center action-btn"
        title={props.heading}
        onClick={() => setIsOpen(true)}
      >
        <i className={`fas fa-${props.icon} fa-sm`}></i>
      </button>
      <Modal
        isOpen={isOpen}
        title={props.heading}
        onClose={() => setIsOpen(false)}
      >
        <form
          className="d-flex flex-column"
          onSubmit={(e) => {
            props.icon === "plus"
              ? props.handleAdd(e, data)
              : props.handleEdit(e, data);
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
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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

export default NoteModal;
