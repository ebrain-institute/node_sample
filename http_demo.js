const http = require('http');
const fs = require('fs');
const path = require('path');

// Create server object

const PORT = process.env.PORT || 8080; 

const server = http.createServer( (req, res) => {

    if(req.url === '/'){
        
        fs.readFile(
            path.join(__dirname, 'public', 'index.html' ),
            (err, content)=>{
                if(err) throw err;
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.end(content)
            }
        );
    }
    if(req.url === '/api/users'){

        const users = [
            {name: 'jhon', age: 40},
            {name: 'jhon', age: 40},
        ];

        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(users));
        
    }
  });

  server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));