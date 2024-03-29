import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { useNavigate } from "react-router-dom";
import { useStyles } from '../assets/styles';



const Login = () => {
  const history = useNavigate();
  const classes = useStyles();
  const [firstName, setfirstName] = useState("");
  const [secondName, setsecondName] = useState("");
  const [Error, setError] = useState("");
  const [Load, setLoad] = useState(false);
  const checkFirstInput = (e) => {
    setfirstName(e.target.value);
  };
  const checkSecondInput = (e) => {
    setsecondName(e.target.value);
  };
  const handleStartGame = () => {
    firstName === secondName
      ? setError("You want to play against yourself?")
      : setError("");

    if (firstName.length <= 0 || secondName.length <= 0) {
      setError(" Please enter the player names -");
      return;
    } else {
      setLoad(true);
    }
  };

  useEffect(() => {
    if (Load && Error === "") {
      history("/board", {
        state: {
          name1: firstName,
          name2: secondName,
        },
      });
    }
  }, [Load, history, Error, firstName, secondName]);

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h1 className={classes.title}>Tic Tac Toe-React</h1>
          <h3>{Error}</h3>
          <h3>
            Player 1 :{" "}
            <Input
              id="Name1"
              value={firstName}
              onChange={checkFirstInput}
            ></Input>
          </h3>
          <h3>
            Player 2 :{" "}
            <Input
              id="Name2"
              value={secondName}
              onChange={checkSecondInput}
            ></Input>
          </h3>
          <Button
            id="start-btn"
            className={classes.button}
            color="inherit"
            variant="contained"
            onClick={handleStartGame}
          >
            start game
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default Login;
