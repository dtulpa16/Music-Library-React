import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import NewSongForm from "./components/NewSongForm";
import PlaylistProvider from "./store/PlaylistProvider";
import SongList from "./components/SongList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PlaylistProvider>
        <div className="container">
          <NewSongForm />
          <SongList/>
        </div>
      </PlaylistProvider>
    </QueryClientProvider>
  );
}

export default App;
