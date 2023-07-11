const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt')

readStream.on('data', (chunk) => {
    console.log('------------new chunk---------')
    console.log(chunk);

    writeStream.write('\n------new chunk \n');
    writeStream.write(chunk);
})

// piping
// readStream chunk passes to writeStream
// This is the same process above
readStream.pipe(writeStream);