import "./App.css";
import NewSongForm from "./components/NewSongForm";
import PlaylistProvider from "./store/PlaylistProvider";

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
