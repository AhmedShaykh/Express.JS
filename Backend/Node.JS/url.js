const url = require('url');

const myURL = new URL("https://ahmx.eth:4000/wallet?a=x#TH44546533432YU");

console.log(myURL);
console.log(myURL.href);
console.log(myURL.origin);
console.log(myURL.host);
console.log(myURL.protocol);
console.log(myURL.port);
console.log(myURL.pathname);
console.log(myURL.search);
console.log(myURL.searchParams);
console.log(myURL.hash);
console.log(myURL.toJSON());
console.log(myURL.toString());