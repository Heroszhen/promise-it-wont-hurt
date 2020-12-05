//npm install q-io --save
//read(path, options)

var http = require("q-io/http");
var promise = http.read("http://localhost:1337/");

promise.then(value=>{
    console.log(JSON.parse(value));
});