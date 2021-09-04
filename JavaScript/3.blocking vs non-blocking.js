// blocking (동기적 실행)
// 호출된 함수가 자신이 할 일을 모두 마칠 때까지 제어권을 계속 가지고서 호출한 함수에게 바로 돌려주지 않으면 Block


function waitSync(md) {
  let star = Date.now();
  let now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}  // 현재 시작과 시작 시각을 비교하며 ms 범위 내에서 무한 루프를 도는 blocking 함수

function drink(person, coffee) {
  console.log(person + '는 ' + coffee + '를 마십니다');
}

function orderCoffeeSync(coffee) {
  console.log(coffee + '가 접수되었습니다');
  waitSync(2000);
  return coffee;
}

let customers = [{
  name: 'Tom',
  request: '카페라떼'
}, {
  name: 'John',
  request: '아메리카노'
}];

// call sychronously
customers.forEach(function (customer) {
  let coffee = orderCoffeeSync(customer, request);
  drink(customer.name, coffee);
});


// non-blocking (비동기적 실행)
// 호출된 함수가 자신이 할 일을 채 마치지 않았더라도 바로 제어권을 건네주어(return) 호출한 함수가 다른 일을 진행할 수 있도록 해주면 Non-block


function waitAsync(callback, ms) {
  setTimeout(callback, ms); // 특정 시간 이후에 callback 함수가 실행되게끔 하는 브라우저 내장 기능
}

function drink(person, coffee) {
  console.log(person + '는 ' + coffee + '를 마십니다');
}

// function orderCoffeesync(coffee) {
//   console.log(coffee + '가 접수되었습니다');
//   waitSync(2000)
//   return coffee;
// }

let customer = [{
  name: 'Tom',
  request: '카페라떼'
}, {
  name: 'John',
  request: '아메리카노'
}];

function orderCoffeeAsync(menu, callback) {
  console.log(menu + '가 접수되었습니다');
  waitAsync(function () {
    callback(menu);
  }, 2000);
}

//call asynchronously
customers.forEach(function (customer) {
  orderCoffeeSync(customer, request, function (coffee) {
    drink(customer.name, coffee);
  });
});