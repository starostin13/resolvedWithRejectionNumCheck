const getPromise = require('./promise');
const resolvedWithRejectionNumCheck = require('./resolvedWithRejectionNumCheck.js');

test('maxRejectedNum is -1', async () => {
  var random = Math.floor(Math.random() * 10);
  let promises = [...new Array(random)];
  
  for(let i=0; i < random; i++) {
    promises[i] = () => getPromise();
  }
  
  var result  = resolvedWithRejectionNumCheck(promises, -1).then(data => {
    expect(data).toMatch('acceptable');
  });
  
  return result;
});

test('maxRejectedNum is 100', async () => {
  var random = Math.floor(Math.random() * 10);
  let promises = [...new Array(random)];
  
  for(let i=0; i < random; i++) {
    promises[i] = () => getPromise();
  }
  
  var result  = resolvedWithRejectionNumCheck(promises, -1).then(data => {
    expect(data).toMatch('acceptable');
  });
  
  return result;
});

test('maxRejectedNum is null', async () => {
  var random = Math.floor(Math.random() * 10);
  let promises = [...new Array(random)];
  
  for(let i=0; i < random; i++) {
    promises[i] = () => getPromise();
  }
  
  var result  = resolvedWithRejectionNumCheck(promises, null).then(data => {
    expect(data).toMatch('acceptable');
  });
  
  return result;
});

test('resolves if amount of rejected promises from promisesToHandle is not greater than 10', async () => {
  var random = Math.floor(Math.random() * 10);
  let promises = [...new Array(random)];

  for(let i=0; i < random; i++) {
    promises[i] = () => getPromise();
  }
  
  var result  = resolvedWithRejectionNumCheck(promises, 10).then(data => {
    expect(data).toMatch('acceptable');
  });
  
  return result;
});