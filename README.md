# Movie App | React Practice

`React`가, `SPA Framework`가 도대체 뭐길래 찍먹해보는 첫 React 프로젝트

<br />

[프로젝트 링크](https://pshtony1.github.io/movie-app/)

![image](https://user-images.githubusercontent.com/67461578/108648432-91b4ea00-74fe-11eb-9e7f-058cbc1af8f0.png)

---

## 1. 내가 느낀 React
* 모든 기능을 나누어 전체적인 어플리케이션을 구현하는 느낌. 최고다.
* `state` 컨셉이 어마무시하게 좋다. 그러나 간단한 방법으로 다른 component의 `state`나 메서드를 불러올 수 없다는 점이 아쉽다.
   * 후술하지만, `React`의 `ref` 개념으로 해결했다.
* `props` 컨셉도 만만치 않게 좋다. 이 컨셉덕분에 모든 component들을 연결하는 느낌이 강하게 들었다.
* 만져보니 알았다. `React`는 **프레임워크가 아니라 무조건 라이브러리**다. 다른 프레임워크와는 달리, 나의 선택을 강제하지 않았다. 덕분에 컨셉에 종속되지 않고 편하게 구현할 수 있었다!
* `React Hooks`를 배우지 않은 상태에서 진행하다보니, `Class Component`가 `Function Component`보다 훨씬 좋게 느껴졌다. 
   * 살짝 `Hooks`의 메서드들을 들여다봤는데, 소름돋게 멋지다. 어서 배우고싶다고 느꼈다.

## 2. 스택 
* `React` 세팅 관련은 전부 이것을 이용했다(`React`, `Babel`, `Webpack` 등).
   * [`start-react-app`](https://github.com/facebook/create-react-app)

* 3rd Patry
   * [`prop-types`](https://www.npmjs.com/package/prop-types)
   * [`react-icons`](https://www.npmjs.com/package/react-icons)
   * [`react-multi-carousel`](https://www.npmjs.com/package/react-multi-carousel)
   * [`axios`](https://www.npmjs.com/package/axios)
   * [`dotenv`](https://www.npmjs.com/package/dotenv)

* 영화 API
  * [TMDB](https://developers.themoviedb.org/3)

## 3. 알게 된 것들

#### ✔ `JSX`를 이용해 `HTML Element`를 return하는 함수 또는 클래스를 component라고 한다.
*클래스 형태로 component를 만들기 위해서는 `React.Component`를 상속 받아야한다.*

```
// Function Component
function CustomComponent() {
  return <div>This is Component</div>;
}

// Class Component
import React from "react"

class CustomComponent extends React.Component {
   render() {
      return <div></div>
   }
}
```

<br />

#### ✔ 각 `Component`에게 `props`를 이용해 원하는 데이터를 넘겨줄 수 있다.

```
// Function Component
function CustomComponent(props) {
  return <div>This is {props.wow}</div>;
}

// Class Component
class CustomComponent extends React.Component {
   render() {
      return <div>This is {this.props.wow}</div>
   }
}

<CustomComponent wow="wow~~" />
```

<br />

#### ✔ 같은 `Component`를 배열(리스트)에 담아 여러개 렌더링 하게 되면 아래와 같은 에러가 발생한다.

```
Warning: Each child in a list should have a unique "key" prop.
```

이 문제는 `props` 속성에 **고유한 key**를 추가해주면 말끔하게 해결된다.  
*또한, key 속성은 `props`에 전달되지 않는다.*

```
// Function Component
function CustomComponent(props) {
  return <div>This is {props.wow}</div>;
}

// Class Component
class CustomComponent extends React.Component {
   render() {
      return <div>This is {this.props.wow}</div>
   }
}

[
   <CustomComponent key="1" wow="wow~" />,
   <CustomComponent key="2" wow="wow!" />,
   <CustomComponent key="3" wow="wow?" />
]
```

<br />

#### ✔ `prop-types`를 이용하면, `Component`에 전달되는 `props`들의 타입을 체크할 수 있다!

```
import PropTypes from "prop-types";

CustomComponent.propTypes = {
   wow: PropTypes.string.isRequired,
}

<CustomComponent wow="wow~" />
```

더 많은 속성들은 모두 [공식 Docs](https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html)에서 참고했다.

<br />

#### ✔ `Class Component`는 필요한 데이터(상태)를 저장할 수 있는 `state`를 만들 수 있다.
*`Function Component`는 `React Hooks`를 이용하면 `state`를 만들 수 있다.*

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

<br />

#### ✔ `state`를 변경할 때는 `this.state`로 접근해서 변경하는 것 대신, `this.setState` 메서드를 이용하는 것이 바람직하다. 
*또한, `this.setState`를 호출하게 되면, `Component`가 다시 렌더링된다.*

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

<br />

#### ✔ `React Component`의 생명 주기(Life Cycle)

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

---

### ✔ React에서 `Emnet` 사용하기

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
