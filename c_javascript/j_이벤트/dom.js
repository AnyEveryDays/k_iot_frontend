// dom.js

//! == JS 내의 HTML  인식 ===
// : 자바스크립트 객체로 웹 문서를 인식
// - DOM(Document Object Model)으로 인식

// body > div > p > span
/*
body{
  div: {
    p: {
      span
    }
  }
}
<body>
  <div>
    <p>
      <span></span>
    </p>
  </div>
</body>
*/ 

// 1. document.querySelector('선택자');
// : 같은 선택자가 여러 개일 경우 첫 번째 요소만 가져옴

const btnButton1 = document.querySelector('.btn1');

btnButton1.onclick = function() {
  console.log('.btn 요소 중 첫 번째 요소가 클릭되었습니다.');
}
const btnButton2 = document.querySelector('.btn2');

btnButton2.onclick = function() {
  console.log('.btn 요소 중 두 번째 요소가 클릭되었습니다.');
}

// 2. document.querySelectorAll('선택자');
// : 여러 개의 요소 참조를 모두 가져와서 한 번에 이벤트 핸들러 등록
// - 배열로 반환 (주로 forEach와 결합)
const btnButtons = document.querySelectorAll('div');

function random(number){
  // 1) Math.random()
  // : 0이상 1미만의 부동 소수점 난수(실수의 무작위 값)를 생성하고 반환
  // EX) Mathrandom() * 256: 0이상 256미만의 부동 소수점 난수

  // Math.floor()
  // : 괄호 안의 수를 내림하여 가장 가까운 정수를 생성하고 반환

  return Math.floor(Math.random() * (number + 1));
}

function randomColorFunc(){
  // rgb값 255까지라서 256 넣어봤음
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

randomColor = randomColorFunc();

btnButtons.forEach(btn => {
  btn.addEventListener('click',() => {
    const randomColor = randomColorFunc();
    btn.style.backgroundColor = randomColor;
  })
})

