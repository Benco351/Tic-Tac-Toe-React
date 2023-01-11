import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Board from "./board";
import "./App.css";
import {GamesContext} from "./GamesContext";

const App = () => {

  return (
    <div>
      <div className="App">
        <GamesContext>
        <Routes>
          <Route path="/Board" element={<Board />} />
          <Route path="/" element={<Login />} />
        </Routes>
        </GamesContext>
      </div>
    
    </div>
  );
};

export default App;
