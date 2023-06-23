function getPromise() {
  var promise = new Promise(function (resolve, reject) {
    if (Math.random() < 0.5) {
      resolve('resolve');
    } else {
      reject('reject');
    }
  });

  return promise;
}

module.exports = getPromise;