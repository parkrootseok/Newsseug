아래는 경어를 제외한 보고서 형식의 `README.md` 파일입니다:

---

# Vite와 JSX Transform을 활용한 React 실행

### 소개

Vite를 사용하면 별도의 React import 없이 JSX 변환 엔진을 통해 React를 실행할 수 있다.

```js
import.meta.env;
```

위 코드는 환경 변수를 접근하는 데 사용할 수 있으며, 예를 들어 베이스 URL을 통해 리소스를 불러올 수 있다.

---

### JSX Transform과 React

React는 일반적으로 `React.createElement()` 함수를 사용해 렌더링을 처리한다. JSX는 이 함수를 사용하도록 변환되지만, React 모듈이 여전히 필요하다. 새로운 JSX Transform 엔진을 사용하면 React를 불러오지 않아도 되지만, 오래된 엔진에서는 오류가 발생할 수 있다. 이를 방지하려면 Vite가 새로운 JSX 엔진(React 17 이상)을 사용하도록 설정해야 한다. Vite React 플러그인을 설치해 문제를 해결할 수 있다.

플러그인은 다음과 같이 추가할 수 있다:

```bash
npm install @vitejs/plugin-react
```

---

### JSX와 Component 설정

- **JSX로 변환하기 위한 규칙:**
  - `className`으로 변경해야 하며, React에서는 `for` 대신 `htmlFor`를 사용해야 한다.
  - `aria` 관련 속성은 그대로 사용할 수 있다.

```jsx
class ChromeDinosaur extends React.Component {
  render() {
    return (
      <div className='ChromeDinosaur' role='presentation'>
        <div className='dino'></div>
        <div className='eye'></div>
        <div className='mouth'></div>
        <div className='ground'></div>
        <div className='comets'></div>
      </div>
    );
  }
}
```

---

### React 컴포넌트

React 컴포넌트는 **클래스형**과 **함수형**으로 나뉜다.

- 최근 React에서는 함수형 컴포넌트를 주로 사용한다.

React는 순수 함수와 부수 효과가 없는 함수를 권장한다. 외부 데이터에 의존하지 않고 항상 같은 출력을 제공해야 한다.

React 컴포넌트는 `StrictMode` 하에 2번 렌더링된다. 이는 순수성 검사를 위한 도구로 사용된다.

---

### Props와 Fragment

React에서 **불필요한 div**를 피하기 위해 `React.Fragment` 또는 `<>`를 사용할 수 있다.

Props는 객체 형태로 전달되며, 구조 분해 할당을 통해 간단하게 처리할 수 있다.

```jsx
const MyComponent = ({ title, content }) => (
  <>
    <h1>{title}</h1>
    <p>{content}</p>
  </>
);
```

---

### TypeScript와 React

TypeScript에서는 명시적으로 React 엘리먼트를 반환한다는 습관을 기르는 것이 좋다.

```tsx
interface MyProps {
  title: string;
  content: string;
}

const MyComponent: React.FC<MyProps> = ({ title, content }) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);
```

Vite의 `import.meta.env`는 TypeScript에서 Intellisense를 제공할 수 있도록 타입을 정의해야 한다. 자세한 사항은 Vite 공식 문서를 참고하면 된다.

---
