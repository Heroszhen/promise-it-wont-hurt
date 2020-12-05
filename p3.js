var promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        let error = new Error('REJET !')
        //fulfill(error);
        reject(error);
      }, 300);
  });
  
  function onReject (error) {
    console.log(error.message);
  }

  promise.then(console.log,onReject);
  
  // Votre solution ici