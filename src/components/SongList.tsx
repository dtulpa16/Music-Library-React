import { useQuery } from "@tanstack/react-query";
import { fetchSongs } from "../util/http";
import SongCard from "./SongCard";

export default function SongList() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["songs"],
    queryFn: fetchSongs,
  });

  if(isPending){
    return <h1>Loading...</h1>
  }

  if(isError){
    return <h1>{error.message}</h1>
  }

  return (
    <div>
      {data?.map((el, i) => {
        return <SongCard key={i} song={el} />;
      })}
    </div>
  );
}
