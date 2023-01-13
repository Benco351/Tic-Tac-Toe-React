var express = require('express');
const fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = fs.readFileSync('./history.json');
  const history = JSON.parse(data);
  res.json(history);
});
router.post('/',function(req,res) {
  const data = req.body;
  fs.writeFileSync('./history.json', JSON.stringify(data),(err) =>{
    if(err) throw err;
    console.log('Added data');
  });
  res.send("ok");
});
module.exports = router;
