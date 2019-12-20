const http = require('http');
const fs = require('fs');
const url =require('url');

const server = http.createServer((request, response) => {
    const path =url.parse(request.url).pathname;

    if(path === '/'){
        fs.readFile('index.html', (err, data) => {
            response.writeHead(200,{
                'Content-Type': 'text/html'
            })
            response.write(data.toString());
            response.end();
        })

    }
    else{
        response.writeHead(404,{
            'Content-Type':'temt/plain'
        });
        response.write('Not found!');
        response.end();
    }
});

server.listen(8081);
console.log('Listening at localhost:8081');
