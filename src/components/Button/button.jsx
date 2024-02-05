import { CircularProgress } from "@mui/material";

const Button = ({ isFetching, label }) => {
  return (
    <div>
      {isFetching ? <CircularProgress color="secondary" /> : `${label}`}
    </div>
  );
};
export default Button;
