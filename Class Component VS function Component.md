## Class Component VS function Component

### Class Component

- React에서 제공하는 Conmponent, extends(상속)해서 만든다
- 내 Component가 State가 있고, 그 상태에 따라서 Component가 주기적으로 update 되야야 한다면, Class Component 사용한다
- Class에는 관련된 데이터 함수들이 묶어져 있는 것이며,
  Component에서 가지고 있는 상태, 데이터를 담을 수 있는 State Object가 들어있다
- State가 변경되면 render함수가 호출된다 -> update된 내용이 보여진다

```
class button extends Component {
    state = {
        number: 0,
    };
    render() {
        return <button>
            {this.state.number}
        </button>;
    }
}
```

#### lifecycle methods

- Component가 사용자에게 보여질때, DOM tree에 올라 갔을때, DOM tree에서 나왔을때, Component가 update 되었을때,
  다양한 컴포넌트 상태에 따라서 함수를 구현해 놓으면 React가 알아서 불러주는 것이 lifecycle methods이다
- Component가 마운트 되었을때, 언마운트 되었을 때, 업데이트되었을 때,
  세부적으로 나눠져 있으서 중복되는 코드를 작성해야 하는 경우가 있다
  -React Hook을 이용하면 중복된 것을 줄일 수가 있다

### function Component

- 함수는 한가지 기능을 수행하는 단위이다
- Component에 State(상태)가 없고 항상 정적으로 데이터가 표기된다면 function Component를 사용한다
- 함수는 한가지 기능을 수행하는 단위이므로 State, lifecycle method가 없다

```
function App() {
    return <h1>Hello</h1>
}
```

#### React Hook

- function Component 안에서도 State를 가질수 있고, lifeCycle methods도 사용할 수있다
- 기존 Class 컴포넌트에서 할 수 있는 것들을 함수안에서도 할 수 있게 도와준다

즉,

### Class

- React Component
- React Pure Component

### function

- function Component
- memo (function) -> higher Oder Component (고차 컴포넌트)
- React Hook (State와 lifecycle을 가능하게 도와 준다)
