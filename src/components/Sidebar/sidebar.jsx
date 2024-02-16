import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "../../images/white_logo.svg";
import Library from "../Library/library";

import Home from "../Home/home";
import Search from "../Search/search";
import CreatePlaylist from "../CreatePlaylist/createplaylist";
import LikeImage from "../LikeImage/likeimage";

import "./sidebar.css";

const playlists = [
  {
    _id: 1,
    img: "",
    name: "Today's Top Songs",
    desc: "Lists the top songs of the present day",
  },
];

const SideBar = () => {
  return (
    <div className="sidebar-outline">
      <img src={logo} alt="no-img" />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/collections/playlist" element={<Library />} />
          <Route path="/add" element={<CreatePlaylist />} />
          <Route path="/collections/tracks" element={<LikeImage />} />
          {playlists.map((playlist) => (
            <Route
              key={playlist._id}
              path={`/playlist/${playlist._id}`}
              element={<div className="play">{playlist.name}</div>}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default SideBar;
