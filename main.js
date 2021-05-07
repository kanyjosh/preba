const express = require("express");
const morgan = require("morgan");
const maorga = require('morgan')
const app = express();

app.use(morgan('dev'))

app.get('/', (req, res) => res.send('hola'))

app.listen(3000 , () => {
    console.log("server on port http://localhost:3000");
})




