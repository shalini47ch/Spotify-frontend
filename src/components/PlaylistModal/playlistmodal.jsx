import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import TextField from "../Inputs/TextField/textfield";
//we will use the useeffect and usestate hooks here to handle the data changes
import { useState, useEffect } from "react";
// import FileInput from "../Inputs/FileInput/fileinput";
// import defaultImage from "../../images/music.png";
import Button from "../Button/button";
import "./playlistmodal.css";

const PlayListModal = ({ playlist }) => {
  const [data, setData] = useState({
    name: "",
    desc: "",
    img: "",
  });
  const [modal, setModal] = useState(true);
  useEffect(() => {
    setData({ name: playlist.name, desc: playlist.desc, img: playlist.img });
  }, [playlist]);

  //create another function called as handleInputState
  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
    {modal && (
    <div className="container">
      <IconButton className="close-btn" onClick={()=>{
        console.log("click me")
        setModal(!modal)}
        }>
        <CloseIcon />
      </IconButton>

      <div className="form-container">
        <h1>Edit Details</h1>
        <div className="input-container">
          <TextField
            label="Name"
            name="name"
            value={data.name}
            handleInputState={handleInputState}
          />
        </div>

        <div className="input-container">
          <TextField
            label="Description"
            name="description"
            value={data.desc}
            handleInputState={handleInputState}
          />
        </div>

        {/* <div className="input-container">
          <FileInput
            label="choose image"
            type="image"
            name="img"
            value={data.img === " " ? defaultImage : data.img}
            handleInputState={handleInputState}
          />
        </div> */ }
        {/* use it while creating pages */}

        <Button
          label="submit"
          onClick={handleSubmit}
          style={{
            position: "relative",
            bottom: "0",
            right: "0",
            margin: "1rem",
            fontSize:"15px",
            backgroundColor:"green",
            color:"white",
            padding:"10px",
            width:"30%",
            borderRadius:"10px",
            display:"flex",
            alignSelf:"flex-start"
            
          }}
        />
      </div>
    </div>
     )}
     </>
  );
};
export default PlayListModal;
