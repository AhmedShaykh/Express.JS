var fs = require('fs');

function writeFile(savPath, data) {
    fs.writeFile(savPath, data, function (err) {
        (err) ? console.log('Write Err: ', err) : console.log('Write Successfully!');
    });
}

function readFile(srcPath) {
    fs.readFile(srcPath, 'utf8', function (err, data) {
        (err) ? console.log('Read Err: ', err) : console.log('Read File: ', data);
    });
}

function appendFile(savPath, data) {
    fs.appendFile(savPath, data, function (err) {
        (err) ? console.log('Append Err: ', err) : console.log('Append Successfully!');
    });
}

writeFile('./abc.txt', 'My First Title...');
readFile('./abc.txt');
appendFile('./abc.txt', ' Node.JS!');
readFile('./abc.txt');