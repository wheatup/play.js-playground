// This repo is built by play.js with mobile device

let primes = (function*(){
  yield 2;
  yield 3;
  yield 5;
  yield 7;
})();

console.log(primes.next().value);