'use strict';

//JavaScript is synchronous.
//Execute the code block by orger after hoisting
//호이스팅이 된 이후 부터 코드가 작성한 순서에 맞춰서 하나하나씩 동기적으로 실행 된다
// hoisting: var, function declaration , var변수와 함수 선언들이 자동적으로 제일 위로 올라 가는 것

//호이스팅이 된 이후 부터 코드가 나타나는 순서대로 자동적으로 실행이 된다

console.log('1');
console.log('2');
console.log('3'); // 1 2 3

//console.log를 순서대로 작성하여 출락하면 1, 2, 3 순차적으로 출력이 된다

//synchronous는 정해진 순서에 맞게 코드가 실행되는 것
//Asynchronous는 비동기 적으로 언제 코드가 실행 될지 예측할 수 없는 것


console.log('1') // 동기
setTimeout(function () { // 비동기
  console.log('2')
}, 1000)
console.log('3') // 비동기 // 1 3 2

//자바스크립트 엔진은 코드를 제일 위에서 부터 밑으로 실핸된다
//1을 먼저 출력후 3이 출력되며 1초후 2가 출력된다, 2를 출력할때 사용한 setTimeout API는 브라우저 API로 브라우저로 요청 하게 된다
//비동기적인 실행 방법이다


//Synchronous callback 즉각적으로 동기적으로 실행
function printImmediately(print) {
  print();
}
printImmediately(() => { console.log('hello') }); // 동기

//Asynchronous callback 나중에 언제 실행될지 모르는
function printWithDelay(print, timeout) { // setTimeout을 랩핑하는 함수
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); // 비동기



//Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'zeus' && password === 'king') ||
        (id === 'south' && password === 'big')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'zeus') {
        onSuccess({ name: 'zeus', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const UserStorage = new UserStorage();
const id = promt('enter your id');
const password = promt('enter your password');
UserStorage.loginUser(
  id,
  password,
  user => {
    UserStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);

//문제점
//가독성이 떨어진다
//비즈니스 로직을 한눈에 알아보기 어렵다
//에러가 발생하거나 디버깅을 해야되는 경우에도 굉장히 어렵다
//체인이 길어지면 길어 질 수록 문제를 분석하고 디버깅 하기 매우 어렵다
//유지보수도 어렵다

