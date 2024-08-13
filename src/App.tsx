import "./App.css";
import NewSongForm from "./components/NewSongForm";
import PlaylistProvider from "./store/PlaylistProvider";
import SongList from "./components/SongList";
import { QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import { queryClient } from "./util/http";



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PlaylistProvider>
        <Navbar />
        <div className="container">
          <NewSongForm />
          <SongList />
        </div>
      </PlaylistProvider>
    </QueryClientProvider>
  );
}

export default App;
