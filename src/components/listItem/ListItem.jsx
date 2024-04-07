// this is ListItem.jsx ==>

import { useState } from "react";
import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const trailer =
    "https://res.cloudinary.com/dzlrymvy4/video/upload/v1708718432/Neflix/Sunrise_-_the_easiest_way_to_fast_forward_the_day_xbrnsj.mp4";

  const calculateLeftPosition = () => {
    if (index <= 4) return index * 250 + index * 38;
    return index * 250 + index * 30;
  };

  return (
    <div>
      <div
        className={`listitem ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          left: isHovered ? calculateLeftPosition() : "auto",
          zIndex: isHovered ? 100 : 0,
        }}
      >
        <img
          src="https://images.indianexpress.com/2022/04/WhatsApp-Image-2022-04-27-at-3.36.49-PM.jpeg"
          alt=""
        />
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop></video>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium hic rem eveniet error possimus, neque ex doloribus.
              </div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ListItem;
