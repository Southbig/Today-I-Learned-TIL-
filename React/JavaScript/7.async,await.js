//asunc, await
//promise를 좀더 간결하고 간편하게 그리고 동기적으로 실행되는 것처럼 보이게 만들어 주는 것

// promise들은 chaining을 할 수있는데
// 예를들어 romise then, onother promise then, onother promise then 식으로 반복 chaining을 하게 되면
// callback hell 처럼 보여질 수 있는데 async 와 await을 사용하면 
// 동기식으로 순서대로 코드를 작성하여 난잡한 코드를 방지 할 수 있다

// Syntactic super
// 기존에 존재하는 거 위에, 기존에 존재하는 것을 감싸서 우리가 조금 더 간편하게 쓸 수있는 api를 제공하는 것
// ex) class 
// 프로토타입을 베이스로 한 그 위에 살짝 덧붙여진, 사용하기 쉽게 만드는 것

// async & await
// clear style of using promise

// 1.async
async function fetchUser() {
    return 'southbig';
}

const user = fetchUser(); // async라는 키워드를 함수와 같이 쓰면 블록은 자동으로 promise로 바뀐다
user.then(console.log)
console.log(user)

// 2.await
// await 키워드는 async가 붙은 함수 안에서만 사용가능하다
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function geApple() {
    await delay(1000);
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}

function pickFruits() {
    return getApple()
        .then(apple => {
            return getBanana()
                .then(banana => `${apple} + ${banana}`);
        });
}

// async를 활용하여 좀더 가독성이 좋은 코드로 변경 가능하다
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

// await 병렬 처리
// 위의 코드를 보면 getApple함수 실행시 1초, getBanana실행시 1초가 걸리기 때문에
// 병렬로 처리 하게 되면 총 2초가 걸리는게 아닌 1초에 두개를 실행하여 만들 수 있다

async function pickFruits() {
    const applePromise = getApple(); // promise를 만드는 순간 바로 promise안에들어있는 코드블럭이 실행 된다
    const bananaPromise = geBanana(); // promise를 만드는 순간 바로 promise안에들어있는 코드블럭이 실행 된다
    // promise 실행
    const apple = await applePromise; // 여기서 동기화를 시켜준다
    const banana = await bananaPromise; // 그러면 위와같이 promise를 만들게 되면 각각 코드는 실행이 되어있고
    // await으로 기다렸따가
    return `${apple} + ${banana}`;     // 각각 기다릴 필요없이 1초에 실행을 할 수 있다
    // 각각의 코드를 기다리지 않고 1초에 모두 실행
}
pickFruits().then(console.log);

// useful Promise APIs
// Promise all promise배열을 전달하게 되면 모든 프로미스들이 병렬적으로 다 받을때까지 모아준다
function pickAllFruits() {
    return Promise.all([geApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

// promise race
// 배열에 전달된 promise 중에서 가장 먼저 값을 리턴하는 값만 전달한다
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()])
}
pickOnlyOne().then(console.log);

