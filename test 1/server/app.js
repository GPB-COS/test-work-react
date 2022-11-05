require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
let db = require('./db');
const PORT = 3002;
const app = express();

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(morgan('dev'));

//Получаем массив данных с db
app.get('/rooms', (req, res) => {
    const rooms = db.map(el =>  ({id:el.id, room:el.room, options:el.options, text:el.text}));
    res.json(rooms);
});

app.get('/rooms/:id', (req, res) => {
    const room = db.find(el => el.id === +req.params.id)
    console.log(room);
    res.json({devices: room?.devices});
});

app.listen(PORT, ()=>{
    console.log('Server has been started on PORT ' + PORT)
})