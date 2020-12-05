var http1 = require('q-io/http');

http1.read("http://localhost:7000/")
.then(value=> {
  return http1.read("http://localhost:7001/" + value);
})
.then(value=> {
  console.log(JSON.parse(value));
});
