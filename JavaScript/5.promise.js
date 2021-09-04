'use strict';

//Promise
//Promise is a JavaScript object for asynchronous operation
//자바스크립트에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 오브젝트
//비동기적인 것을 수행 할 때 콜백 함수 대신 유용하게 쓸 수 있는 오브젝트

//point
//State 상태 = 프로세스가 무거운 오퍼레이션을 수행하고 있는 중인지
//기능수행 완료 후 성공했는지 실패했는지

//producer와 consumer의 차이점을 아는 것
//내가 원하는 데이터를 제공(producing)하는 사람과
//제공된 데이터를 쓰는 사람, 필요로 하는 사람(consumer)

//State: pending -> fulfilled or rejected
//pending: promise가 만들어져서 지정한 오퍼레이션이 수행 중일때
//fulfilled: 오퍼레이션이 성공적으로 끝나면
//rejected: 파일을 찾을 수 없거나, 네트워크에 문제가 생긴다면
//Producer vs Consumer

//1.Producer
//when new Pomise is created, the executer runs automatically
const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network, read files)
  console.log('anyting')
  setTimeout(() => {
    resolve('zeus');
    reject(new Error('no networt'));
  }, 2000);
});
//프로미스 안에서는 무거운 일들을 하게 된다
//네트워크에서 데이터를 받아 오거나 파일에서 큰 데이터를 읽어오는 과정은 시간이 꽤 걸린다
//이 것을 동기적으로 처리 하게 되면 파일을 읽어오고 네트워크에서 데이터를 받아오는 동안 그 다음 라인에 코드가 실행되지 않기 때문에
//시간이 걸리는 일들은 Promise를 만들어서 비동기적으로 처리하는 것을 권장한다

//Promise를 만드는 순간 전달한 executer라는 전달 함수가 바로 실행된다
//만약 Promise 안에 네트워크통신을 하는 코드를 작성했다면 Promise가 만들어 지는 순간 바로 네트워크 통신을 수행하게 된다
//point
//만약 네트워크 요청을 사용자가 요구 했을 때만 해야하는 경우라면,
//promise를 만드는 순간 그 안에서 executer라는 콜백 함수가 바로 싱핼되기때문에 이점을 유의 해야 한다

//2.Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
//then: Promise가 정상적으로 잘 수행이 되고, 마지막으로 최종적으로 resolve의 콜백함수를 통해서 전달한 값이 value 파라미터로 전달되져서 들어온다
//finally: 성공하든 실패하든 상관없이 무조건 마지막에 호출된다, 성공, 실패에 상관없이 어떤 기능을 마지막에 수행하고 싶을때 사용한다

//3.Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

//then은 값을 바로 전달 할 수 있고, 또 다른 비동기인 Promise를 전달 해도 된다


//4.Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000); // 에러가 안다면
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
//   .then(hen => getEgg(hen))
//   .then(egg => cook(egg))
//   .then(meal => console.log(meal));

//콜백함수를 전달할 때, 받아오는 value를 다른 함수로 바로 하나를 호출하는 경우에는 생략이 가능하다
getHen()
  .then(getEgg)
  .catch(error => { // 에러가 안다면 가지로 대쳐 해줘
    return '🍆';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);

  //5.callback hell -> Promise
  //callback-to-promise
