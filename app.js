const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// Set up express app
const app = express();

// Connect to DB
require('dotenv').config()

const dbURI = `mongodb+srv://${process.env.USER_ID}:${process.env.PASSWORD}@cluster0.bilp9sw.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(dbURI).then((res) => {
    console.log('connected to db');
    // Listen for requests
    app.listen(3000);
}).catch((err) => {
    console.log(err);
});

// Register view engine
app.set('view engine', 'ejs');

// Change view directory(default is 'views')
// app.set('views', 'myviews');


/*
middleware 1
app.use((req, res, next) => {
    console.log('new request made: ');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next(); // move on to the next
})

middleware 2
app.use((req, res, next) => {
    console.log('In the next middleware');
    next(); // move on to the next
})
*/

// static files middleware
app.use(express.static('public')); // static file folder
// logging middleware
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
/*
app.get('/add-blog', (req, res) => {
    const blog = new Blog({ title: "Mario finds stars", snippet: 'Lorem ipsum dolor', body: 'Lorem ipsum dolor' });
    blog.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
})

app.get('/all-blogs', (req, res) => {
    Blog.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
})

app.get('/single-blog', (req, res) => {
    Blog.findById(req.id).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
})
*/

app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    res.render('about');
})

// -------blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 }) // descending order
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result });
        })
        .catch((err) => {
            console.log(err);
        })

})

app.get('/blogs/create', (req, res) => {
    res.render('create');

})

// 404
// Use this function for every incoming request
// 위에 다 지나고 내려와서 여기까지 오면 해당 함수 실행하는 것
app.use((req, res) => {
    res.status(404).render('404');
})
