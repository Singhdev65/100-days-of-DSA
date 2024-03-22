function  Tribonacci(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let a = 0;
    let b = 1;
    let c = 1;
    let sum;

    for (let i = 3; i <= n; i++) {
        sum = a + b + c;
        a = b;
        b = c;
        c = sum;
    }
    
    return c;
    
};

console.log(Tribonacci(4)) //4
console.log(Tribonacci(25)) //1389537