import { ArrowDropDown, Search, Notifications } from "@mui/icons-material";
import "./navbar.scss"
import { useState } from "react";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return ()=> (window.onscroll = null);
    }

    
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""></img>
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New And Popular</span>
            <span>My List</span>

        </div>
        <div className="right">
        <Search className="icon"/>
        <span>KID</span>
        <Notifications className="icon"/>
        <img src="https://i.pinimg.com/originals/3f/70/9d/3f709d992830ae064bfc48ef69ec9dd9.jpg"></img>
        <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
                <span>Settings</span>
                <span>Logout</span>
            </div>
        </div>

        
        </div>
      </div>
    </div>
  )
}

export default Navbar
