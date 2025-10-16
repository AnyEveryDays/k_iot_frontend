// practice.js

//! 배열
// 변수종류(const/let) 변수명 = [값1, 값2, ...];

//! 함수
// 1) 함수 선언식 : function 함수명(매개변수 나열) {...}
// 2) 함수 표현식 : 변수종류 변수명 = function () {...}
// 3) 화살표 함수 : 변수종류 변수명 = () => {...}

//! 객체
//? 키와 값의 쌍으로 나열 (속성과 기능 사이는 콤마로 분리)

/* 변수종류 변수명 = {
  키: 값,             // 속성
  키: {
    키: 값,
    키: 값
  }
  키: function() {    // 기능, 행위
    ...
  }
  키: function(){

  }
} 

변수명(객체명).속성명;
변수명(객체명).기능명();

*/

//! 배열, 함수, 객체 복습 문제
// == 문제 1 ==
// 객체 생성
// : person 객체 생성 - name(문자열), age(숫자), isStudent(불리언) 속성 추가

// cf) 불리언 타입 변수 명명 규칙
//    : true(참), false(거짓) - 2가지의 값만을 가짐
//    >> is, has와 같이 동사 명사를 결합한 의문문 변수명을 주로 사용
//    EX) is + 명사: isStudent(학생이니?) / isAnimal(동물이니?)
//      has + 동사: hasEatLunch(점심먹었니?)
//    
let person = {

  // 속성(변수): '키: 값'의 쌍으로 정의
  name: '손태경',
  age: 29,
  isStudent: false
}

// 객체의 속성값에 접근
// 1) 객체명.속성명;
// 2) 객체명[속성명];
console.log(person.age);
console.log(person['name']);

//# 2) 배열 생성
// : fruits 배열을 생성하고, 여러 가지 과일을 문자열로 추가 (3가지 이상)
// - 두 번째 과일을 콘솔에 출력
let fruits = ['banana','apple','mango'];
console.log(fruits[1]);

// 3) 함수 생성
// : 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 add 함수 작성
// >> 매개변수 O, 반환값 O

// function add(a,b) {
//   return a + b;
// }

// let add = function(a, b){
//   return a + b;
// }

let add = (a, b) => a + b;

add(3,5);

console.log(add(3,5));

//! 문제 2
/*
? 배열의 요소를 각각 순회하여 각 요소의 인덱스/키를 변수에 할당
  : 중괄호 내에서 변수를 활용
  >> 배열명[인덱스명]
  >> 객체명["키명"]

for (let 변수명 in 배열명/객체){

}
*/

console.log("=== 문제 2 ===");
//& 객체 탐색
// : 초급에서 작성한 person 객체의 모든 속성과 값을 순회하여 콘솔에 출력하는 코드를 작성
// >> for in 반복문 사용

for(let key in person){
  console.log(`${key}: ${person[key]}`);
}


//& 2. 배열 메서드(배열 내장 함수) 사용
// : 초급에서 작성한 fruits의 모든 과일을 대문자로 변환하여 새 배열에 저장하고, 이 배열을 콘솔에 출력

// : 문자열.toUpperCase();
// let carsUpperCase = cars.map(function (car) {
//   return car.toUpperCase();
// });

// let fruits = ['banana','apple','mango'];
for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i].toUpperCase()); 
}

//& 3. 함수 활용
// : 두 개의 배열을 매개변수로 받아, 첫 번째 배열의 모든 요소에 두 번째 배열의 요소를 순서대로 더한 새 배열을 반환하는 함수를 작성
let Aarray = [1,2,3];
let Barray = [1,2,3];
let Carray = [];

for (let i = 0; i< Aarray.length; i++ ){
  Carray[i] = Aarray[i]+Barray[i];
}
console.log(Carray);
// [1,2,3]
// [4,5,6]
// >> [5,7,9]