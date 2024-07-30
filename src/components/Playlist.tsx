import { ReactNode } from "react"

type PlaylistProps = {
    children:ReactNode
}

export default function Playlist({children}: PlaylistProps) {
  return (
    <div>{children}</div>
  )
}
