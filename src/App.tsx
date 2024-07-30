import "./App.css";
import NewSongForm from "./components/NewSongForm";
import PlaylistProvider from "./store/PlaylistProvider";

export type Song = {
  title: string;
  artist: string;
  album: string;
  year?: Date;
};

function App() {
  return (
    <PlaylistProvider>
      <div className="container">
        <NewSongForm />
      </div>
    </PlaylistProvider>
  );
}

export default App;
