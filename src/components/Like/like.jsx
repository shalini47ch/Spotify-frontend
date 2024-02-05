import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./like.css";
const Like = () => {
  //initially the like is no set
  const [like, setLike] = useState(false);
  return (
    <div>
      <IconButton onClick={() => setLike(!like)} className="like-button">
        {!like ? (
          <FavoriteBorderIcon className="like-outline" />
        ) : (
          <FavoriteIcon className="like-filled" />
        )}
      </IconButton>
    </div>
  );
};
export default Like;
