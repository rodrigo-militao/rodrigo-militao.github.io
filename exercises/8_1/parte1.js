
function factoring(n) {
    if (n == 0) {
        return 1;
    }
    const number = n;
    let resp = n;
    let total = 0;
    while (n > 2) {
        total += resp * (--n);
        console.log(`${number} * ${n} = ${total}`);
    }
    return total;
}

console.log(factoring(5));