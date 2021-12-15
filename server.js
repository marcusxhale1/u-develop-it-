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