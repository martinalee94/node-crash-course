const express = require('express');
const morgan = require('morgan')
// Set up express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');

// Change view directory(default is 'views')
// app.set('views', 'myviews');

// Listen for requests
app.listen(3000);

// middleware 1
// app.use((req, res, next) => {
//     console.log('new request made: ');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next(); // move on to the next
// })

// middleware 2
// app.use((req, res, next) => {
//     console.log('In the next middleware');
//     next(); // move on to the next
// })

// static files middleware
app.use(express.static('public')); // static file folder
// logging middleware
app.use(morgan('dev'));


app.get('/', (req, res) => {
    const blogs = [
        { title: "Yoshi finds eggs", snippet: 'Lorem ipsum dolor' },
        { title: "Mario finds stars", snippet: 'Lorem ipsum dolor' }
    ]
    res.render('index', { title: 'Home', blogs });
})

app.get('/about', (req, res) => {
    res.render('about');
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
