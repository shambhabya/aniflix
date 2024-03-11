import React, { useRef, useState } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import ListItem from "../listitem/Listitem";
import "./list.scss";

export default function List({ list }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleSlide = (direction) => {
    console.log(list)
    const nextSlideNumber = direction === "left" ? Math.max(slideNumber - 1, 0) : Math.min(slideNumber + 1, list.content.length);
    const translateValue = -280 * nextSlideNumber;

    listRef.current.style.transform = `translateX(${translateValue}px)`;
    setSlideNumber(nextSlideNumber);
  };

  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleSlide("left")} />
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem key={i} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleSlide("right")} />
      </div>
    </div>
  );
}


  // console.log(slideNumber);
  //       console.log(translateValue);
  //       console.log(listRef.current.getBoundingClientRect());
  // for later use