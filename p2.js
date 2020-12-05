'use strict';

//var Promise = require('es6-promise').Promise;

let p = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        fulfill('ACCOMPLIE !');
      }, 300);
  });

p.then((value) => {
    console.log(value);
    // expected output: "foo"
});

//npm install es6-promise