# Movie App | React Practice

`React`가, `SPA Framework`가 도대체 뭐길래 찍먹해보는 첫 React 프로젝트

---

### React에서 `Emnet` 사용하기

`JSX` 작성할때 `Enmet` 안되서 불편했음.

1. VSCode 설정 열기

   - Windows: `Ctrl + ,`
   - Mac OS: `Command + ,`

2. WorkSpace 설정에 들어가기

3. settings.json 열기

4. 아래 코드 넣어주기

```
{
   "emmet.includeLanguages": {
      "javascript": "javascriptreact"
   }
}
```

---

1. `JSX`를 이용해 `HTML Element`를 return하는 함수 또는 클래스를 `Component`라고 한다.

```
function CustomComponent() {
  return <div>This is Component</div>;
}
```

2. `JSX` 속성을 하나의 객체로 각 `Component`에게 넘겨줄 수 있는데, 이를 `props`라고 한다.

```
function CustomComponent(props) {
  return <div>This is {props.wow}</div>;
}

<CustomComponent wow="wow~~" />
```

3. 같은 `Component`를 배열에 담아 여러개 렌더링 하게 되면 아래와 같은 에러가 발생한다.

```
Warning: Each child in a list should have a unique "key" prop.
```

이 문제는 `props` 속성에 **고유한 key**를 추가해주면 말끔하게 해결된다.

```
function CustomComponent(props) {
  return <div>This is {props.wow}</div>;
}

[
   <CustomComponent key="1" wow="wow~" />,
   <CustomComponent key="2" wow="wow!" />,
   <CustomComponent key="3" wow="wow?" />
]
```

- key 속성은 `props`에 전달되지 않는다.

4. `prop-types`를 이용하면, `Component`에 전달되는 `props`들의 타입을 체크할 수 있다!

```
import PropTypes from "prop-types";

function CustomComponent(props) {
  return <div>This is {props.wow}</div>;
}

CustomComponent.propTypes = {
   wow: PropTypes.string.isRequired,
}

<CustomComponent wow="wow~" />
```

더 많은 속성들은 모두 [공식 Docs](https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html)에서 참고했다.

5. 클래스 형태로 `Component`를 만들기 위해서는 `React.Component`를 상속 받아야한다.

```
import React from "react"

class CustomComponent extends React.Component {
   render() {
      return <div></div>
   }
}

```

6. 각 `Component`에는 필요한 데이터(상태)를 저장할 수 있는 `state`를 만들 수 있다.

```
class CustomComponent extends React.Component {
   state = {
      data: "wow~",
   };

   render() {
      return <div></div>
   }
}
```

7. `state`를 변경할 때는 `this.state`로 접근해서 변경하는 것 대신, `this.setState` 메서드를 이용하는 것이 바람직하다. 또한, `this.setState`를 호출하게 되면, `Component`가 다시 렌더링된다.

```
class CustomComponent extends React.Component {
   state = {
      data: "",
   };

   addChar = () => {
      this.setState(curState => {
         return {
            data: curState.data + "a",
         };
      })
   }

   render() {
      return <button onClick={this.addChar}></button>
   }
}
```

8. `React Component`의 생명 주기(Life Cycle)

[참고](https://ko.reactjs.org/docs/react-component.html)

많이 쓰일법한 것들 위주로 정리.

생명 주기는 크게 3개로 나뉜다. 각 생명 주기에 호출되는 함수들이 있고, 아래에 명시된대로 차례로 호출된다.

- Mounting

  - constructor()
  - render()
  - componentDidMount()

- Updating

  - render()
  - componentDidUpdate()

- Unmounting
  - componentDidUnmount()

진짜 최고다. `Vanilla JS`에서 필요했던 것들이 다 있다.
