// dom01.js

// DOM (문서 객체 모델, Document Object Model)

// cf) JS문서 객체
// : HTML 안에서 요소 (Element)로 불리는 객체
// : JS 문서 객체 === HTML 요소


//! DOM 조작

//? 2) 문서 객체 가죠오기

// 2-1) 전체 HTML 구조를 객체로 인식하여 속성을 가져옴 (중첩 객체)
// document.head / document.title / document.body.p.strong

// 2-2) querySelector('선택자') & querySelectorAll('선택자') 메서드
// : 선택자를 활용하여 단일 또는 여러 개의 요소를 읽어올 때 사용
// - 태그명, #아이디명, . 클래스명. 선택자A 선택자B

document.addEventListener('DOMContentLoaded', () => {
  // querySelector
  // : 요소를 단 한개만 추출 (여러 개일 경우 제일 상단의 요소만 가져옴)
  const header = document.querySelector('h1');

  header.textContent = 'HEADER ONE';
  header.style.color = 'white';
  header.style.backgroundColor = 'black';
  header.style.padding = '20px';

  // querySelectorAll()
  // : 문서 객체 여러 개를 배열로 추출
  const items = document.querySelectorAll('li');
});

// 2-3) getElementById('');
document.addEventListener('DOMContentLoaded', () => {
  
})