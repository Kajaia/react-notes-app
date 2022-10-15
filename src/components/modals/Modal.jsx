import { createPortal } from "react-dom";

function Modal(props) {
  if (!props.isOpen) return null;
  return createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal-portal rounded-3 bg-white p-3">
        <div className="card-header d-flex align-items-center justify-content-between pb-2">
          <h5>{props.title}</h5>
          <button className="btn px-1 py-0 border-0" onClick={props.onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        {props.children}
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
