const mysql = require('mysql2');
const { APPCENTER } = require('ci-info');
const express = require('express');
const { rosybrown } = require('color-name');
const { appendToMemberExpression } = require('@babel/types');
const inputCheck = require('./inputCheck');
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
// app.get('/api/candidate/:id', (req, res) => {
//     const sql = `SELECT * FROM candidates WHERE id = ?`;
//     const params = [req.params.id];
  
//     db.query(sql, params, (err, row) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: row
//       });
//     });
//   });


// CREATE THE CANDIDATE 
app.post('/api/candidate', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'industry_connected');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }

    
    
    const sql = `INSERT INTO candidates (first_name, last_name, industry_connected)
  VALUES (?,?,?)`;
  const params = [body.first_name, body.last_name, body.industry_connected];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error : err.message });
        }
        res.json({
            message: 'success',
            data: body
        });
    });
  });





  
  


//GET SINGLE CANDIDATES 

// db.query(`SELECT * FROM candidates WHERE id=1`, (err, row) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(row);
// });


//DELETE CANDIDATES 

// app.delete('/api/candidate/:id', (req, res) => {
//     const sql = `DELETE FROM candidates WHERE id = ?`;
//     const params = [req.params.id];
  
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.statusMessage(400).json({ error: res.message });
//       } else if (!result.affectedRows) {
//         res.json({
//           message: 'Candidate not found'
//         });
//       } else {
//         res.json({
//           message: 'deleted',
//           changes: result.affectedRows,
//           id: req.params.id
//         });
//       }
//     });
//   });



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