const getPromise = require('./promise');

test('the data is peanut butter', () => {
  return getPromise().then(data => {
    expect(data).toBe('peanut butter');
  });
});