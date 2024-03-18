const readLine = require('readline');

const r1 = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});


r1.question('Please enter your name', (name)=>{
    console.log("Your name is"+ name);
    r1.close()
    process.exit(0)
})