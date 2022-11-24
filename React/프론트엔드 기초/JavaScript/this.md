# this의 바인딩

EC(Execution Context)가 생성될 때마다 this의 바인딩이 일어나며 우선순위 순으로 나열해보면 다음과 같다.

1. new 를 사용했을 때 해당 객체로 바인딩된다

```
var name = "global";
function Func() {
  this.name = "Func";
  this.print = function f() { console.log(this.name); };
}
var a = new Func();
a.print(); // Func
```

2. call, apply, bind 와 같은 명시적 바인딩을 사용했을 때 인자로 전달된 객체에 바인딩된다.

```
function func() {
  console.log(this.name);
}

var obj = { name: 'obj name' };
func.call(obj); // obj name
func.apply(obj); // obj name
(func.bind(obj))(); // obj name
```

3. 객체의 메소드로 호출할 경우 해당 객체에 바인딩된다.

```
var obj = {
  name: 'obj name',
  print: function p() { console.log(this.name); }
};
obj.print(); // obj name
그 외의 경우
strict mode: undefined 로 초기화된다.
일반: 브라우저라면 window 객체에 바인딩 된다.
```

## binding

javascript의 함수는 각자 자신만의 this라는 것을 정의한다

맨처음의 콘솔로그에서는 window객체가 나타난다
기본적으로 this는 window이기 때문이다, 하지만 꼭 this를 window라고만 말할 수는 없다
this는 객체 내부, 객체 메서드 호출시, 생성자 new 호출시, 명시적 bind시에 따라 바뀌기 때문이다

어찌되었든 위와 같은 say함수에서 Window객체를 사용하고 싶지 않다
즉, **this를 그때 그때 `알맞은 객체로 바꿔서` this값에 따라 인사말이 할 것이다**
이 것이 this의 binding이다
**명시적으로 위의 this를 Window가 아닌 다른 객체로 바꿔주는 함수가 call, apply, bind이다**
