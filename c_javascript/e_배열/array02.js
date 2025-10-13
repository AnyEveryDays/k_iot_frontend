// array02.js

// % == 데이터의 복사 == 

//! 1. 일반 자료형
// : 원본 데이터와 복사된 데이터가 별도 저장
// - 서로 영향을 끼치지 X

let num1 = 10;
let num2 = num1;

num2 = 20;
console.log(num1); // num1 = 원본 데이터 유지
console.log(num2); // num1에는 영향이 없고 num2에만 20이 들어간다

//! 2. 참조 자료형
// : 변수명을 할당하는 형식의 복사는 주소값의 전달
// > 원본 데이터 수정 시 같은 주소 체계를 가진 복사 데이터도 수정
let array01 = [11, 22, 33];
let array02 = array01;

console.log(array01);
console.log(array02);

array01[1] = 55;
console.log(array02); // [ 11, 55, 33 ]

array02[2] = 77;
console.log(array01); // 수정되는 값들이 공유가 된다.

array02 = [1,2,3]; // 새로운 주소값 재할당
array01[0] = 10;
console.log(array02); // [1,2,3]

//% == 깊은 복사 & 얕은 복사 == //

//! 1) 얕은 복사: 주소(위치)만 복사
//    >> 값을 공유
let example = [1,2,3];
let copy = example; // 주소만 전달

//! 2) 깊은 복사: 내용(값) 자체를 완전히 새로 복사
//    >> 값이 독립적

//? 원본과 복사본의 독립성을 보장 + 복사
// -  스프레드 연산자(...) 사용
// - 여러 요소를 하나의 형태로 결합 시 사용

// 1) 개별 요소 확장
let english = ['a','b','c','d'];

// 스프레드 연산자 사용법 ... 변수명
// >>배열 내부의 요소만! 복사
let copyEnglish1 = [...english];
let copyEnglish2 = ['z', ...english, 'zz'];

console.log(copyEnglish1);
console.log(copyEnglish2);

english[0] = 'aaaaa';
console.log(copyEnglish1);
// >> 원본과 복사본이 독립적!

// 2) 하나의 형태로 결합
let separate1 = [1,2,3];
let separate2 = [4,5,6];

let merge1 = [...separate1, ...separate2];
let merge2 = [...separate2, ...separate1];
console.log(merge1); // [ 1, 2, 3, 4, 5, 6 ]
console.log(merge2); // [ 4, 5, 6, 1, 2, 3 ]

//! 얕은 복사
// : 주소만 전달, 두 배열이 같이 데이터를 공유

//! 깊은 복사
// : 데이터를 새로 복사, 서로 완전히 독립적인 배열