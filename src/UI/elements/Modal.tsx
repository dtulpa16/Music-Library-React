import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";

type ModalProps = {
  title: string;
  children: ReactNode;
};

const Modal = forwardRef(function Modal({ title, children }: ModalProps, ref) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    const dialogRef = dialog.current as HTMLDialogElement;
    return {
      open() {
        dialogRef.showModal();
      },
      close() {
        dialogRef.close();
      },
    };
  });

  return (
    <dialog ref={dialog} className="dialog">
      <div className="dialog-content">
        <div className="dialog-header">{title}</div>
        <div className="dialog-body">{children}</div>
        <div className="dialog-footer">
          <form method="dialog">
            <button type="submit" className="dialog-close">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
});
export default Modal;
