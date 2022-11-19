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
