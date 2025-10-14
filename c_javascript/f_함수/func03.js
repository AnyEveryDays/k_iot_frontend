// func03.js

// 자바스크립트 함수 구조: 매개변수/인자/반환값

//! 1. 매개변수(parameter) VS 인자(argument)
// - 매개변수: 함수에 전달될 데이터를 담는 변수 
// - 인자: 함수 호출 시 전달하는 값

function add(a,b) { // 타입 명시 X
  console.log(a+b);
}

add(3,6); // 9 

//! 2. JS에서의 매개변수, 인자 특징
// : 두 가지의 수가 반드시 일치할 필요 X

function log(a) {
  console.log(a);
}

log();  // undefined 인자를 전달하지 않은 파라미터 값ㄴ은 undefined >> 변수를 선언하고 초기화 이전의 타입
log('안녕');  //안녕
log('Hello','HI'); // Hello
// >> 여러개의 파라미터, 인자값 나열 시, 콤마로 구분
//    지정된 수의 파라미터 이상의 인수는 읽히지 않음

function introduce(name, age) {
  console.log(`${name} is ${age} years old`);
}
introduce('손태경', 29);
introduce( 29,'손태경');    // >> 매개변수의 차례로 인자값이 전달

//! 3. 반환값 (return, 리턴값)
// : 결과를 반환
// - 함수 내에서 return 키워드가 읽히면 함수의 실행을 즉시 중단, return 뒤의 값을 반환

function subtract(a,b){
  let result = a - b;
  return result;
  console.log('안녕하세요');  // Unreachable code detected.ts(7027) return 뒤의 문장은 실행이 안되서 저렇게 코드가 뜸

}

let outcome = subtract(10, 7);
console.log(outcome);
console.log(subtract(20,1));

// cf) return 키워드가 없는 함수는 실행 시 undefined를 반환
function noReturn(){
  console.log('Hello');
}
console.log(noReturn()); // 함수 전체가 반환하는 식이 undefined 라고 뜬다

// == 연습 문제 == //
// - squarl1,2,3 함수 작성
// - 파라미터를 x로 지정
// - 반환값으로 x의 제곱을 지정
// - 함수 선언 방식 3가지 모두 사용 마지막 결과를 console.log로 출력

function squarl1(a){
  return a * a;
}

const squarl2 = function a(a){
  return a * a;
}

let squarl3 = (a) => a * a;


console.log(squarl1(5));
console.log(squarl2(6));
console.log(squarl3(7));
