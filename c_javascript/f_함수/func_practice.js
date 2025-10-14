//! == JS 함수 예시 == //
//? 요구 사항 정리
// 1. 회사의 직원들을 위해 월별 근무 시간과 시급을 기반으로 급여 계산 프로그램
// - calculatePay(hours, rate);
// - 근무 시간(hours), 시급(rate)을 인자로 받고, 총 급여를 계산하여 반환

// 2. 근무 시간이 160시간을 초과할 경우, 초과 근무 시간은 기본 시급의 1.5배로 계산

// 3. 각 직원의 월별 근무시간과 시급이 다를 수 있기 때문에
//    , 유연하게 동작 될 수 있는 함수 작성

// A 172, 20달러
// B 160, 22달러
// C 180, 18달러

function calculatePay(hours, rate){
  let sum = 0;
  if (hours > 160){
    sum += ((hours - 160) * (rate * 1.5));
    sum += (160 * rate);

  }
  else {
    sum += hours * rate;
  }

  return sum;
}
console.log(calculatePay(172,20));
console.log(calculatePay(160,22));
console.log(calculatePay(180,18));