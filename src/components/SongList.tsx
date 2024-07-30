import { useQuery } from "@tanstack/react-query";
import { fetchSongs } from "../util/http";
import SongCard from "./SongCard";

export default function SongList() {
  const { data, isLoading } = useQuery({
    queryKey: ["songs"],
    queryFn: fetchSongs,
  });

  if(isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {data?.map((el, i) => {
        return <SongCard key={i} song={el} />;
      })}
    </div>
  );
}
