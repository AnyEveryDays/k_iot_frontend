// a_variable.js

// ! 변수: 데이터를 저장하기 위한 공간

// 필수 명명 규칙
// - 첫문자: 영문자, _, $만 가능
// - 띄어쓰기 허용 X
// - 대소문자 구분
// - 예약어 사용 X

// let num;       -Error
// let num ber;   -Error

// * 선택 명명 규칙 //
// - lowerCamelCase 사용 권장

// EX) now, _now, now$25, now_25 (o)
// EX) 25now, now 25, *now       (x)

//? 올해 연도(currentYear), 태어난 연도(birthYear)
//  나이: age = currentYear - birthYear

//! JS 변수 선언 방식 (2가지 - let, var) //

// 1) 변수 선언 방법: 변수 종류 변수명;
let letVar; // Variable(변수)
var varVar;

// 2) 변수 할당(대입) 방법: 변수명 = 데이터(값);

letVar = 10;
varVar = 20;

// 3) 변수 선언과 동시에 초기화
let letVar2 = 10;
let varVar2 = 20;

//! let VS var
// 1. 공통점: 재할당 가능(변수의 특성), 호이스팅 o

//? 호이스팅
//  : 인터프리터(코드를 읽는 기기)가 코드를 실행하기 전 변수, 함수, 클래스 등의 선언문을 해당 범위의 맨 위로 올리는 것

// 2. 차이점
// - let: 동일한 영역 내에서 재선언 불가
// - var: 동일한 영역 내에서 재선언 가능


//! 상수(constant)
// : 변하지 않는 수, 한 번 할당된 값 변경 X (재할당 불가)
// - 선언과 동시에 반드시 초기화!

// ? 상수 명명규칙( 필수 - 변수와 동일)
// * 선택 명명규칙
//  : UPPER_SNAKE_CASE 

const PI = 3.14;
// 고정값(상수)라서 값 변경 안됨
// PI = 2.14 // TypeError: Assignment to constatnt variable.