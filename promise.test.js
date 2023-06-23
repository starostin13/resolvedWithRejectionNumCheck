const getPromise = require('./promise');
const resolvedWithRejectionNumCheck = require('./resolvedWithRejectionNumCheck.js');

test('resolves if amount of rejected promises from promisesToHandle is not greater than the maxRejectedNum value', () => {
  var random = Math.floor(Math.random() * 10);
  const promises = [...new Array(random)].map(()=> getPromise());
  resolvedWithRejectionNumCheck(promises, 10).then(data => {
    expect(data).toBe('Resolved');
  })
})