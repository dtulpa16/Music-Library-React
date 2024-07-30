import { Song } from "../util/types";
import DeleteIcon from "../UI/DeleteIcon";
import EditIcon from "../UI/EditIcon";
import "../styles/SongList.css"
import StarIcon from "../UI/StarIcon";
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
          <StarIcon width="24px" height="24px" isFavorited={false} />
        </i>
        <i className="edit-icon">
          <EditIcon width="24px" height="24px" />
        </i>
        <i className="delete-icon">
          <DeleteIcon width="24px" height="24px" />
        </i>
      </div>
    </div>
  );
}