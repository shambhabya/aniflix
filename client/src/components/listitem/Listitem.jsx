import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item}) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});


  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("api/movies/find/" + item, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzk3MDZkZTM5ZDgyNTQ4ODJmODhjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTUxNzY0MSwiZXhwIjoxNzA4MTA5NjQxfQ.NijWg5bGFkBY3TVlmcaxtrFKSdre7KvYNUEJs8xto6w"
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log("dw");
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to="/watch" state={{movie: movie}}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src="https://picsum.photos/id/237/200/300" alt="" />
        {isHovered && (
          <>
          <video className="video" autoPlay progress controls src="http://media.w3.org/2010/05/sintel/trailer.mp4" />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

// token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzk3MDZkZTM5ZDgyNTQ4ODJmODhjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMDA2NTMxMiwiZXhwIjoxNzAyNjU3MzEyfQ.-a0s5jx80wuP6Wns2USa1ryJONFqOIYSH7m9hyUdcCY"