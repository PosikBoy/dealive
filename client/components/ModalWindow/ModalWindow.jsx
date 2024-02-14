import React from "react";
import "./ModalWindow.css";
const ModalWindow = (props) => {
  return (
    <div className="modal-menu">
      <div className="modal-menu__body">
        <p>{props.message}</p>
        <p className="modal-menu__description">{props.description}</p>
        <button
          onClick={() => {
            document.body.classList.remove("modal-open");
            props.onClick();
          }}
          className="modal-menu__button"
        >
          {props.textButton}
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
