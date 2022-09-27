var http = require('http');
var courses = [{ id: 1, name: 'Node.JS' }, { id: 2, name: 'Nest.JS' }];
var users = ['Client', 'Server'];

const port = process.env.PORT || 4000;

var server = http.createServer(function (request, response) {
    console.log('Got a Request! ', request.url);

    if (request.url === '/') {
        response.writeHead(201, { "Content-Type": "text/html" });
        response.end('<h1>Home Page</h1>');
    }
    else if (request.url === '/api/courses') {
        response.write(JSON.stringify(courses));
        response.end();
    }
    else if (request.url === '/api/users') {
        response.write(JSON.stringify(users));
        response.end();
    }
    else {
        response.write('<h1>Hello World</h1> <h2>' + request.url + '</h2>');
        response.end();
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});