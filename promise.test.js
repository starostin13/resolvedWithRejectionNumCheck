const getPromise = require('./promise');
const getRandomArray = require('./getRandomArray.js');
const resolvedWithRejectionNumCheck = require('./resolvedWithRejectionNumCheck.js');

test('maxRejectedNum is -1', async () => {
  let promises = getRandomArray();
  
  var result  = resolvedWithRejectionNumCheck(promises, -1).then(data => {
    expect(data).toMatch('acceptable');
  });
  
  return result;
});

test('maxRejectedNum is 100', async () => {
  let promises = getRandomArray();
  
  var result  = resolvedWithRejectionNumCheck(promises, -1).then(data => {
    expect(data).toMatch('acceptable');
  });
  
  return result;
});

test('maxRejectedNum is greater than int32', async () => {
  let promises = getRandomArray();
  
  var result  = resolvedWithRejectionNumCheck(promises, Number.MAX_SAFE_INTEGER + 1).then(data => {
    expect(data).toMatch('acceptable');
  });
  
  return result;
});

test('maxRejectedNum is null', async () => {
  let promises = getRandomArray();
  
  var result  = resolvedWithRejectionNumCheck(promises, null).then(data => {
    expect(data).toMatch('acceptable');
  });
  
  return result;
});

test('resolves if amount of rejected promises from promisesToHandle is not greater than 10', async () => {
  let promises = getRandomArray();
  
  var result  = resolvedWithRejectionNumCheck(promises, 10).then(data => {
    expect(data).toMatch('acceptable');
  });
  
  return result;
});

test('promisesToHandle is empty', async () => {
  let promises = [];
  
  var result  = resolvedWithRejectionNumCheck(promises, 10).then(data => {
    expect(data).toMatch('acceptable');
  });
  
  return result;
});

test('promisesToHandle is null', async () => {
  let promises = null;
  
  var result  = resolvedWithRejectionNumCheck(promises, 10).then(data => {
    expect(data).toMatch('acceptable');
  });
  
  return result;
});

test('promisesToHandle is undefined', async () => {
  let promises = undefined;
  
  var result  = resolvedWithRejectionNumCheck(promises, 10).then(data => {
    expect(data).toMatch('acceptable');
  });
  
  return result;
});