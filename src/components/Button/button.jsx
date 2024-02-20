import { CircularProgress } from "@mui/material";
import "./button.css"

const Button = ({ isFetching, label,...rest }) => {
  return (
    <button  {...rest} className="primary-btn">
      {isFetching ? <CircularProgress color="secondary" /> : `${label}`}
    </button>
  );
};
export default Button;
