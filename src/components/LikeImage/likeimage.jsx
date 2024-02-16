import FavoriteIcon from "@mui/icons-material/Favorite";
import "./likeimage.css";
const LikeImage = () => {
  return (
    <div className="like">
      <FavoriteIcon />
      <span>LikedSongs</span>
    </div>
  );
};
export default LikeImage;
