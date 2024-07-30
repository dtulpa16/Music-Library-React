import { Song } from "../types"

type SongCardProps = {
    song: Song
}

export default function SongCard({song}: SongCardProps) {
  return (
    <div>{song.title}</div>
  )
}
