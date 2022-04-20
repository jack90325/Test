const prime = require("./isPrime");

test("23 is primeNum", () => {
    let a = 23;
    let b = true;
    expect(prime.isPrime(a)).toBe(b);
  });