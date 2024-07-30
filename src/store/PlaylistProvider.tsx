import { createContext, ReactNode, useReducer } from "react";
import { songReducer, initialState, State, SongAction } from "../reducer";

interface PlaylistContextType {
  state: State
  dispatch: React.Dispatch<SongAction>;
}

export const PlaylistContext = createContext<PlaylistContextType | undefined>(
  undefined
);

type PlaylistProviderProps = {
  children: ReactNode;
};

export default function PlaylistProvider({ children }: PlaylistProviderProps) {
  const [state, dispatch] = useReducer(songReducer, initialState)

  return (
    <PlaylistContext.Provider value={{state, dispatch}}>
      {children}
    </PlaylistContext.Provider>
  );
}
