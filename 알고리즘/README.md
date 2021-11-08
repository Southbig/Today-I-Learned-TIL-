6. sudoku referdence 다시 이해하기

- 왜 3개의 배열을 만들어 비교해야 하는지

```
  const blanks = [];
  const rowUsed = [];
  const colUsed = [];
  const boxUsed = [];
```

- getBoxNum

```
const getBoxNum = (row, col) => boxes[row][col];
```

- 이중for문에서

```
const box = getBoxNum(row, col);
```

- isValid

```
  const isValid = (row, col, num) => {
    const box = getBoxNum(row, col);
    return (
      rowUsed[row][num] === false &&
      colUsed[col][num] === false &&
      boxUsed[box][num] === false
    );
  };
```

다시

---

21. inequalityNumber
    재귀 다시 이해 하기
