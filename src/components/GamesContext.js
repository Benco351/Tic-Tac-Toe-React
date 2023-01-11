import { createContext,useEffect,useState } from "react";


const GamesContexts = createContext();
export const GamesContext=({children}) =>{
    const [Games,setGames] = useState([]);

    useEffect(() =>{
      let data = JSON.parse(localStorage.getItem("games"));
      if(data)
      {
        setGames(data);
      }
    },[]);

    useEffect(() =>{
      if(Games.length)
      {
        localStorage.setItem("games", JSON.stringify(Games));
      }
    },[Games]);
    const saveGame =(obj)=>{
      setGames((games)=> [...games,JSON.stringify(obj)]);
    }
    return (
        <GamesContexts.Provider value={{Games,saveGame}}>
            {children}
        </GamesContexts.Provider>
    )
}
export default GamesContexts; 