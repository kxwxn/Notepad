// 1) Promise.resolve()

const myPromise = Promise.resolve(100);

console.log(myPromise);

myPromise
  .then((v) => v / 2)
  .then((v) => v / 10)
  .then(console.log);

// 2) Promise.reject()

const myPromise1 = Promise.reject("Error!");
myPromise1.catch(console.error);

// 3) Promise.all() ---> this is for parallel execution

const promise1 = Promise.resolve(100);
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3000);
  }, 3000);
});
const promise3 = Promise.reject("Failed!");

Promise.all([promise1, promise2]).then(console.log).catch(console.error);

Promise.all([promise1, promise2, promise3])
  .then(console.log)
  .catch(console.error);

// 4) Promise.allsettled() ---> this is for parallel execution but it will not stop even if one promise is rejected
Promise.allSettled([promise1, promise2, promise3]).then(console.log);

// 5) Promise.any() ---> this is for parallel execution and it will stop if everything is rejected

const Promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2000);
  }, 2000);
});


// 6) Promise.race() ---> it will show you one Promise that is resolved or rejected first