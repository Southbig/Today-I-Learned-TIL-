# undifined VS null

## undefined

접근 가능한 스코프에 변수가 선언되었으나 현재 아무런 값도 할당되지 않은 상태이다
타입을 확인해 보면 'undefined' 이다

undefined는 자료형이 없는 상태이다

undefined는 원시값(Primitive Type)으로, 선언한 후에 값을 할당하지 않은 변수나 값이 주어지지 않은 인수에 자동으로 할당된다
이 값은 전역 객체의 속성 중 하나로, 전역 스코프에서의 변수이기도 하다, 따라서 undefined 변수의 초기 값은 undefined 원시 값이다

- 값을 할당하지 않은 변수
- 메서드와 선언에서 변수가 할당받지 않은 경우
- 함수가 값을 return 하지 않았을 때

## null

변수를 선언하고 'null'이라는 빈 값을 할당한 경우이다. 타입을 확인해 보면 'object' 이다

null은 변수를 선언하고 빈 값을 할당한 상태(빈 객체)이다

null은 원시값(Primitive Type) 중 하나로, 어떤 값이 의도적으로 비어있음을 표현한다
undefined는 값이 지정되지 않은 경우를 의미하지만, null의 경우에는 해당 변수가 어떤 객체도 가리키고 있지 않다는 것을 의미한다

---

- typeof undefined는 출력하면 undefined이다.
- typeof null은 출력하면 object이다. 하지만 이는 여전히 원시 타입(primitive value)로, JavaScript에서는 구현 버그로 간주한다.
- undefined == null은 true이다 (느슨한 동등연산자는 type을 비교하지 않으므로 true로 나온다)
