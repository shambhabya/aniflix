import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"

function Featured() {
  return (
    <div className="featured">
        <img src="https://images.squarespace-cdn.com/content/v1/59d7e2c7e45a7c0ce235bb55/58a05e66-ab47-4ab1-b6fd-f42efb4a51df/Film-Review-The-Matrix-Resurrections.jpg?format=2500w"></img>
        <div className="info">
            <img src="https://www.themoviedb.org/t/p/original/kA8phmxG7h4BIN061fiutckq9Ho.png"/>
            <span className="dsc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta ante eget laoreet scelerisque. Donec elit elit, faucibus ac elit non, pellentesque efficitur tellus. Ut porta nunc neque, at dictum urna tincidunt nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ul
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured
