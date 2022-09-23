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

// function appendFile(savPath, data) {
//     fs.appendFile(savPath, data, function (err) {
//         (err) ? console.log('Append Err: ', err) : console.log('Append Successfully!');
//     });
// }

writeFile('./abc.txt', 'Yahoo My First File...!');
readFile('./abc.txt');
// appendFile('./abc.txt', 'Abc Yhaoo My First File... 123');

// function readFile(srcPath) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(srcPath, 'utf8', function (err, data) {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data);
//             }
//         });
//     })
// }

// function writeFile(savPath, data) {
//     return new Promise(function (resolve, reject) {
//         fs.writeFile(savPath, data, function (err) {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve();
//             }
//         });
//     })
// }

// readFile("path").then(function(results){
//     results+=" test manipulation";
//     return writeFile("path",results);
//  }).then(function(){
//     //done writing file, can do other things
//  })