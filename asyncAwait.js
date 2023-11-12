//--------------------file system 모듈을 사용하는 비동기 함수--------------------

const fs = require("fs");

// 비동기 파일 읽기 함수를 Promise로 래핑합니다.
function readFileAsync(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        reject(err); // 오류가 발생하면 Promise를 거부합니다.
      } else {
        resolve(data); // 파일 내용을 성공적으로 읽으면 Promise를 이행합니다.
      }
    });
  });
}

// 파일을 읽고 내용을 출력하는 비동기 함수
async function readAndPrintFile(filename) {
  try {
    const data = await readFileAsync(filename); // await를 사용하여 비동기 파일 읽기를 기다립니다.
    console.log(data);
  } catch (error) {
    console.error("파일을 읽는 도중 오류가 발생했습니다: ", error);
  }
}

readAndPrintFile("example.txt"); // example.txt 파일을 읽고 내용을 출력합니다.

//-----------------------HTTP 요청을 기다리는 비동기 함수-----------------------

const axios = require("axios");

// 데이터를 가져오는 비동기 함수
async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    ); // await를 사용하여 HTTP 요청을 기다립니다.
    console.log("데이터를 성공적으로 가져왔습니다:");
    console.log(response.data);
  } catch (error) {
    console.error("데이터를 가져오는 도중 오류가 발생했습니다:", error);
  }
}

fetchData(); // 데이터를 가져오고 결과를 출력합니다.
