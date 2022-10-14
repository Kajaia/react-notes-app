import { createPortal } from "react-dom";

function LoadingOverlay(props) {
  if (!props.isLoading) return null;
  return createPortal(
    <div className="overlay">
      <div className="spinner-grow text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>,
    document.getElementById("loading")
  );
}

export default LoadingOverlay;
