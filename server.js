const mysql = require('mysql2');
const { APPCENTER } = require('ci-info');
const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();

// Express middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connecting to database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySql Username, 
        user: 'root',
        //Your MySQL Password
        password:'@Xavier92939988', 
        database: 'election' 
    }, 
    console.log('Connected to the election database!')
);
//GET ALL CANDIDATES ON QUERY 
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });





//GET SINGLE CANDIDATES 

// db.query(`SELECT * FROM candidates WHERE id=1`, (err, row) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(row);
// });


//DELETE CANDIDATES 

    // db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    //     if (err){
    //         console.log(err);
    //     }
    //     console.log(result);
    // });

//CREATE A CANDIDATE 
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Pipion', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// the code below helps to see if Express server is connectedr

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});