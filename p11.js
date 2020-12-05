function all(p1, p2){
    var counter  = 0;
    var tab  = [];
    var promise = new Promise(function (fulfill, reject) {
        p1.then(value=>{
            counter++;
            tab[0] = value;
            if(counter == 2)fulfill(tab);
        });
        p2.then(value=>{
            counter++;
            tab[1] = value;
            if(counter == 2)fulfill(tab);
        })
      
    });
    return promise;
}

all(getPromise1(),getPromise2()).then(console.log);