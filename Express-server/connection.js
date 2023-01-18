const { Client } = require('pg')
 //creating new client ;
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'rootroot',
})
async function connecting() {
    await client
    .connect()
    .then(() => console.log('connected'))
    .catch((err) => console.error('connection error', err.stack));
}
(async()=>{
    await connecting();
})();
//connecting to data base;
// client.query("CREATE TABLE historyGames (games_id VARCHAR(255) PRIMARY KEY, name VARCHAR(255) NOT NULL, game_date DATE NOT NULL)" , (err,res)=>
// {
//   client.end();
//   if(err.message != null&&err.message ==='relation "historygames" already exists') console.log("DB historyGames already exsits");
// });

module.exports = client;