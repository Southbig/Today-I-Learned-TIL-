# HTTP 트랜잭션 해부

## 서버생성

모든 node 웹 서버 애플리케이션은 웹 서버 객체를 만들어야 합니다. 이 때 `createServer`를 이용합니다.

```
const http = require('http');

const server = http.createServer((request, response) => {
  // 여기서 작업이 진행됩니다!
});
```

이 서버로 오는 HTTP 요청마다 createServer에 전달된 함수가 한 번씩 호출됩니다. 사실 createServer가 반환한 Server 객체는 EventEmitter이고 여기서는 server 객체를 생성하고 리스너를 추가하는 축약 문법을 사용한 것입니다.
