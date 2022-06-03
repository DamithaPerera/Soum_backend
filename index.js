const express = require('express');
const cors = require('cors');

const dbConnection = require('./config/db')

const product = require('./module/product/product.router');

const port = 3000;
const app = express();

// DB connection
dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/v1/product', product);


app.listen(port, () =>
    console.log('Example app listening on port 3000!'),
);

module.exports = app;
