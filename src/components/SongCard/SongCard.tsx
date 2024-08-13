import { Song } from "../../util/types";
import "../../styles/SongList.css";
import FavoriteSongButton from "./FavoriteSongButton";
import DeleteSongButton from "./DeleteSongButton";
import EditSongButton from "./EditSongButton";

type SongCardProps = {
  song: Song;
};

export default function SongCard({ song }: SongCardProps) {
  return (
    <div className="song-card">
      <div className="song-details">
        <p>{song.title}</p>
        <p>{song.artist}</p>
        <p>{song.album}</p>
        <p>{song.genre}</p>
        <p>{song.releaseDate ?? "na"}</p>
      </div>
      <div className="song-actions">
        <i className="star-icon">
          <FavoriteSongButton {...song} />
        </i>
        <i className="edit-icon">
          <EditSongButton />
        </i>
        <i className="delete-icon">
          <DeleteSongButton />
        </i>
      </div>
    </div>
  );
}
