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
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-white p-4 rounded shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
