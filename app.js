const express = require('express');
const { result } = require('lodash');
require('./server');
const morgan = require('morgan')
// const Blog = require('./models/blog'); 
//express app
const app = express();

const http  = require("http");


//register view engine
app.set('view engine', 'ejs');

//listen request
app.listen(3000);

//midleware and static files
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

//custom middleware
// app.use((req, res, next) => {
//     console.log('New request made');
//     console.log('host', req.hostname);
//     console.log('path', req.path);
//     console.log('method', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Next Middleware');

//     next();
// });

//
const mysql = require('mysql');
//connection
const dbconnect = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'me', 
    database : 'nodedb'
});

//connect
dbconnect.connect((err) => {
    if(err){
        throw err;
    }
    console.log("Mysql Connected...");
});

//mysql

// const mysql = require('mysql');

//db connection
// const dbconnect = require('./dbcon');


//create db

app.get('/createdb', (req, res) => {
    let sql = 'create database nodedb';
    dbconnect.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("DB created");
    });
});

// create table
app.get('/createtable', (req, res) => {
    let sql = 'create table posts(id int auto_increment, title varchar(255), body varchar(255), primary key(id))';
    dbconnect.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Table created');
    });
});

//insert post
app.post('/blogs', (req, res) => {
    // console.log(req.body);
    // const blog = new Blog(req.body);
    // blog.save()
    //     .then((result) => {
    //        res.redirect('/') 
    //     }) 
    //     .catch((err) => {
    //         console.log(err);
    //     });
    let post = req.body;
    let sql = 'insert into posts set ?';
    let query = dbconnect.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.redirect('/');
    });
});

//show posts in homepage
app.get('/', (req, res) =>{
    let results;
    // const blogs = [
    //     {title: 'Shit stinks', body: 'Lorem ipsum dolor sit amet.'},
    //     {title: 'Shit stinks', body: 'Lorem ipsum dolor sit amet.'},
    //     {title: 'Shit stinks', body: 'Lorem ipsum dolor sit amet.'},
    // ]
    let sql = 'select * from posts';
    let blogs;
    let query = dbconnect.query(sql, (err, rows, fields) => {
        blogs = rows;
        // res.json(blogs)

        res.render('index', {blogs});
    });
   
    // res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/blog/:id', (req, res) =>{
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let blog;
    let query = dbconnect.query(sql, (err, rows) => {
        blog = rows;
        if(err) throw err;
        // console.log(blog);
        res.render('blog', {blog});
    })
});

app.get(`/blog/update/:id`, (req, res) => {
    let blog_id = req.params.id;
    let sql = `SELECT * FROM posts WHERE id = ${blog_id}`;
    console.log(blog_id);
    let query = dbconnect.query(sql, (err, rows) => {
        if(err) throw err;
        console.log(rows);
        res.render('update', { blog: rows });
    // res.render('update',{blog});
    });

});

app.post('/blog/update/:id', (req, res) => {
    let post = req.body;
    let blog_id = req.params.id;
    console.log(post);
    console.log(blog_id);
    let sql = `update posts set ? WHERE id = ${blog_id} `;
    console.log(sql);
    // let query = dbconnect.query(sql, post, (err, result) => {
    //     if(err) throw err;
    //     console.log(result);
    //     res.redirect('/');
    // });
});


app.get('/about', (req, res) =>{
    res.render('about');
    // res.sendFile('./views/about.html', {root: __dirname});
});

app.get('/blogs/create',(req, res) => {
    res.render('create');
});

//redirects

// app.get('/about-me', (res, req) => {
//     res.redirect('/about')
// })

//404

app.use((req, res) => {
    res.status(404).render('404');
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
});