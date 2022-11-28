# Hook

## useState

### useInput

#### tip

hook 사용시 구조 분해 할당으로 state 및 함수 한번에 지정하기

**ex)**

```
// hook
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

// hook 지정 component
const HookTest = () => {
  const name = useInput("taesik");

  return (
    <div>
      <h3>hook test</h3>
      <input type="text" placeholder="hey ?" {...name} />
    </div>
  );
};
```

즉,
input tag의 value, onChange의 값들을 같은 이름으로 hook으로 지정하게 되면 각각 지정을 안해줘도 사용 할 수 있다

### useTab

#### onClick에서 index를 콜백으로 넘겨주는이유

그냥 파리미터로 index를 넘겨줄 경우, 함수를 실행하는 코드이기 때문에 컴포넌트가 렌더링 되는 동시에 실행이 된다.

즉 changeItem에 index 초기값인 0을 할당하고, 다시 re-randering 되고, 다시 할당하고 다시 re-randering 되고를 반복 할 것이다

즉 count 를 증기하는 state가 있다고 하자

렌더링 될 때 count 가 1 증가 하는데, state 가 변경 되었으니 컴포넌트가 다시 렌더링 되고,

다시 렌더링 됐으니 또 count 가 1 올라가고, state 변경으로 인해 또 다시 렌더링

즉, 계속 이런 현상이 반복 되면 무한 루프에 빠져버려 돌아올 수 없는 길을 걷게 된다.

<img src="https://velog.velcdn.com/images/southbig89/post/2c2264c2-deec-420c-95c0-fc9dab39d38f/image.png">

**이러한 문제를 해결 할 수 있는 방법이 콜백이다**

1. onClick 전용 함수를 만들어 따로 빼서 사용

```

const sc = () => setCount(count + 1)
or
function sc() { setCount(count + 1) }

 onClick={sc}
```

2. onClick 에 직접 Callback Function 을 넣어 사용

```
 onClick={() => setCount(count + 1)}
```

#### 함수형 업데이트

setState는 비동기로 동작한다.
(여러번 setState를 만나게 되면 batching(일괄 처리)하여 state를 한번에 업데이트한다)

함수를 인자로 전달받은 setState는 원하는 시점의 상태를 가지고 업데이트를 한다.

**객체가 아닌 함수형 setState가 호출되면 merge 할 객체가 없기 때문에 호출된 순서대로 함수를 큐에 넣는다.**
그 후에 큐의 각 함수를 호출하여 함수형 setState의 이전 상태를 전달하여 상태를 업데이트 하는 것이다

## useEffect

### clean up 정리

useEffect return 값으로 함수를 넣어 주면 된다
함수를 return 해주면 해당 컴포넌트가 언마운트 될때,
다음 랜더링시 불릴 useEffect가 실행되기 이전에 return 으로 넣어준 함수가 실행 된다

```
useEffect(() => {
  return () => {}
}, [])
```

#### return 문에 콜백을 사용하는 이유는

그냥 retrun 해주게 되면 mount 된 동시에 unmount도 같이 진행 된다

### addEventListner

addEventListner를 통해 이벤트를 등록하고 난 뒤 이벤트 등록을 해제해주지 않으면, 특정 이벤트에서 계속해서 이벤트를 감지하기 때문에 성능 저하를 일으킬 수 있다

즉, 컴포넌트가 언마운트 될 때 꼭 이벤트 등록을 해제해주어야 한다

> component가 mount 되지 않았을때 eventListener가 배치되지 않게하기 위하여,

### usePreventLeave

#### beforeunload 이벤트 사용방법

1. preventDefault()를 호출해야 한다

2. returnValue 속성에 문자열 할당

```
window.addEventListener('beforeunload', (event) => {
  // 표준에 따라 기본 동작 방지
  event.preventDefault();
  // Chrome에서는 returnValue 설정이 필요함
  event.returnValue = '';
});
```

### useBeforeLeave

#### addEventListener 'mouseleave'

```
addEventListener('mouseleave', (event) => {});
```

마우스 커서를 핸들링 할 수 있다
