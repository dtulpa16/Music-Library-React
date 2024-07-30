import { useContext, useRef, useState } from "react";
import Form from "../UI/elements/Form";
import { Song } from "../util/types";
import Input from "../UI/elements/Input";
import Button from "../UI/elements/Button";
import Modal from "../UI/elements/Modal";
import { PlaylistContext } from "../store/PlaylistProvider";

export default function AddNewSongForm() {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const formRef = useRef<HTMLFormElement>(null)

  // Custom Modal ref - handles opening and closing through a forwarded ref
  const modalRef = useRef<{ open: () => void; close: () => void }>(null);

  // Need to check if context is undefined before utilizing it
  const context = useContext(PlaylistContext);
  if (!context) {
    throw new Error("AddNewSongForm must be used within a PlaylistProvider");
  }
  const { dispatch } = context;

  const [songData, setSongData] = useState<Song>({
    title: "",
    artist: "",
    album: "",
    releaseDate: "",
    genre: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSongData({
      ...songData,
      [e.target.name]: e.target.value,
    });
    if (
      songData.title.length >= 3 &&
      songData.artist.length >= 3 &&
      songData.album.length >= 3 &&
      songData.releaseDate &&
      songData.genre.length >= 3
    ) {
      setIsDisabled(false)
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_SONG", payload: songData });
    modalRef.current?.open();
    formRef.current?.reset()
  };

  return (
    <>
      <Modal ref={modalRef} title="Success!">
        <p>Song Added To Playlist.</p>
      </Modal>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          label={"Title"}
          name={"title"}
          type="text"
          onChange={handleChange}
        />
        <Input
          label={"Artist"}
          name={"artist"}
          type="text"
          onChange={handleChange}
        />
        <Input
          label={"Album"}
          name={"album"}
          type="text"
          onChange={handleChange}
        />
        <Input
          label={"Year"}
          name={"releaseDate"}
          type="date"
          onChange={handleChange}
        />
        <Input
          label={"Genre"}
          name={"genre"}
          type="string"
          onChange={handleChange}
        />
        <Button type="submit" disabled={isDisabled}>Add Song</Button>
      </Form>
    </>
  );
}
