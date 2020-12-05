function parsePromised(){
    var promise = new Promise(function (fulfill, reject) {
        try {
            fulfill(JSON.parse(process.argv[2]));
          } catch (e) {
            reject(e);
          }
      
      });
      return promise;
}

function onReject(e){
    console.log("Error : " + e.message);
}

parsePromised().then(null,onReject);