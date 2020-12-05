
  // Et dans le même genre…
  /*
  var promise = new Promise(function (fulfill, reject) {
    reject(new Error('OH LE SOUCI'));
  });
  */
 var promise = Promise.reject(new Error('OH LE SOUCI'));
  

  promise.catch((error)=>{
      console.log(error.message);
  });