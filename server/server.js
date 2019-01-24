var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var userController = require('./controllers/user.controller');

var bodyParser = require('body-parser');
var app = express();
mongoose.connect('mongodb://localhost:27017/Users', {useNewUrlParser: true})
.then(() => console.log("Connected"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());

app.post('/user',userController.addUser);
app.get('/users',userController.getUsers);
app.get('/user/:id',userController.getUserById);
app.listen(4000);
