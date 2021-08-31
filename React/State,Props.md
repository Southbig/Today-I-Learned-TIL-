## State

1. 컴포넌트 UI를 위한 데이터를 보관하는 오브젝트
2. State라는 오브젝트를 통해서 데이터에 업데이트가 발생하면 리엑트가 자동적으로 우리가 구현한 render 함수를 호출한다.

![State](https://user-images.githubusercontent.com/83868259/131358117-24f5d3d9-b9bd-467e-9c95-59edc27abb09.png)


## Props

1. 컴포넌트 밖에서 주어지는 데이터
2. 컴포넌트 안에서 자체적으로 데이터를 정의해서 사용하는 State와는 다르게, Porps는 컴포넌트 외부에서 데이터를 제공 받는다.
3. 가장 근복적인 이유는 컴포넌트의 재사용을 높이기 위해서다.
4. 상황에 따라 주어진 데이터를 받아서 그 데이터에 맞게 UI를 보여주기 위해서 사용 되어진다.
5. 부모컴포넌트에서 LikeButton 컴포넌트를 사용할때 title, onClick과 같은 아이들을 인자로 전달해 주면 이 아이들이 props 오브젝트로 묶여서 LikeButton 컴포넌트에 전달 되어진다.

![Props](https://user-images.githubusercontent.com/83868259/131358166-afa6185a-7251-46e4-858f-e520089da631.png)


그래서 LikeButken 안에서 this.props.title, this.props.onClick으로 각각 전달된 'Like'dhk 'this.handleClick' 함수에 접근 할 수가 있다.
