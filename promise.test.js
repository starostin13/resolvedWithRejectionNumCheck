const getPromise = require('./promise');
const resolvedWithRejectionNumCheck = require('./resolvedWithRejectionNumCheck.js');

test('resolves if amount of rejected promises from promisesToHandle is not greater than the maxRejectedNum value', async () => {
  var random = Math.floor(Math.random() * 10);

  console.log('brfore promises created');
  //const promises = [...new Array(random)].map(()=> getPromise());
  //const promises = () => getPromise(); //WORK CORRECTLY
  console.log('brfore promises then-ed');
  var result  = resolvedWithRejectionNumCheck(promises, 10).then(data => {
    console.log(`Data? ${data}`);
    expect(data).toBe('Resolved');
  }).catch(err => {
    expect(1).toBe(2);
  });
  
  return result;
});