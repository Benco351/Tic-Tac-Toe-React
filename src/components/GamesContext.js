import { createContext,useEffect,useState } from "react";
import axios from "axios";

const GamesContexts = createContext();
export const GamesContext=({children}) =>{
    const [Games,setGames] = useState([]);
    const [counter,setCounter] = useState(0);
    useEffect(() =>{
      axios.get('http://localhost:8082/').then(response =>
      {
        let data= [];
        
        response.data.forEach(element => {
              data.push(element);
        })
        setCounter(counter + data.length);
        setGames([...Games,data]);
       
      })
    },[]);

    useEffect(() =>{
      if(counter < Games.length)
      {
        axios.post('http://localhost:8082/',Games[Games.length -1]);

      }
    },[Games,counter]);
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