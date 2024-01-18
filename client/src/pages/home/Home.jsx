import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import { useEffect, useState } from "react"
import axios from "axios"


const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(()=>{
    const getRandomLists = async ()=>{
      try{
        const res = await axios.get(`api/lists${type ? "?type="+type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzk3MDZkZTM5ZDgyNTQ4ODJmODhjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTUxNzY0MSwiZXhwIjoxNzA4MTA5NjQxfQ.NijWg5bGFkBY3TVlmcaxtrFKSdre7KvYNUEJs8xto6w"
          },
        });
        console.log(res.data);
        setLists(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  
  return (
    <div className='home'>
        <Navbar/>
        <Featured type={type}/>
        {
          lists.map((list)=>(
            list && list.title!=undefined && (
                  <List list={list} />
                )
            
          ))
        }
        
    </div>
  )
}

export default Home;
