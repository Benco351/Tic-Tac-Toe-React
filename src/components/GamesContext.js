import { createContext,useEffect,useState } from "react";
import axios from "axios";

const GamesContexts = createContext();
export const GamesContext=({children}) =>{
    const [Games,setGames] = useState([]);

    useEffect(() =>{
      axios.get('http://localhost:8082/').then(response =>
      {
        let data= [];
        response.data.forEach(element => {
              data.push(element);
        })
        setGames([...Games,data]);
      })
    },[]);

    useEffect(() =>{
      if(Games.length>0)
      {
        axios.post('http://localhost:8082/',Games);

      }
    },[Games]);
    const saveGame =(obj)=>{
      setGames((games)=> [...games,obj]);
    }
    return (
        <GamesContexts.Provider value={{Games,saveGame}}>
            {children}
        </GamesContexts.Provider>
    )
}
export default GamesContexts; 