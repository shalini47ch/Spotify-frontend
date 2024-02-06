import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "../../images/white_logo.svg";

import Home from "../Home/home";
import Search from "../Search/search";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar-outline">
      <img src={logo} alt="no-img" />

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default SideBar;
