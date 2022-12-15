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

<img src ="https://velog.velcdn.com/images/southbig89/post/b7f09820-f535-463c-8329-46141ff10aca/image.png">

**for in 문**

> for in 문은 프로토타입을 포함된 프로퍼티들을 다 보여주고,
> 객체가 가지고 있는 프로퍼티만 판별하기 위해서 `Object.prototype.hasOwnProperty()` 사용

> hasOwnProperty() 메소드는 객체가 특정 프로퍼티를 가지고 있는지를 나타내는 불리언 값을 반환한다.

class 메서드의 for in 문에서 제외 된다

## class 상속 (extends)

생성사 함수를 쓸 경우에는 프로토타입을 이용해서 상속을 구현

class에서는 extends를 사용한다

```
class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive")
  }
  stop() {
    console.log("strop")
  }
}

class Bmw extends Car {
  park() {
    console.log("PARK")
  }
}

const z4 = new Bmw("blue")
```

> 클래스 내부에서 선언한 메소드는 프로토타입 밑으로 들어간다

## 메소드 오버라이딩 (method over riding)

```
class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive")
  }
  stop() {
    console.log("strop")
  }
}

class Bmw extends Car {
  park() {
    console.log("PARK")
  }
  stop() {
    console.log("bmw stop")
  }
}

const z4 = new Bmw("blue")
```

만약 bmw 내부에 정의한 메소드와 car에서 정의한 메소드와 동일한 이름의 메소드가 존재 한다면 ?
-> 동일한 이름으로 메서드를 정의하면 덮어 쓰게 된다 !

만약 부모의 메소드를 그대로 사용하면서 확장하고 싶다면 ?
`super()`를 사용하면 된다

```
  stop() {
    super.stop();
    console.log("bmw stop")
  }
```

## cuostructor over riding (생성자 오버라이딩)

constructor에서 this를 사용하기 전에 `super constructor`
부모생성자를 반드시 먼저 호출해야한다

class의 constructor는 빈 객체`({})`로 만들어 주고, this로 이 객체`({})`를 가리키게 된다
반면 extends써서 만든 자식 class는 빈객체가 만들어지고 this로 할당하는 이 작업을 건너 뛴다

즉, **super() 키워드를 통하여 부모 클래스의 컨스트럭터를 실행해 주어야 한다**

```
class Bmw extends Car {
  constructor() {
    super()
    this.navigation = 1;
  }
  park() {
    console.log("PARK")
  }
}
const z4 = new Bmw("blue")
```

부모 클래스의 color는 자식 클래스의 constructor 및 super를 통하여 인수를 받는 작업을 해줘야 한다

```
class Bmw extends Car {
  constructor(color) {
    super(color)
    this.navigation = 1;
  }
  park() {
    console.log("PARK")
  }
}
const z4 = new Bmw("blue")
```

#### 만약 자식 class에 cunstructor가 없다면 ?

```
class Bmw extends Car {
  constructor(...args) {
    super(...args)
  }
  park() {
    console.log("PARK")
  }
}
```

constructor가 없다면 위와 같이 작성된 코드처럼 있는 것처럼 작동한다
즉, **자식 생성자는 무조건 부모생성자를 호출해야한다**
