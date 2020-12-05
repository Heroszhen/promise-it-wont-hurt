function attachTitle(argument1){
    return "DR. " + argument1;
}

var promise = Promise.resolve('MANHATTAN');

promise
.then(attachTitle)
.then(console.log);