async function resolvedWithRejectionNumCheck(promisesToHandle, maxRejectedNum) {
    var resolved = 0, rejected = 0;
    console.log(`Here is a ${promisesToHandle.length} promises`);

    await promisesToHandle.map(prms => prms()
    .then(value => {
        console.log(`Then ${value}`);
        resolved++;
    })
    .catch(err => {
        console.log(`CATCH: ${err}`);
        rejected++
    }));

    console.log(`Resolve: ${resolved}; Rejected: ${rejected}`);

    return new Promise((resolve, reject) => {
        if (promisesToHandle.length - resolved <= maxRejectedNum) {        
            resolve('number of rejected promises acceptable for the limit');
        } else {
            reject('number of rejected promises over the limit');
        }
    })
}

module.exports = resolvedWithRejectionNumCheck;