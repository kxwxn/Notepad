const sum = (num1, num2) => {
  return num1 + num2;
};

const result1 = sum(4 + 11);
const result2 = sum(7 + 6);

const sumResult = result1 + result2;
console.log("The sum of the two results is: " + sumResult);

//--------------------------------------------------------------

function plus(a, b) {
  return a + b;
}

console.log(plus(5, 7));

function minus(a, b) {
  console.log(a - b);
}

minus(5, 7);

function printHello() {
  console.log("Hello!");
}

printHello();

//--------------------------------------------------------------

const myPromise = Promise.resolve(100);

console.log(myPromise);

myPromise
  .then((value) => {
    value / 2;
  })
  .then((value) => {
    value / 10;
  })
  .then((value) => console.log(value));

//--------------------------------------------------------------
const myPromise1 = Promise.resolve(100);

console.log(myPromise1);

myPromise1
  .then((value) => value / 2)
  .then((value) => value / 10)
  .then((value) => console.log(value));

// 위의 두 코드는 다른 코드이다.
// 왜냐하면 위의 코드는 then 메소드를 호출할 때, return을 하지 않았기 때문이다.
// 그러므로, then 메소드는 undefined를 반환한다.
// 그래서, 아래와 같이 코드를 수정해야 한다.

//--------------------------------------------------------------

const myPromise2 = Promise.resolve(100);

console.log(myPromise2);

myPromise2
  .then((value) => {
    return value / 2;
  })
  .then((value) => {
    return value / 10;
  })
  .then((value) => console.log(value));
