# Hook

## useInput

### tip

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
