import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"

function Featured({type}) {
  return (
    <div className="featured">
    {type && (
        <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
                <option>Genre</option>
                <option value="drama">Drama</option>
                <option value="action">Action</option>
                <option value="romance">Romance</option>
                <option value="science-fiction">Science Fiction</option>
                <option value="horror">Horror</option>
                <option value="fantasy">Fantasy</option>
                <option value="mystery">Mystery</option>
                <option value="thriller">Thriller</option>
                <option value="animation">Animation</option>
                <option value="documentary">Documentary</option>
                <option value="crime">Crime</option>
                <option value="musical">Musical</option>
                <option value="family">Family</option>
                <option value="western">Western</option>
                <option value="historic">Historic</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                
                
            </select>
        </div>
    )}

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
