import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"
import { useEffect, useState } from "react"
import axios from "axios"

function Featured({type}) {

    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
          try {
            const res = await axios.get(`api/movies/random?type=${type}`, {
              headers: {
                token:
                  "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
              },
            });
            setContent(res.data[0]);
          } catch (err) {
            console.log(err);
          }
        };
        getRandomContent();
      }, [type]);

  return (
    <div className="featured">
    {type && (
        <div className="category">
            <span>{type === "movies" ? "Movies" : "Series"}</span>
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

        <img src={content.img}></img>
        <div className="info">
            <img src={content.imgSm}/>
            <span className="dsc">
           {content.desc}
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
