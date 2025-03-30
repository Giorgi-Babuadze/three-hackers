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

//player 3

function sumOfDigits(num){
    let sum = 0
    while(num !== 0) {
        sum += num % 10;
        num = Math.floor(num / 10)
    }
    return Math.abs(sub)
}

console.log(sumOfDigits(123));
console.log(sumOfDigits(987));
console.log(sumOfDigits(0));
console.log(sumOfDigits(-456));
