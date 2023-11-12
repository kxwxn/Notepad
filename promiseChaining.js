const dataFetch = fetch("https://jsonplaceholder.typicode.com/todos");
//fetch returns a promise (it is very important to understand this)
//So we can use then and catch on it to get the response
//then is called when the promise is resolved
//catch is called when the promise is rejected
//finally is called when the promise is resolved or rejected
//then and catch can be chained

dataFetch
  .then((response) => {
    return response.json();
  })
  .then((item) => {
    console.log("data", item);
    return item.filter((obj) => obj.id > 170);
  })
  .then((result) => {
    console.log("result", result);
  })
  .catch((err) => {
    console.log("err", err);
  })
  .finally(() => {
    console.log("finished");
  });
