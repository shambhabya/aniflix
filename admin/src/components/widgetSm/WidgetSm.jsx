import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUSers] = useState([]);

  useEffect(()=>{
    const getNewUsers = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/api/users?new=true", {
        headers:{
          token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzk3MDZkZTM5ZDgyNTQ4ODJmODhjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMDA2NTMxMiwiZXhwIjoxNzAyNjU3MzEyfQ.-a0s5jx80wuP6Wns2USa1ryJONFqOIYSH7m9hyUdcCY"
      },
    });
    setNewUSers(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getNewUsers();
  }, [])
  console.log(newUsers);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {newUsers.map((user) => (
  <li className="widgetSmListItem" key={user.id}>
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
