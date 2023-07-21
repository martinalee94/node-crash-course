const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

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

// static files middleware
app.use(express.static('public')); // static file folder
// logging middleware
app.use(morgan('dev'));
// encoding request middleware for req.body
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    res.render('about');
})

// -------blog routes
app.use('/blogs', blogRoutes);
app.use('/reviews', reviewRoutes);

// 404
// Use this function for every incoming request
// 위에 다 지나고 내려와서 여기까지 오면 해당 함수 실행하는 것
app.use((req, res) => {
    res.status(404).render('404');
})
