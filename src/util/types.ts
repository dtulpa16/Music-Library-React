export type Song = {
  id?: number;
  title: string;
  artist: string;
  album: string;
  releaseDate: string;
  genre: string;
  readonly isFavorited?: boolean;
};

export type User = {
  id?: number;
  username: string;
};
