import DeleteIcon from "../../UI/icons/DeleteIcon";

export default function DeleteSongButton() {
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
