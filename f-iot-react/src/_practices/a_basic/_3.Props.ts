export const tmp = '';

//! === Props (Properties) ===

//? 1. props는 무엇을 전달하기 위한 수단인가?
// A. 부모 → 자식 컴포넌트로 데이터 전달
// B. 자식 → 부모로 데이터 전달
// C. 전역 상태 공유
// D. 컴포넌트 내부 변수

//  A

//? 2. props는 어떤 형태로 컴포넌트에 전달되는가?
// A. 함수의 매개변수
// B. 전역 변수
// C. DOM 속성
// D. Redux store

// A

//? 3. TypeScript에서 props의 타입은 보통 어떻게 지정하나?
// A. interface 또는 type
// B. var
// C. let
// D. class

// A

//? 4. 다음 중 props를 받는 올바른 방식은?

// type Props = { name: string };
// const Hello = (props: Props) => <h1>{props.name}</h1>;


// A. 올바름
// B. 타입 오류
// C. JSX 문법 오류
// D. props 접근 오류

// A
// 위 코드는 완전히 올바른 함수형 컴포넌트 정의입니다.

//? 5. props는 컴포넌트 내부에서 수정할 수 있다. (O/X)

// X

//? 6. props 기본값을 지정하려면?
// A. defaultProps 사용
// B. useState
// C. constructor
// D. export default

// A

//? 7. 구조분해 할당을 이용한 props 접근 예시는?

// const Greeting = ({ name }: { name: string }) => <p>Hello {name}</p>;


// A. 올바름
// B. 문법 오류

// A

//? 8. props로 함수를 전달할 수 있다. (O/X)

// O

//? 9. props로 전달된 값은 자식이 변경할 수 없다. (O/X)

// O   변경할꺼면 부모쪽에서 변경해야한다

//? 10. props는 “읽기 전용(read-only)”이다. (O/X)

// O   재사용성과 단방향 데이터 흐름(부모-자식)을 유지하는 React의 기본 규칙이다 