const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

const hostname = '127.0.0.1';
const port = 3000;
const home  = fs.readFileSync("./home.html");
const about = fs.readFileSync("./about.html");
const services = fs.readFileSync("./service.html");
const contact = fs.readFileSync("./contact.html");

const server = http.createServer((req, res)=>{
    console.log(req.url);
    

    res.statusCode = 200;
    res.setHeader('content-type','text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/service'){
        res.end(service);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    
});

server.listen(port, hostname, () => {
    console.log('server running at http://${hostname}:${port}/');
});