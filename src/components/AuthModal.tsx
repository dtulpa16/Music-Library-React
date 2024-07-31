import React, { useEffect, useRef } from "react";

import Modal from "../UI/elements/Modal";

import AuthForm from "./AuthForm";

interface AuthModalProps {
  action: string;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  onToggle: boolean;
}

const AuthModal: React.FC<AuthModalProps> = ({
  action,
  setAction,
  onToggle,
}) => {
  const modalRef = useRef<{ open: () => void; close: () => void }>(null);

  useEffect(() => {
    if (action) {
      modalRef.current?.open();
    }
  }, [onToggle, action]);

  return (
    <Modal ref={modalRef} title={action}>
      <AuthForm modalRef={modalRef} action={action} setAction={setAction} onToggle={onToggle}/>
    </Modal>
  );
};

export default AuthModal;
