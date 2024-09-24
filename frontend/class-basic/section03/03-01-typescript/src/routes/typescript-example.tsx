const TypescriptExample = () => {
  // 타입추론
  let aaa = "안녕하세요";
  aaa = 123;

  // 타입명시
  let bbb: string = "반갑습니다.";
  bbb = 123;

  // 타입명시가 필요한 상황
  let ccc: number | string = 1000;
  ccc = "1000원";

  // 숫자타입
  let ddd: number = 10;
  ddd = "철수";

  // 불린타입
  let eee: boolean = true;
  eee = false;
  eee = "false"; // true값으로 작동

  // 배열타입
  let fff: number[] = [1, 2, 3, 4, 5]; // number[]
  fff.push("안녕하세여");
  let ggg = ["철수", " 영희", "훈이"]; // string[]
  ggg.push(123);
  // 타입을 추론해서 어떤 타입인지 역으로 알아내기
  let qwer = [1, 2, "hi", 4]; // (string | number)[]

  // 객체타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string;
  }

  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  };

  profile.name = "훈이";
  profile.age = "8살";
  profile.school = "공룡초등학교";

  profile.hobby = "수영";

  // 함수타입 => 어디서 몇번이든 호출 가능하므로, 타입추론 안됨(타입 명시하기!!!)
  function add(num1: number, num2: number, unit: string) {
    return num1 + num2 + unit;
  }

  const result = add(1000, 2000, "원"); // 결과의 리턴타입도 알수있음! string
  add(true, false, "₩");

  // 리턴타입까지 명시
  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };

  const result2 = add2(1000, 2000, "원");

  // any타입
  let qqq: any = "철수"; // 자바스크립트와 동일!!
  qqq = 123;
  qqq = true;

  return <></>;
};
