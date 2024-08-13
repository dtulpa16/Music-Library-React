import EditIcon from '../../UI/icons/EditIcon'
import { Song } from '../../util/types'

export default function EditSongButton({...song}:Song) {
  return (
    <EditIcon  width="24px" height="24px" />
  )
}
