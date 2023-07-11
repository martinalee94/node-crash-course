const fs = require('fs');

// read files(asyncronous)
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

console.log('last line');

// write files
fs.writeFile('./docs/blog1.txt', "Write an new line", () => {
    console.log('File was written.');
})
fs.writeFile('./docs/blog2.txt', "Write an new line", () => {
    console.log('A new file was created.');
})

// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// delete files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
} else {
    fs.writeFile('./docs/deleteme.txt', 'deleteme txt!', (err, data) => {
        if (err) {
            console.log(err);
        }
    })
}