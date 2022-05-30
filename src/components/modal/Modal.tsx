import React, { FC, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ReactPortal from "../ReactPortal";
import cl from "./Modal.module.css";

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}
const Modal: FC<ModalProps> = ({ children, isOpen, handleClose }) => {
  const nodeRef = useRef(null);
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent): void | null =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ exit: 300 }}
        unmountOnExit
        classNames={{
          enterDone: cl.modalEnterDone,
          exitDone: cl.modalExit,
        }}
        nodeRef={nodeRef}
      >
        <div className={cl.modal} ref={nodeRef}>
          <div className={cl.modalContent}>
            {children}
            <button onClick={handleClose} className={cl.closeBtn}>
              x
            </button>
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
};
export default Modal;