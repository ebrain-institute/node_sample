const url = require('url');

const myUrl = new URL(
    'http://mywebsite.com/hello.html?id=1010&status=active'
)

myUrl.searchParams.append('abc', '123')


console.log(myUrl);

// Loop through params
myUrl.searchParams.forEach((value, text) => console.log(`${value}: ${text}`));

