import React, { useState } from "react";

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function generatePrimes(count) {
  const primes = [];
  let num = 2;

  while (primes.length < count) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes;
}

function generateFibonacciSeries(count) {
  const fibonacciSeries = [0, 1];

  for (let i = 2; i < count; i++) {
    const nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    fibonacciSeries.push(nextNumber);
  }

  return fibonacciSeries;
}

function generateOddNumbers(count) {
  const oddNumbers = [];

  for (let i = 1; oddNumbers.length < count; i += 2) {
    oddNumbers.push(i);
  }

  return oddNumbers;
}

function generateRandomNumbers(count, min, max) {
  const randomNumbers = [];

  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}

function NumberGenerator() {
  const [primeNumbers, setPrimeNumbers] = useState([]);
  const [fibonacciSeries, setFibonacciSeries] = useState([]);
  const [oddNumbers, setOddNumbers] = useState([]);
  const [randomNumbers, setRandomNumbers] = useState([]);

  const handleGenerateNumbers = () => {
    setPrimeNumbers(generatePrimes(10));
    setFibonacciSeries(generateFibonacciSeries(10));
    setOddNumbers(generateOddNumbers(10));
    setRandomNumbers(generateRandomNumbers(10, 1, 100));
  };

  return (
    <div>
      <h1>Number Generator</h1>
      <button onClick={handleGenerateNumbers}>Generate Numbers</button>
      <div>
        <h2>Prime Numbers</h2>
        <ul>
          {primeNumbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Fibonacci Series</h2>
        <ul>
          {fibonacciSeries.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Odd Numbers</h2>
        <ul>
          {oddNumbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Random Numbers</h2>
        <ul>
          {randomNumbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NumberGenerator;
