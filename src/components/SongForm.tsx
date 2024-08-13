import React, { useContext, useRef, useState } from "react";
import Form from "../UI/elements/Form";
import Input from "../UI/elements/Input";
import { PlaylistContext } from "../store/PlaylistProvider";
import { Song, SongFormProps } from "../util/types";
import Button from "../UI/elements/Button";
import { useMutation } from "@tanstack/react-query";
import { addSong, queryClient } from "../util/http";
import { useAuth } from "../util/hooks/useAuth";

export default function SongForm({ setShowForm, modalRef }: SongFormProps) {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const formRef = useRef<HTMLFormElement>(null);
  const { user } = useAuth();
  const mutation = useMutation({
    mutationFn: addSong,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["songs", user?.id],
      });
      modalRef.current?.open();
      formRef.current?.reset();
    },
  });

  // Need to check if context is undefined before utilizing it
  const context = useContext(PlaylistContext);

  if (!context) {
    throw new Error("AddNewSongForm must be used within a PlaylistProvider");
  }

  // const { dispatch } = context;

 

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
      setIsDisabled(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    mutation.mutate(songData);
    // dispatch({ type: "ADD_SONG", payload: songData });
  };

  return (
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
      <Button type="submit" disabled={isDisabled}>
        Add Song
      </Button>
      <Button
        type="button"
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
          setShowForm(false);
        }}
        style={{ backgroundColor: "red" }}
      >
        Cancel
      </Button>
    </Form>
  );
}
