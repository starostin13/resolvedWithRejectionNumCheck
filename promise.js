function getPromise() {
  var promise = new Promise(function (resolve, reject) {
    console.log('!!!EXECUTING!!!');
    if (Math.random() < 0.5) {
      resolve('peanut butter');
    } else {
      reject('peanut-butter');
    }
  });

  return promise;
}

module.exports = getPromise;