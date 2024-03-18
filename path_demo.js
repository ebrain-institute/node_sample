const path = require('path');

// Base file path
console.log(__filename);

//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File Extension
console.log(path.extname(__filename));

//File path object
console.log(path.parse(__filename));

//Genarate path
console.log(path.join(__dirname, 'test', 'hello.html'));