import { Song } from "./util/types";

type SongAction =
  | { type: "ADD_SONG"; payload: Song }
  | { type: "REMOVE_SONG"; payload: number };

type State = {
  songs: Song[];
};

const initialState: State = {
  songs: [],
};

const songReducer = (state: State, action: SongAction): State => {
  let updatedSongs;
  switch (action.type) {
    case "ADD_SONG":
      updatedSongs = [...state.songs, action.payload];
      return {
        songs: updatedSongs,
      };
    case "REMOVE_SONG":
      return {
        songs: state.songs.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};
export { songReducer, initialState };
export type { State, SongAction };
