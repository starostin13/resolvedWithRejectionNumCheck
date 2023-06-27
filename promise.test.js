const getPromise = require('./promise');
const resolvedWithRejectionNumCheck = require('./resolvedWithRejectionNumCheck.js');

test('resolves if amount of rejected promises from promisesToHandle is not greater than 10', async () => {
  var random = Math.floor(Math.random() * 10);
  let promises = [...new Array(random)];
  console.log('brfore promises created');
  for(let i=0; i < random; i++) {
    promises[i] = () => getPromise();
  }
  
  console.log('brfore promises then-ed');
  var result  = resolvedWithRejectionNumCheck(promises, 10).then(data => {
    console.log(`Data? ${data}`);
    expect(data).toMatch('acceptable');
  });
  
  return result;
});