// 예제01.ts

type MixedType = string | number | boolean;

let value: MixedType = '문자';
value = 123;
value = true;



function doubleOrNothing(MixedType: MixedType) {
  if (typeof value === 'string'){
    return MixedType;
  } if (typeof MixedType === 'number'){
    return MixedType * 2;
  } if (typeof MixedType === 'boolean'){
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

type AdminUser = Admin | User;

//? - Person 타입의 객체를 매개변수로 받아 Admin인지 User인지를 구분해 출력하는 함수 identifyPerson을 작성

let Person: AdminUser = {
  id: 1,
  isAdmin: true,
  username: '금요일 칼퇴'
}

function identifyPerson(Person: AdminUser){
  if ('isAdmin' in Person){
    console.log('관리자입니다');
  } else {
    console.log('일반 유저입니다');
  }
}




