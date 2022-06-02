const express = require('express');
const cors = require('cors');

const dbConnection = require('./connection/db')

const port = 3000;
const app = express();

// DB connection
dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));




app.listen(port, () =>
    console.log('Example app listening on port 3000!'),
);

module.exports = app;
