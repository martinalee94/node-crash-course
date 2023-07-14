const express = require('express');

// Set up express app
const app = express();



// Listen for requests
app.listen(3000);


app.get('/', (req, res) => {
    // res.send('<p>Home page</p>');
    res.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    res.sendFile('./views/about.html', { root: __dirname });

})

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404
// Use this function for every incoming request
// 위에 다 지나고 내려와서 여기까지 오면 해당 함수 실행하는 것
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})
