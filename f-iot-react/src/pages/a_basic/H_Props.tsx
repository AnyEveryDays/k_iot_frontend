import React from 'react'

//! 자식 컴포넌트
// : 부모로부터 사용자에 대한 데이터를 전달(props)받아 UI로 반환
// - props 객체 형태
// props는 상속은 아니다 그냥 자식이 부모로부터 데이터를 전달받는것
// Java 상속 = “부모 집에서 집안 구조와 가구를 그대로 물려받음”

// React props = “부모가 작은 선물 상자(데이터)를 보내줌, 자식이 받아서 쓰는 것”
// 즉, props는 상속이 아니라 단순한 전달이라고 보는 게 맞아.

type User = {
  name: string;
  age: number;
  email: string;
}

type UserCardProps = {user: User};

// 구조 분해 할당
const UserCard = ({ user }:UserCardProps) => {
  // {}(<- 객체인걸 표현) 매개변수의 타입
  console.log(user.name);
  console.log(user.age);

  const { name, age, email } = user;

  console.log(name);
  console.log(age);
  console.log(email);

  return (
    <>
      <p>{user.name}/{user.age},{user.email}</p>
      <p>{name}/{age},{email}</p>
    </>
  )
}

//! Wrapper 컴포넌트
// : 다른 컴포넌트를 감싸는 컴포넌트
// - props 데이터로 다른 컴포넌트(ReactNode)를 전달받음
// - 자식 컴포넌트를 안전하게 받기 위한 타입

type ChildrenType = {
  // ReactNode: React 내의 HTML 요소들 + 사용자 정의 컴포넌트 들의 타입
  children: React.ReactNode;
}

export const Wrapper = ({ children}: ChildrenType ) => {
  return(
    <div style={{border: '2px solid black', padding: '16px'}}>
      {children}
    </div>
  )
}

function H_Props() {
  const userData = {
    name: '이민경',
    age: 30,
    email: 'asd234'
  }


  return (
    <>
    <div>
      {/* 
        == 콘솔창 / 컴포넌트 모두 두 번 실행 ==
        : React18 이후이 StrictMode가 '개발 모드'에서 부작용 탐지를 위해 두 번 랜더링
        > 실제 배포 환경에서는 한 번만 렌더링
      */}
      <UserCard user={{name: 'SON 태경', age: 29, email: 'ddsf@naver.com'}}/>
      <UserCard user={userData} />

      {/* wrapper */}
      <Wrapper>
        <div>안녕하세요 만나서 반갑습니다</div>
      </Wrapper>
    </div>
    </>
  )
}

export default H_Props