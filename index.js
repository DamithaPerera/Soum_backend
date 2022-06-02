const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));




app.listen(port, () =>
    console.log('Example app listening on port 3000!'),
);

module.exports = app;
