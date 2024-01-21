import { ArrowDropDown, Search, Notifications } from "@mui/icons-material";
import "./navbar.scss"
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

    window.onscroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
      return () => (window.onscroll = null);
  }


    
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""></img>
            <Link to="/" className="link">
              <span>Homepage</span>
            </Link>
            <Link to="/series" className="link">
              <span>Series</span>
            </Link>
            <Link to="/movies" className="link">
              <span>Movies</span>
            </Link>
            
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
                <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
        </div>

        
        </div>
      </div>
    </div>
  )
}

export default Navbar
