// 1. 문자/숫자/불린(primitive) 타입

import { useState } from "react";

// 함수는 자동 추론 안됨 => 어디서 누가 어떻게 부를지 모름
const getPrimitive = (
  arg1: string,
  arg2: number,
  arg3: boolean
  // 아래는 리턴 타입, 리턴되는 순서대로, 아래와 같은 형태로 반환하겠다.
): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

// 넣을 때는 arg 순서대로, 리턴타입은 위에 명시해둔 순서
const result = getPrimitive("철수", 123, true);

//
//
// 2. any 타입 => 그냥 자스랑 같음
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  // 에러가 발생해야하는데 안함 => 바닐라 js와 동일
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result2 = getAny("철수", 123, true);

//
//
// 3. unknown 타입 => any를 사용할바엔 unknown, 안정성 높다
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  // unknown은 에러 발생, 넣을 수는 있는데 사용할 때 필터링되어 사용
  // arg1이 뭔지 모르는데 어떻게 1000 곱해?
  console.log(arg1 * 1000);
  // 아래처럼 변경
  // 사용할 때 원하는 타입과 비교 후 사용
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};
// 리턴 타입은 예측할 수 없다
const result3 = getUnknown("철수", 123, true);
//
//
// 4. generic 타입
// 어떤 값이나 다 들어갈 수 있지만, 가장 먼저 들어온 값으로 타입을 맞춰주는 타입
// 타입이름을 지정해주는게 필수!
// <> 안에 내가 적어준 이름으로 그룹핑 필요
const getGeneric = <나의타입1, 나의타입2, 나의타입3>(arg1: 나의타입1, arg2: 나의타입2, arg3: 나의타입3): [나의타입3, 나의타입2, 나의타입1] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};
// 리턴타입 예측 가능
const result4 = getGeneric("철수", 123, true);
//
//
// 5.  generic 타입 => 짧게
const getGeneric2 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};
// 리턴 타입 예측 가능
const result5 = getGeneric2("철수", 123, true);
//
//
// 6.  generic 타입 => 더더 짧게
const getGeneric3 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};
// 리턴 타입 예측 가능
const result6 = getGeneric3("철수", 123, true);
//
//
// 7.  generic 타입 => 함수 선언식
function getGeneric4<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
}
// 리턴 타입 예측 가능
// 리턴 타입을 받아오는 곳에서 타입 명시 가능 <> 안에 타입 명시하면 T, U, V의 타입을 첫 입력값과 상관없이 타입 지정 가능
// 아래는 타입이 일치하지 않아 오류
// const result7 = getGeneric4<string, number, number>("철수", 123, true);
// 아래는 타입을 일치 시키기
const result7 = getGeneric4<string, number, boolean>("철수", 123, true);
//
//
// 그래서 제네릭 언제 써?
// 내가 만든 기능을 다른 사람이 가져다 쓸 때 사용 => 내가 이렇게 사용하세요라고 만들어줌 => 사용자는 맞춰서 사용해야함
// 결국 제네릭을 사용하는 이유는 안정성 때문임. any나 unknown 보다 안전함
//
// 우리가 아래처럼 사용해도 괜찮았던 이유는 useState도 제네릭으로 선언되어 있기 때문이다.
const [state, setState] = useState("");
// 아래는 useState 함수 <S>로 제네릭 타입 명시, 리턴 타입까지
function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
