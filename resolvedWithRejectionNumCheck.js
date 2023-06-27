async function resolvedWithRejectionNumCheck(promisesToHandle, maxRejectedNum) {
    var resolved = 0, rejected = 0;

    await promisesToHandle.map(prms => prms()
    .then(value => {
        resolved++;
    })
    .catch(err => {
        rejected++
    }));

    return new Promise((resolve, reject) => {
        if (promisesToHandle.length - resolved <= maxRejectedNum) {        
            resolve('number of rejected promises acceptable for the limit');
        } else {
            reject('number of rejected promises over the limit');
        }
    })
}

module.exports = resolvedWithRejectionNumCheck;