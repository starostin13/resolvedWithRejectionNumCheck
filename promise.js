function getPromise() {
  var promise = new Promise(function (resolve, reject) {
      if (Math.random() < 0.5) {
        resolve('resolve');
      } else {
        reject('el\'rejecto');
      }
  });
  
  return promise;
}

module.exports = getPromise;