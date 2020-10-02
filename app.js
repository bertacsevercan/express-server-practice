/*const express = require('express') //importing the express server
const app = express()
const bodyParser = require('body-parser'); //importing the json body parser to show on console
app.use(bodyParser.json()); 
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!!!!')
})

var dogsArr = []
app.post('/dogs', function(req, res) {
  var dog = req.body;
  console.log(dog);
  dogsArr.push(dog);
  res.send("Dog added!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})*/



const mysql = require('mysql')

const connection = mysql.createConnection({  //establish connection w/ server
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
})

connection.connect()  


// SELECT


connection.query('SELECT * FROM jla', function (err, rows, fields) {
  if (err) throw err

  rows.map(row => console.log(row))
})


//INSERT INTO
/*
connection.query("INSERT INTO jla VALUES('NULL','Wonder-woman', 'Temiscera', '857349319')", function (err, rows, fields) {
  if (err) throw err
  console.log(rows)
})
*/

//UPDATE TABLE
/*connection.query("UPDATE persontest SET name = 'Cyborg' WHERE id = '3' "),  function (err, rows, fields) {
  if (err) throw err
}*/


//DELETE FROM
/*
connection.query('DELETE  FROM persontest WHERE name = "bertaç" ', function (err, rows, fields) {
  if (err) throw err
})
*/

/*
connection.query('SELECT * FROM persontest', function (err, rows, fields) {
  if (err) throw err

  rows.map(row => console.log(row))
})
*/


//CREATE TABLE
/*
connection.query(`CREATE TABLE AVENGERS (
  ID INT NOT NULL AUTO_INCREMENT,
  NAME VARCHAR (20) NOT NULL,
  POWER VARCHAR (50),
  CITY VARCHAR (50),
  PRIMARY KEY (ID)
)`), function (err, rows, fields) {
  if(err) throw err

}
*/

/*
connection.query("INSERT INTO AVENGERS VALUES('NULL', 'Iron-Man', 'Super genius, robot armor dude', 'NYC')"), function (err, rows, fields){
  if (err) throw err

}
*/

/*
connection.query('SELECT * FROM AVENGERS', function (err, rows, fields) {
  if (err) throw err

  rows.map(row => console.log(row))
})  
*/


//ALTER TABLE
/*
connection.query("ALTER TABLE persontest RENAME TO JLA"), function (err){
  if (err) throw err
}*/

connection.end()






/*
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' 
});




(async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const person = await test.findAll();
    console.log("All people:", JSON.stringify(person, null, 2))
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()

*/

