import peaches from "../../images/peaches.jpg";
import { IconButton } from "@mui/material";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Like from "../Like/like";
import "./audioplayer.css";

const AudioPlayer = () => {
  return (
    <div className="audio-player">
     
      <div className="left">
      <img src={peaches} alt="fall-back" />
      <div className="song-info">
      <p className="song-name">Peaches</p>
        <p className="song-artist">Justin</p>

      </div>
       
      </div>
      <div className="music-center">
        <div className="music-controls">
          <IconButton className="prev">
            <SkipPreviousIcon  />
          </IconButton>
          <IconButton className="play">
            <PlayArrowIcon />
          </IconButton>
          <IconButton  className="next">
            <SkipNextIcon/>
          </IconButton>
        </div>
        <div className="container-progress">
          <p>0.30</p>
          <input type="range" step="1" min="0" max={4} className="progress" />
          <audio></audio>
          <p>4.00</p>
          <div className="right">
          <Like />
        </div>
        </div>
       
      </div>
    </div>
  );
};
export default AudioPlayer;
