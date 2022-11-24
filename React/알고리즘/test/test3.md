**문제**
저번에 이어, 또다시 N \* N의 크기를 가진 보드판 위에서 게임을 하려고 합니다. 그러나, 게임의 룰은 저번과 조금 달라졌습니다.

1. 좌표 왼쪽 상단(0, 0)에 말을 놓는다.
2. 말은 상, 하, 좌, 우로 이동할 수 있고, 플레이어가 조작할 수 있다.
3. 조작의 기회는 딱 한 번 주어진다.
4. 조작할 때 U, D, L, R은 각각 상, 하, 좌, 우를 의미하며 한 줄에 띄어쓰기 없이 써야 한다.

- 예시: UDDLLRRDRR, RRRRR

5. 한 번 움직일 때마다 한 칸씩 움직이게 되며, 그 칸 안의 요소인 숫자를 획득할 수 있다.
6. 방문한 곳을 또 방문해도 점수를 획득할 수 없다.
7. 말은 보드 밖으로 나갈 수 없으며, 해당 조작은 무효가 된다.

- 예시: 2\*2 보드판에서 UD를 조작한다면, U는 무효가 되고, D부터 시작한다.

8. 칸 안의 숫자는 0부터 100,000 중에 하나이다.

- 음수는 없습니다.

9. 획득한 숫자를 합산하여 숫자가 제일 큰 사람이 이기게 된다.

**주의사항**
처음 말을 (0, 0) 좌표에 놓았을 때 안에 들은 숫자는 계산에 포함하지 않습니다. 두 번째로 (0, 0) 좌표를 밟았을 때만 계산합니다.
보드판이 담긴 board와 조작하려고 하는 문자열 operation이 주어질 때, 말이 해당 칸을 지나가면서 획득한 숫자의 합을 구하는 함수를 작성하세요.

**입력**

인자 1: board

> number 타입의 2차원 배열
> 2 <= board.length <= 1,000
> 예: [ [0, 22, 4], [1, 3, 0], [0, 99, 2] ]

인자 2: operation

> ?string 타입의 대문자 영어가 쓰여진 문자열
> 1 <= operation.length <= board.length \* 10
> U, L, D, R 이외의 문자열은 없습니다.

**출력**

- Number 타입을 반환해야 합니다.
  - board와 operation이 입력값의 예시 ([ [0, 22, 4], [1, 3, 0], [0, 99, 2] ], DDR)일 때, (0, 0) -> (1, 0) -> (2, 0) -> (2, 1) 순서로 이동하게 되고, 각 0, 1, 0, 99를 얻어 100을 반환합니다.

**입출력 예시**

```
const board1 = [
  [72, 0, 80, 1],
  [1, 9, 11, 10],
  [1, 1, 792, 0],
  [13, 44, 27, 0]
]
const output1 = boardGame(board1, 'RRDLLD');
console.log(output1); // 102


const board2 = [
  [567, 6734, 132],
  [789, 243, 6],
  [89, 33333, 0]
]
const output2 = boardGame(board2, 'UUUDD'
console.log(output2); // 878

const board3 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]
const output3 = boardGame(board3, 'DDRRRUDUDUD');
console.log(output3); // 0
```

**reference**

```
function test3(board, operation) {
    let Y = 0;
  let X = 0;
  let result = 0;

  for (let move of operation) {
    if (move === 'U') { Y += - 1; X += 0; }

    if (move === 'D') { Y += 1; X += 0; }

    if (move === 'L') { Y += 0; X += - 1; }

    if (move === 'R') { Y += 0; X += 1; }

    if (X < 0) {
      X = 0
      continue
    }
    if (X >= board.length) {
      X = board.length - 1
      continue
    }
    if (Y < 0) {
      Y = 0
      continue
    }
    if (Y >= board.length) {
      Y = board.length - 1
      continue
    }

    let current = board[Y][X];
    board[Y][X] = 0
    result = result + current;
  }

  return result;
};
```
