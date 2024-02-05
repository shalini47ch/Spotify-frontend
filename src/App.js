import "./App.css";
// import Like from "./components/Like/like";
// import Button from "./components/Button/button";
import AudioPlayer from "./components/AudioPlayer/audioplayer";

function App() {
  return (
    <div className="App">
      {/* <p>Welcome to the client side of spotify website</p>
      <Like />
      <Button label="click me" isFetching={true} /> */}
      <AudioPlayer />
    </div>
  );
}

export default App;
