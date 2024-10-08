export type Song = {
  id?: number;
  title: string;
  artist: string;
  album: string;
  releaseDate: string;
  genre: string;
  readonly isFavorited?: boolean;
};

export type User = { id: string | null; username: string | null } | null;

export type SongFormProps = {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  modalRef: React.RefObject<{
    open: () => void;
    close: () => void;
  }>;
};