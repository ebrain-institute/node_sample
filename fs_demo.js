const fs = require('fs');
const path = require('path');

// Create a folder
fs.mkdir(path.join(__dirname, '/test'), {},  err =>{
    if (err) throw err; 
    console.log('Foler created!');
});

// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world', err=>{

    if (err) throw err; 
    console.log('File written!');
});

// Append to file
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello node js', err=>{

    if (err) throw err; 
    console.log('File written!');
})

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data)=>{
    if (err) throw err; 
    console.log(data)

});



// Rename file
fs.rename(
    path.join(__dirname, '/test', 'helloworld.txt'),
    path.join(__dirname, '/test', 'hello.txt'),
    err=>{
        if (err) throw err; 
    
    }
    );