function getPromise() {
  var promise = new Promise(function (resolve, reject) {
    console.log('1');
      if (Math.random() < 0.5) {
        console.log('2');
        resolve('resolve');
      } else {
        console.log('3');
        reject('el\'rejecto');
      }
  });

  console.log('4');
  return promise;
}

module.exports = getPromise;