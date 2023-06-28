const getPromise = require('./promise');

function getRandomArray() {
    const random = Math.floor(Math.random() * 10);
    let promises = [...new Array(random)];

    for (let i = 0; i < random; i++) {
        promises[i] = () => getPromise();
    }

    return promises;
}

module.exports = getRandomArray;