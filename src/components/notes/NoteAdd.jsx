import { useState } from "react";
import Modal from "../modals/Modal";

function NoteAdd(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    color: "bg-white",
    pinned: 0,
    archived: 0,
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
      <div className="col-12">
        <button
          className="btn btn-sm btn-success shadow-sm rounded-2 px-3"
          onClick={() => setIsOpen(true)}
        >
          Add note
        </button>
      </div>
      <Modal isOpen={isOpen} title="Add note" onClose={() => setIsOpen(false)}>
        <form
          className="d-flex flex-column"
          onSubmit={(e) => {
            props.handleAdd(e, data);
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
                defaultValue={data.title}
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
                defaultValue={data.description}
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

export default NoteAdd;
