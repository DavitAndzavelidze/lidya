import React, { ReactNode } from "react";

interface ModalProps<T> {
  isOpen: boolean;
  onClose: () => void;
  children: T;
}

const Modal = <T extends ReactNode>({
  isOpen,
  onClose,
  children,
}: ModalProps<T>) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-30"
        onClick={onClose}
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg z-50">
        {children}
      </div>
    </>
  );
};

export default Modal;
