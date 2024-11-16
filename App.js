const express = require('express');
const app = express();

const ContadorRouter = require('./Src/Routes');

app.use(express.static('Public'));
app.use(express.json());
app.use('/', ContadorRouter);

const PORT = 80;

app.listen(PORT, ()=>{
    console.log('iniciamos en ${PORT}')
});