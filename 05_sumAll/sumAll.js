const sumAll = function(start, end) {
    if (start < 0 || end < 0) {
        return "ERROR"
    }
    if (!(Number.isInteger(start)) || !(Number.isInteger(end))) {
        return "ERROR"
    }
    let sum = 0;
    let first = Math.min(start, end)
    let last = Math.max(start, end)
    for (i = first; i < last + 1; i ++) {
        sum = sum + i
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
