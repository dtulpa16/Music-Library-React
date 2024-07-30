import { useContext, useRef, useState } from "react";
import Form from "./Form";
import { Song } from "../App";
import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";
import { PlaylistContext } from "../store/PlaylistProvider";

export default function AddNewSongForm() {
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
    year: undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSongData({
      ...songData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch({type:"ADD_SONG", payload:songData})
    modalRef.current?.open();
  };

  return (
    <>
      <Modal ref={modalRef} title="Success!">
        <p>Song Added To Playlist.</p>
      </Modal>
      <Form onSubmit={handleSubmit}>
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
          name={"year"}
          type="date"
          onChange={handleChange}
        />
        <Button type="submit">Add Song</Button>
      </Form>
    </>
  );
}
