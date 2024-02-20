import "./App.css";
// import FileInput from "./components/Inputs/FileInput/fileinput";
// import TextField from "./components/Inputs/TextField/textfield";
import PlayListModal from "./components/PlaylistModal/playlistmodal";
// import Like from "./components/Like/like";
// import Button from "./components/Button/button";
// import AudioPlayer from "./components/AudioPlayer/audioplayer";
// import Sidebar from "./components/Sidebar/sidebar"


function App() {
  const playlists = [
    {
      _id: 1,
      img: "",
      name: "Today's Top Songs",
      desc: "Lists the top songs of the present day",
    },
  ];

  

  return (
    <div className="App">
  
      <PlayListModal playlist={playlists}/>
    </div>
  );
}

export default App;
