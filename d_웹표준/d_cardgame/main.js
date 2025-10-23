//! 카드 메모리 게임 (카드 매칭 게임)
// : 사용자가 카드를 클릭하여 뒤집고
//    , 같은 색상의 카드를 매칭시키는 게임

// +) 게임 초기화, 카드 뒤집기, 매칭 검사
//    , 게임 완료 확인 등의 기능을 포함

//# 문서의 로딩이 완료되면 함수 실행
document.addEventListener('DOMContentLoaded', () => {
  //! HTML 요소 선택
  const cardContainer = document.getElementById('card-container');
  //    >> 내부에 동적으로 생성되는 .card 요소를 전달

  const startButton = document.getElementById('start-button');
  const resetButton = document.getElementById('reset-button');
  const completedButton = document.getElementById('completed-button');

  //! 색상 배열 정의 (6개 - 임의의 색상 지정 가능)
  const colors = ['black','red','lightblue','orange','yellow','pink'];

  //! colors 배열의 색상을 복제하여 새로운 배열 cardColors 생성
  //? 스프레드(...) 연산자 사용
  //  >> 모든 요소를 새로운 배열에 두 배 포함되도록 복사
  let cardColors = [...colors, ...colors];

  //# 1. 게임을 초기화하는 함수
  // 1) cardColors 색상 배열 섞기
  // 2) 해당 색상을 cardContainer 내부의 HTML(.card-back) 요소에 배치
  // 3) 12개의 카드를 생성하면 요소 할당
  function initializeGame() {
    //? cardColors 배열 섞기 (혼합)
    // : shuffle() 사용자 함수 사용 - 배열 요소의 순서를 무작위로 섞음
    shuffle(cardColors);
    
    //? cardContainer 내부의 HTML 초기화
    // : 게임 새로 시작 시 기존의 카드를 제거
    cardContainer.innerHTML = '';

    //? 12개 카드를 for 반복문으로 생성 HTML 요소로 할당
    for (let i = 0; i < 12; i++){
      cardContainer.innerHTML += `
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <img src="./front.jpg" alt="카드의 앞면">
            </div>
            <div class="card-back" style="background-color: ${cardColors[i]};"></div>
          </div>
        </div>
      `;
    }

    //? 12장의 각 카드에 이벤트 리스너를 추가하는 함수 호출
    // : 카드 클릭 시 동작을 정의
    addCardEventListener();
  }

  //# 2. 시작 시 잠시동안 모든 카드의 뒷면(색상)을 공개하는 함수 정의
  function revealCardsTemporary(){
    // 'completed-button' (완료 버튼)을 비활성화
    //  > 카드가 뒤집힐 당시에 사용자의 컨트롤을 막는 로직
    completedButton.disabled = true; 

    //? 모든 카드 뒤집기(뒷면 공개 - 색상)
    setTimeout(() => {
      document.querySelectorAll('.card').forEach(card => {
        card.classList.add('flipped');
      })
    }, 100); //0.1초 동안 뒤집기

    //? 모든 카드 뒤집기(앞면 공개 - 이미지)
    setTimeout(() => {
      document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('flipped');
      })

      //? 완료 버튼 다시 활성화
      completedButton.disabled = false;
    }, 2000); // 2초 뒤 복구
  }

  //# 3. 모든 카드 요소에 클릭 이벤트 리스너를 추가하는 함수 정의
  // 카드 클릭 시 해당 카드만! 뒤집는 기능 구현
  function addCardEventListener(){ // <- 오타 수정 완료 (Listener)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', flipCard); // flipCard 함수 등록
    })
  }

  //? 전역 변수 선언
  let isGameStarted = false; // 게임 시작 상태 추적 변수
  let hasFlippedCard = false; // 첫 번째 카드가 선택되지 않은 기본값
  let firstCard, secondCard; // 첫 번째, 두 번째 선택된 카드
  let lockBoard = false; // 게임판 잠김 여부

  //# 4. 카드를 뒤집는 함수 정의
  function flipCard() {
    if (!isGameStarted || lockBoard) return;

    if (this === firstCard) return;

    this.classList.add('flipped');

    if(!hasFlippedCard){
      hasFlippedCard = true;
      firstCard = this;
    } else {
      hasFlippedCard = false;
      secondCard = this;
    }

    //? 두 카드가 일치하는지 확인
    checkForMatch();
  }

  //# 5. 두 카드가 일치하는지 확인하는 함수 정의
  function checkForMatch(){
    if (!firstCard || !secondCard) return; // 안전장치 추가

    let isMatch = firstCard.querySelector('.card-back').style.backgroundColor
      === secondCard.querySelector('.card-back').style.backgroundColor;

    isMatch ? disableCard() : unflipCards();    
  }

  //# 6. 매치된 카드를 처리하는 함수 정의
  function disableCard() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }

  //# 7. 매치되지 않은 카드 다시 뒤집는 함수 정의
  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');

      resetBoard();
    }, 1000);
  }

  //# 8. 게임판 변수 초기화 함수 정의
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  //# 9. 버튼 가시성 토글 함수
  function toggleButtonVisibility(isGameStarted){
    startButton.style.display = isGameStarted ? 'none' : 'block';
    resetButton.style.display = isGameStarted ? 'block' : 'none';
    completedButton.style.display = isGameStarted ? 'block' : 'none';
  }

  let gameStartTime;

  //# 시작 버튼
  startButton.addEventListener('click', () => {
    initializeGame();
    gameStartTime = new Date();
    toggleButtonVisibility(true);
    revealCardsTemporary();
    isGameStarted = true;
  });

  //# 재시작 버튼
  resetButton.addEventListener('click', () => {
    initializeGame();
    gameStartTime = new Date();
    toggleButtonVisibility(true);
    revealCardsTemporary();
    isGameStarted = true;
  });

  //# 완료 버튼
  completedButton.addEventListener('click', () => {
    const allFlipped = Array.from(document.querySelectorAll('.card')).every(
      card => card.classList.contains('flipped')
    );

    if(allFlipped){
      const gameTime = new Date() - gameStartTime;
      alert(`게임 완료! 소요시간: ${Math.floor(gameTime/1000)}초`);
      isGameStarted = false;
      initializeGame();
      toggleButtonVisibility(false);
    } else {
      alert('완료되지 않았습니다.');
    }
  });

  // 버튼 표시 - 초기에는 시작 버튼만 표시
  toggleButtonVisibility(false);
  initializeGame();
});

//# 배열의 요소를 무작위로 섞는 사용자(커스텀) 함수
function shuffle(array){
  let length = array.length;
  for (let i = length-1; i>0; i--){
    let j = Math.floor(Math.random()*(i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
