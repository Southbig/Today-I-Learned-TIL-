# call, apply, bind

함수 호출 방식과 관계없이 this를 지정할 수 있다

## call

call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다

## apply

apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다
call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, **apply는 매개변수를 배열**로 받는다

## bind

함수의 this 값을 영구히 바꿀 수 있다

즉, this 값을 지정하고 사용한다

```
fonst mike = {
  name: "Mike",
}

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

const updateMike = update.bind(mike)
updateMike(1980, 'police')
```
