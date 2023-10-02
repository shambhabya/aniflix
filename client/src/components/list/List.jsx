import { useRef, useState } from "react"; 
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import "./list.scss"
import Listitem from "../listitem/Listitem"

function List() {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const listRef = useRef();

    const handleClick = (direction) => {

        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        console.log(listRef.current.getBoundingClientRect())

        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230 + distance}px)` // Corrected the direction to left
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
        
        console.log(distance);
    }

    return (
        <div>
            <div className="list">
                <span className="listTitle">Continue to watch</span>
                <div className="wrapper">
                    <ArrowBackIosOutlined className="sliderArrow left" style={{display: !isMoved && "none"}} onClick={() => handleClick("left")} />
                    <div className="container" ref={listRef}>
                        <Listitem index={0}/>
                        <Listitem index={1}/>
                        <Listitem index={2}/>
                        <Listitem index={3}/>
                        <Listitem index={4}/>
                        <Listitem index={5}/>
                        <Listitem index={6}/>
                        <Listitem index={7}/>
                        <Listitem index={8}/>
                        <Listitem index={9}/>
                    </div>
                    <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")} />
                </div>
            </div>
        </div>
    )
}

export default List
