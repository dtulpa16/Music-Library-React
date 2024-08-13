import { Song } from "../../util/types";
import DeleteIcon from "../../UI/icons/DeleteIcon";

export default function DeleteSongButton({ ...song }: Song) {
//   const { user } = useAuth();

//   const mutation = useMutation({
//     mutationFn: handleFavorite,
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["songs", user?.id],
//       });
//     },
//   });
  
  return (
    <DeleteIcon width="24px" height="24px" />
  );
}
