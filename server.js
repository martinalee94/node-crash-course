const http = require('http');
const fs = require('fs');
const _ = require('lodash');
// ex. app = FastAPI()
const server = http.createServer((req, res) => {
    console.log('request made');
    console.log(req.url, req.method);
    // lodash
    const num = _.random(0, 20);
    console.log(num)

    // Run only once
    const greet = _.once(() => {
        console.log('hello');
    });

    // set header content type
    // res.setHeader('Content-Type', 'text/plain')
    // res.write('hello, ninjas');

    // res.setHeader('Content-Type', 'text/html')
    // res.write('<p>hello, ninjas</p>')

    // send an html file
    res.setHeader('Content-Type', 'text/html')
    // fs.readFile('./views/index.html', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.write(data);
    //         //res.end(data) this also works
    //     }
    //     res.end();
    // });

    let path = './views/';
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            path += 'index.html';
            break;
        case '/about':
            res.statusCode = 200;
            path += 'about.html';
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            res.statusCode = 404;
            path += '404.html';
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            //res.end(data) this also works
        }
        res.end();
    });


});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})