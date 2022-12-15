# 상속, prototype

> Object.prototype.hasOwnProperty()
> 객체가 직접 가지고 있는 property만 true로 반환해 준다

## prototype vs `__proto__`

prototype는 생성자 함수가 생성하는 객체에 `__proto__`를 하기와 같이 설정한다는 의미

```
Bmw.prototype.wheel = 4;
Bmw.prototype.drive = function () {
 console.log("drive")
}
```

생성자 함수가 새로운 객체로 만들어 낼때,
그 주체는 생성자의 인스턴스라고 불린다

자바스크립트에서는 이를 편리하게 확인할 수 있는 `instanceof` 연산자가 있다
`instanceof`를 이용해서 객체와 생성자를 비교할 수 있고,
이는 해당 객체가 그 생성자로 부터 생성된 것인지를 판단해서 true 혹은 false를 반환한다

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

```
z4 instanceof Bmw
-> true

z4.constructor === Bmw
-> true
```
