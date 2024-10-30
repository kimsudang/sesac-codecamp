// 1. HOF - 함수선언식
// 타입 지정 이전에는 자동으로 any 배정
function first<T>(arg1: T) {
  return function second<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result = first("영희")(8);
//
//
// 2. HOF - `살표 함수
// 아래 주석 => 프리티어 무시
// prettier-ignore
const first2 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };

const result2 = first2("영희")(8);
//
//
// 2. HOF - `살표 함수
// prettier-ignore
// C는 jsx elememt가 들어와야함
const with로그인체크 = <C>(컴포넌트: C) => <P>(프롭스: P): [C, P] => {
  return [컴포넌트, 프롭스];
};

const result3 = with로그인체크("영희")(8);
