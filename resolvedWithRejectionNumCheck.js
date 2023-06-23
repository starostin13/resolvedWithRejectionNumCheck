function resolvedWithRejectionNumCheck(promisesToHandle, maxRejectedNum) {
    var i = 0;
    
    promisesToHandle.all.then((data) => {
        if(data == 'reject') {
            i++;
        }
    });

    return new Promise((resolve, reject) => {
        if(i < maxRejectedNum)
        {
            resolve('number of rejected promises acceptable for the limit');
        } else {
            reject('number of rejected promises over the limit');
        }
    })
}

module.exports = resolvedWithRejectionNumCheck;