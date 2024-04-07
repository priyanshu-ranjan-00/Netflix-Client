// this is List.jsx ==>

import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = () => {
  const listRef = useRef();

  const [isMoved, setIsMoved] = useState(false);

  // const [slideNumber, setSlideNumber] = useState(0);

  // const handleClick = (direction) => {
  //   setIsMoved(true);
  //   console.log(listRef.current.getBoundingClientRect());

  //   let distance = listRef.current.getBoundingClientRect().x - 60;
  //   if (direction == "left" && slideNumber > 0) {
  //     setSlideNumber(slideNumber - 1);
  //     listRef.current.style.transform = `translateX(${284 + distance}px)`;
  //   }
  //   if (direction == "right" && slideNumber < 10) {
  //     setSlideNumber(slideNumber + 1);
  //     listRef.current.style.transform = `translateX(${-284 + distance}px)`;
  //   }
  //   console.log(listRef.current.getBoundingClientRect());
  // };

  const [translateX, setTranslateX] = useState(0);

  const handleClick = (direction) => {
    setIsMoved(true);

    const containerWidth = listRef.current.clientWidth;
    const itemsInView = Math.floor(containerWidth / 284); // Assuming each item has a width of 284px

    let newTranslateX = translateX;

    if (direction === "left") {
      newTranslateX += 284 * itemsInView;
    } else if (direction === "right") {
      // Check if the current translateX value is greater than the maximum limit
      if (newTranslateX > -(284 * (15 - itemsInView))) {
        newTranslateX -= 284 * itemsInView;
      }
    }

    // Limit the translateX to prevent moving beyond the first or last item
    newTranslateX = Math.min(0, Math.max(-(284 * 15), newTranslateX)); // Assuming 15 items

    setTranslateX(newTranslateX);
    listRef.current.style.transform = `translateX(${newTranslateX}px)`;
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
          <ListItem index={10} />
          <ListItem index={11} />
          <ListItem index={12} />
          <ListItem index={13} />
          <ListItem index={14} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
