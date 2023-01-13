/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import React, { useEffect, useState } from "react";
import Patterns from "../assets/constants";
import { useLocation } from "react-router-dom";
import Square from "./Square";
import { useContext } from "react";
import GamesContexts from "./GamesContext";
import WinTable from "./WinsTable";
const Board = () => {
  const location = useLocation();
  const { saveGame } = useContext(GamesContexts);
  let winObj = {};
  const firstName = location.state.name1;
  const secondName = location.state.name2;
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };
  useEffect(() => {
    checkWin();
    checkIfTie();
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        let date = new Date(Date.now()).toISOString();
        player === "X"
          ? winObj = { Winner: firstName, GameDate: date }
          : winObj = { Winner: secondName, GameDate: date };
        setResult({ winner: player, state: "Won" });
        saveGame(winObj);
      }
    });
  };
  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      winObj = { Winner: "Draw", GameDate: new Date(Date.now()).toISOString() };
      setResult({ winner: "No One", state: "Tie" });
      saveGame(winObj);
    }
  };
  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }
        return val;
      })
    );
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  };

  return (

    <>
      <div className="container">
        <h1>
          {firstName} versus {secondName}
        </h1>
      </div>
      <div className="App">
        <div className="board">
          {Array(3).fill(null).map((_, row) => (
            <div key={row} className="row">
              {Array(3).fill(null).map((__, col) => {
                const idx = row * 3 + col;
                return (
                  <Square
                    key={idx}
                    val={board[idx]}
                    chooseSquare={() => {
                      chooseSquare(idx);
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <h2>CurrPlayer: {player === "X" ? firstName : secondName}</h2>
        <button
          id="reset-btn"
          color="inherit"
          variant="contained"
          onClick={restartGame}
        >
          Restart
        </button>
      </div>
      <div className="table">
        <WinTable />
      </div>
    </>


  );
};
export default Board;
