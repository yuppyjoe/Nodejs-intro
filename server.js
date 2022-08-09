const http = require('http');
const fs = require('fs');
const _ =require('lodash');

const server = http.createServer((req, res) => {
    //lodash

    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log("Hello");
    })

    greet()

    res.setHeader('Content-Type', 'text/html')
    // res.write('hello there')
    // res.end()
    // console.log('request made');
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.ejs'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.ejs'
            res.statusCode = 200;
            break;
        case '/about-me':
            // path += 'about.ejs'
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        
        default: 
             path += '404.ejs'
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }
        res.write(data);
        res.end();
    });
});

server.listen(3001, 'localhost', () =>{
    console.log("Listening port: 3001");
});