var { v4 } = require('uuid');
var express = require('express');
const client = require('../connection');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  client.query('SELECT historygames.name AS Winner, historygames.game_date AS GameDate FROM historygames ORDER BY games_id ASC', (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
    console.log(err);
    client.end();  
  });
});
router.post('/', function (req, res) {
  const data = req.body;
  console.log(data);
  let inseryQuery = `INSERT INTO historygames(games_id, name, game_date) VALUES($1, $2, $3)`;
  let values = [v4(), data[0].winner, data[0].gamedate.slice(0, 10)];
  client.query(inseryQuery, values, (err, result) => {
    if (!err) {
      res.send('Insertion was succesfull');
      client.end();
    } else {
      console.log(err);
    }
  });
});
module.exports = router;
