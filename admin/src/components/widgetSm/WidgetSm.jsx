import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUSers] = useState([]);

  useEffect(()=>{
    const getNewUsers = async ()=>{
      try{
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users?new=true`, {
        headers:{
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
    });
    setNewUSers(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getNewUsers();
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {newUsers.map((user) => (
  <li className="widgetSmListItem" key={user._id}>
    <img
      src={user.profilePic || "https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp2"}
      alt=""
      className="widgetSmImg"
    />
    <div className="widgetSmUser">
      <span className="widgetSmUsername">{user.username}</span>
    </div>
    <button className="widgetSmButton">
      <Visibility className="widgetSmIcon" />
      Display
    </button>
  </li>
))}

       
      
      </ul>
    </div>
  );
}
