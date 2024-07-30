import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import NewSongForm from "./components/NewSongForm";
import PlaylistProvider from "./store/PlaylistProvider";
import SongList from "./components/SongList";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./store/AuthProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <PlaylistProvider>
          <Navbar />
          <div className="container">
            <NewSongForm />
            <SongList />
          </div>
        </PlaylistProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
