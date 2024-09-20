// src/components/Modal.js
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.body // Render the modal at the end of the body
  );
};

const Modal = ({ isOpen, onClose, title, imageSrc, content, footer }) => {
  if (!isOpen) return null;

  return (
    <ModalPortal>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto">
          {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
          {imageSrc && (
            <div className="flex items-center justify-center mb-4">
              <img src={imageSrc} alt={title} className="w-16 h-16 object-cover mr-4" />
            </div>
          )}
          {content}
          {footer && <div className="flex justify-between items-center mt-4">{footer}</div>}
          <div className="flex justify-center mt-4">
            <button className="bg-gray-400 text-white py-2 px-4 rounded" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  content: PropTypes.node,
  footer: PropTypes.node,
};

export default Modal;
