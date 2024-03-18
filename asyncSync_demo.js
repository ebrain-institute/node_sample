const fs = require('fs');
const path = require('path');


// Sync way to read a file 
let textIn = fs.readFileSync(path.join(__dirname, '/test', 'hello.txt'), 'utf8');

// console.log(textIn)
// console.log('Hello');

// Async way to read a file

// Call back hell
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data)=>{
//     if (err) throw err; 
//     console.log(data)
//     fs.readFile(path.join(__dirname, data.id, 'hello.txt'), 'utf8', (err, student)=>{
//         if (err) throw err; 
//         console.log(data)
            
//         fs.readFile(path.join(__dirname, data.id, 'hello.txt'), 'utf8', (err, student)=>{
//             if (err) throw err; 
//             console.log(data)
                
//             fs.readFile(path.join(__dirname, student.id, 'hello.txt'), 'utf8', (err, class)=>{
//                 if (err) throw err; 
//                 console.log(data)
                    
            
//             }
//         }
//     }

});

console.log('Helow')

// Why Async
// Non-blocking IO Model