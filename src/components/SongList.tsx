import { useQuery } from "@tanstack/react-query";
import { fetchSongs } from "../util/http";
import SongCard from "./SongCard/SongCard";
import { useAuth } from "../util/hooks/useAuth";
import { useState } from "react";
import "../styles/SongList.css"
export default function SongList() {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [animationClass, setAnimationClass] = useState<string>('');
  const itemsPerPage = 4;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["songs", user?.id],
    queryFn: fetchSongs,
  });

  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 1;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setAnimationClass('slide-out-left');
      setTimeout(() => {
        setCurrentPage((prevPage) => prevPage + 1);
        setAnimationClass('slide-in-right');
      }, 100); // Duration matches the animation time
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setAnimationClass('slide-out-right');
      setTimeout(() => {
        setCurrentPage((prevPage) => prevPage - 1);
        setAnimationClass('slide-in-left');
      }, 100); // Duration matches the animation time
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data?.slice(startIndex, endIndex);

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <div className={`song-container ${animationClass}`}>
        {currentData?.map((el, i) => (
          <SongCard key={i} song={el} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
