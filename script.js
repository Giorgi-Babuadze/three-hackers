function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));

//player 2

function isEven(num) {
    return num % 2 === 0;
}

// ტესტირება
console.log(isEven(2));  // true
console.log(isEven(3));  // false
console.log(isEven(10)); // true
console.log(isEven(7));  // false
