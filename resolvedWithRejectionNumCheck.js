function resolvedWithRejectionNumCheck(promisesToHandle, maxRejectedNum) {
    var i = 0;
    console.log(`Here is a ${promisesToHandle.length} promises`);

    // try {
    //     promisesToHandle.all.then((data) => {
    //         if (data == 'reject') {
    //             i++;
    //             console.log(`${i} times rejected`);
    //         }
    //     });

    // } catch {
    //     i++;
    //     console.log(`${i}s times rejected`);
    // }

    return new Promise((resolve, reject) => {
        //if (i < maxRejectedNum) {
        if (true) {
            resolve('number of rejected promises acceptable for the limit');
        } else {
            reject('number of rejected promises over the limit');
        }
    })
}

module.exports = resolvedWithRejectionNumCheck;