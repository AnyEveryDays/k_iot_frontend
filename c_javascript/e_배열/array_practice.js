//! 1. 배열 합계 구하기
let array = [1,2,3,4,5];

function sumArray(array) {
  let sum = 0; // 배열의 요소 합을 저장할 변수

  let length = array.length;
  for (let i = 0; i < length; i++){
    // 요소 전체를 순회
    sum += array[i];
  }
  return sum;
}

console.log(sumArray(array));
console.log(sumArray([24,31,76,45]));

//! 2. 특정 수 이상의 요소 필터링

// 절달되는 배열 안에서 10 이상의 요소만 필터링 >> 새로운 배열로 반환
function filterTen(array) {
  let filteredValue = []; // 10이상의 값을 담는 배열

  let length = array.length;

  for (let i = 0; i < length; i++){
    if (array[i] > 10){
      filteredValue.push(array[i]);
    }
  }

  return filteredValue;
}

console.log(filterTen([3,15,23,5,11,19,10,55,60]));

//! 3. 배열의 평균 구하기
// - findAverage(array)
//  : 평균 == 전체 요소의 합 / 요소의 개수

function findAverage(array){
  let length = array.length;
  let average = 0;
  let sum1 = 0;

  for (let i = 0; i < length; i++){
    sum1 += array[i];
  }

  average = sum1 / length;
  console.log(sum1);
  return average;
}

console.log(array.length);
console.log(findAverage(array));

//! 4. 배열 내의 최대값 찾기
// - findMax(array)
// : 배열의 첫 번째 요소를 max라는 변수에 담기
// : 배열을 순회하면서 max보다 큰 값이 있을 경우 max를 해당 값으로 재할당
function findMax(array){
  let max = array[0];
  let length = array.length;

  for (let i = 1; i < length; i++){
    // 첫번째 요소 [0]이 이미 max 값에 들어가서 1부터 순회 array[1]
    if (max < array[i]){
      max = array[i]
    }
  }
  return max;
}

console.log(findMax([3,15,23,5,11,90,10,55,60]));