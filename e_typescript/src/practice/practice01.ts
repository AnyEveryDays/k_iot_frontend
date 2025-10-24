// 예제01.ts

type MixedType = string | number | boolean;

let value: MixedType = '문자';
value = 123;
value = true;

//! 2. 함수 매개변수에 Union 타입 적용
// number와 string 타입 중 하나를 매개변수로 받아, 해당 값이 number일 경우 숫자를 2배로 증가시키고, string일 경우 그대로 반환하는 함수 doubleOrNothing을 작성

// value: MixedType 의 값이 들어간거
// 정답 페이지랑 다르다


function doubleOrNothing(value: MixedType) {
  if (typeof value === 'string'){
    return value;
  } if (typeof value === 'number'){
    return value * 2;
  } if (typeof value === 'boolean'){
    return '참/거짓인 boolean형입니다';
  }
}




console.log(doubleOrNothing(value));

//? - 두 타입의 유니온 타입을 사용하여 Person 타입을 선언하고, id, isAdmin, username 중 적절한 속성을 가진 객체를 생성

type Admin = {
  id: number;
  isAdmin: boolean;
}

type User = {
  id: number;
  username: string;
}

type Person = Admin | User; // 이게 정답이다
type AdminUser = Admin | User;

//? - Person 타입의 객체를 매개변수로 받아 Admin인지 User인지를 구분해 출력하는 함수 identifyPerson을 작성

let Person: AdminUser = {
  id: 1,
  isAdmin: true,
  username: '금요일 칼퇴'
}

function identifyPerson(Person: Person){
  if ('isAdmin' in Person){
    console.log('관리자입니다');
  } else {
    console.log('일반 유저입니다');
  }
}

const adminPerson: Person = {
  id: 1,
  isAdmin: true
}

const userPerson: Person = {
  id: 2,
  username: '이승아'
}


