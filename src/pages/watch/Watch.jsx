import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        // progress
        controls
        src="https://res.cloudinary.com/dzlrymvy4/video/upload/v1708718432/Neflix/Sunrise_-_the_easiest_way_to_fast_forward_the_day_xbrnsj.mp4"
      />
    </div>
  );
}
