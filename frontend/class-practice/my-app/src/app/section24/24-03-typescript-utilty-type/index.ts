interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입 : IProfie의 모든 타입에 ? 붙는다. (파셜)
type aaa = Partial<IProfile>;

// 2. Required 타입: IProfie의 모든 타입에 ? 없앤다.
type bbb = Required<IProfile>;

// 3. Pick 타입: 타입 일부를 pick, 연결은 | 로.
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입: 타입 일부를 제외
type ddd = Omit<IProfile, "school">;

// 타입을 좁혔다
type eee1 = "철수";

// 5. Record 타입: 키-값으로, 키를 기준으로 지정하는 객체 타입, union => 객체
type eee = "철수" | "영희" | "훈이"; // Union type: 저것들 중 하나 골라사용 가능
const child1: eee = "철수"; // 철수, 영희, 훈이만 가능
const child2: string = "사과"; // 철수, 영희, 훈이, 사과, 바나나 등등 모두 가능

console.log(child1);
console.log(child2);

// type 타입 이름 = Record<키로 사용할 타입, 키로 지정한 타입의 타입 지정(이때 기본 타입 외 내가 만든 타입도 가능)>
type fff = Record<eee, number>;
type fff2 = Record<eee, IProfile>;

// 6. 객체의 key들로 Union 타입 만들기
// 객체가 있을 때 키들만 가져오고 싶다. 객체 => union
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
const myprofile: ggg = "hobby";

console.log(myprofile);

// 7. type vs interface 차이 => Interface는 선언 병합 가능, type은 안됨
// 위의 IProfile 과 합쳐짐
interface IProfile {
  candy: number;
}

const qqq: IProfile = {
  name: "철수",
  candy: 3,
  // ...
};

// 8. 배운 것 응용
// 수정하려고 함 => 모든 속성이 ? 가 되어야 함. => Partial 사용
// 타입의 모든 값을 가져올 필요가 없음, 수정되는 값만 가져오면 되니까 모든 속성이 ? 가 되어도 됨. 로직상 기본값 있는 애들은 그대로 기본값 들어갈테니까.
const profile: Partial<IProfile> = {
  candy: 45,
};

console.log(profile);
