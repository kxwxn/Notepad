/**
 * Promise : 비동기 처리를 위해 사용되는 객체
 * resolve : 성공했을 때의 값을 담는다.
 * reject : 실패했을 때의 값을 담는다.
 */

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const text = prompt(
      "write down hello world, then i promise you that i will give you something cute! yey!"
    );
    if (text === "hello world") {
      resolve("🐶");
    } else {
      reject("ERROR ! 👺👺");
    }
  }, 0);
});
// -> 이것은 클라이언트와 유저가 서로 약속을 한 것이다.

/**
 * 상태
 * 1. pending : 대기 (resolve, reject가 호출되지 않은 상태)
 * 2. fulfilled : 성공 (resolve가 호출된 상태)  => then
 * 3. rejected : 실패 (reject가 호출된 상태)  => catch
 * 메소드
 * 1. then : resolve가 호출된 경우 실행
 * 2. catch : reject가 호출된 경우 실행
 * 3. finally : 무조건 실행
 */

myPromise
  .then((resolve) => {
    console.log("resolve:", resolve);
  })
  .catch((reject) => {
    console.log("reject:", reject);
  })
  .finally(() => {
    console.log("finally : always");
  });

// -> 이것은 클라이언트와 유저가 서로 약속을 지켰을 경우와 지키지 못했을 경우를 나타낸 것이다.
