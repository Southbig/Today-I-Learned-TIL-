# class

## 생성자 함수

```
const User = function (name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(this.name);
  };
};

const mike = new User("Mike", 30);
```

```
const User = function (name, age) {
  this.name = name;
  this.age = age;
};

User.prototype.showName = function () {
  console.log(this.name)
}
```

1. 생성자 함수는 new 키워드 없이 실행 가능

> 생성자 함수는 객체 내부에 showName이 존재

## class 사용

```
class UserClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name)
  }
}

const tom = new UserClass("Tom", 19)
```

1. class 키워드사용
2. constructor는 객체를 만들어 주는 생성자 메소드 이다
3. class는 new 없이 실행이 불가능 하다

- constructor안에 class라고 명시되어 있고, new없이 호출하게 되면 에러가 발행되는 전개이다

> class는 proto type 내부에 showName이 존재

<img src ="스크린샷 2022-12-15 오후 3.46.34.png">
