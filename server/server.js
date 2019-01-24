var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var userController = require('./controllers/user.controller');
var postController = require('./controllers/post.controller');
var studentController = require('./controllers/student.controller');
var subjectController = require('./controllers/subject.controller');

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
app.put('/updateuser',userController.updateUser);
app.delete('/deleteuser/:id',userController.deleteuser);

app.post('/post',postController.addPost);
app.get('/posts',postController.getPosts);
app.get('/post/:id',postController.getPostById);
app.put('/updatepost',postController.updatePost);
app.delete('/deletepost/:id',postController.deletePost);

app.post('/student',studentController.addStudent);
app.get('/students',studentController.getStudents);
app.get('/student/:id',studentController.getStudentById);
app.put('/updatestudent',studentController.updateStudent);
app.delete('/deletestudent/:id',studentController.deleteStudent);

app.post('/subject',subjectController.addSubject);
app.get('/subjects',subjectController.getSubjects);
app.get('/subject/:id',subjectController.getSubjectById);
app.put('/updatesubject',subjectController.updateSubject);
app.delete('/deletesubject/:id',subjectController.deleteSubject);
app.listen(4000);
