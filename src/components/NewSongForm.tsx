import { useRef, useState } from "react";
import Button from "../UI/elements/Button";
import Modal from "../UI/elements/Modal";
import SongForm from "./SongForm";

export default function AddNewSongForm() {
  const [showForm, setShowForm] = useState<boolean>(false);

  // Custom Modal ref - handles opening and closing through a forwarded ref
  const modalRef = useRef<{ open: () => void; close: () => void }>(null);

  return (
    <>
      <Modal ref={modalRef} title="Success!">
        <p>Song Added To Playlist.</p>
      </Modal>
      {!showForm ? (
        <Button
          onClick={() => setShowForm(true)}
          style={{ width: "100%" }}
          type="button"
        >
          Add Song +{" "}
        </Button>
      ) : (
        <div className="grow">
          <SongForm modalRef={modalRef} setShowForm={setShowForm}/>
        </div>
      )}
    </>
  );
}
