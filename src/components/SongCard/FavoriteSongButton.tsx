import { useMutation } from "@tanstack/react-query";
import StarIcon from "../../UI/icons/StarIcon";
import { useAuth } from "../../util/hooks/useAuth";
import { Song } from "../../util/types";
import { handleFavorite, queryClient } from "../../util/http";

export default function FavoriteSongButton({ ...song }: Song) {
  const { user } = useAuth();

  const mutation = useMutation({
    mutationFn: handleFavorite,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["songs", user?.id],
      });
    },
  });

  return (
    <StarIcon
      width="24px"
      height="24px"
      isFavorited={song.isFavorited ?? false}
      onClick={() => mutation.mutate(song.id ?? 1)}
    />
  );
}
