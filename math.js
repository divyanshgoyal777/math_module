function double(num) {
    return num * 2;
}

function absolute(num) {
    return (num >= 0) ? num : -num;
}

function square(num) {
    return num * num;
}

function squareRoot(num) {
    return num ** 0.5;
}

function cube(num) {
    return num * num * num;
}

function floor(num) {
    return num - (num % 1);
}

function simpleInterest(p, r, t) {
    return (p * r * t) / 100;
}

function compoundInterest(p, r, t) {
    return p * (1 + (r / 100)) ** t
}

function evenNumbers(even, num) {
    if (even > num) {
        return 0;
    }
    console.log(even);
    return evenNumbers(even + 2, num);
}

function printEvenNumbers(num) {
    evenNumbers(2, num);
}

function decimalToBinary(num) {
    return (num === 0) ? "" : decimalToBinary(Math.floor(num / 2)) + (num % 2);
}

function factorial(num) {
    return (num <= 1) ? 1 : num * factorial(num - 1);
}

function NthFibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return NthFibonacci(num - 1) + NthFibonacci(num - 2);
}

function printFibonacciSeries(num, a, b) {
    if (num === 0) return 0;
    console.log(a)
    return printFibonacciSeries(num - 1, b, a + b);
}

function fibonacciSeries(num) {
    return printFibonacciSeries(num, 0, 1);
}

function checkIsPrime(i, num) {
    if (num < 2) return false;
    if (i > squareRoot(num)) return true;
    if (num % i === 0) return false;
    return checkIsPrime(i + 1, num);
}

function isPrime(num) {
    return checkIsPrime(2, num);
}

function printAllPrimes(i, num) {
    if (i > num) return;
    if (isPrime(i)) console.log(i);
    return printAllPrimes(i + 1, num);
}

function findAllPrimes(num) {
    return printAllPrimes(2, num);
}

function firstPrimeAbove(num) {
    return (isPrime(num + 1)) ? num + 1 : firstPrimeAbove(num + 1);
}

function hcf(num1, num2) {
    return (num2 === 0) ? num1 : hcf(num2, num1 % num2);
}

function lcm(num1, num2) {
    return absolute(num1 * num2) / hcf(num1, num2);
}

function checkArmStrong(num, original, sum) {
    return (num === 0) ? original === sum :
        checkArmStrong(floor(num / 10), original, sum + cube(num % 10))
}

function armStrong(num) {
    return checkArmStrong(num, num, 0);
}

function checkPalindrome(num, original, reverse) {
    return (num === 0) ? original === reverse :
        checkPalindrome(floor(num / 10), original, reverse * 10 + (num % 10));
}

function palindrome(num) {
    return checkPalindrome(num, num, 0);
}

function isLeapYear(num) {
    return (num % 400 === 0) || ((num % 4 === 0) && (num % 100 !== 0))
}

function printPrimeFactors(num, divisor) {
    if (num === 1) return;
    if (num % divisor === 0) {
        console.log(divisor);
        return printPrimeFactors(num / divisor, divisor);
    }
    else {
        return printPrimeFactors(num, divisor + 1);
    }
}

function primeFactors(num) {
    return printPrimeFactors(num, 2);
}

function squareRootNewtonMethod(num, guess) {
    if (num === 0) return 0;
    const newGuess = (guess + num / guess) / 2;
    if (absolute(newGuess - guess) < 0.000001) {
        return newGuess;
    }
    return squareRootNewtonMethod(num, newGuess);
}

function newtonSquareRoot(num) {
    return squareRootNewtonMethod(num, num / 2);
}

function sumOfAP(a, d, n) {
    if (n === 0) return 0;
    return a + sumOfAP(a + d, d, n - 1);
}

function sumOfAPByFormula(a, d, n) {
    return (n / 2) * (2 * a + (n - 1) * d);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    double,
    absolute,
    square,
    squareRoot,
    cube,
    simpleInterest,
    compoundInterest,
    printEvenNumbers,
    decimalToBinary,
    factorial,
    NthFibonacci,
    fibonacciSeries,
    isPrime,
    findAllPrimes,
    firstPrimeAbove,
    hcf,
    lcm,
    armStrong,
    palindrome,
    isLeapYear,
    primeFactors,
    newtonSquareRoot,
    sumOfAP,
    sumOfAPByFormula,
    randomInt,
}