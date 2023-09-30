import { Add, PlayArrow, ThumbDown, ThumbDownOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import "./listitem.scss"
import { useState } from "react"

function Listitem({index}) {

const [isHovered, setIsHovered] = useState(false);
const trailer = "https://youtu.be/2QKg5SZ_35I";
  return (
    <div className="listitem" 
    style={{left: isHovered && index*225-50 + index*2.5}}
     onMouseEnter={()=>setIsHovered(true)}
     onMouseLeave={()=>setIsHovered(false)}>
      <img src="https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg" />
    
    {isHovered && (
      <>
      <iframe src="https://www.youtube.com/embed/2QKg5SZ_35I" title="JUMANJI: WELCOME TO THE JUNGLE - Official Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

<div className="itemInfo">
    <div className="icons">
        <PlayArrow className="icon"/>
        <Add className="icon"/>
        <ThumbUpAltOutlined className="icon"/>
        <ThumbDownOutlined className="icon"/>
    </div>
  
    <div className="itemInfoTop">
        <span>1 hour 14 mins</span>
        <span className="limit">+16</span>
        <span>1999</span>
    </div>
    <div className="desc">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>

    <div className="genre">Action</div>
</div>
</>)}
    
  </div>
  )
}

export default Listitem

