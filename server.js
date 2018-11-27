/**
 * @author Maryam Keshavarz
 * @description using express mongo socket.io deploy on heroku
 */
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const db = require("./model");

const PORT =  process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./sockets/todo-sockets')(io);
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

db.sequelize.sync().then(function() {
    server.listen((PORT), () => {console.log(`App is now listening on PORT ${PORT}`)});
});