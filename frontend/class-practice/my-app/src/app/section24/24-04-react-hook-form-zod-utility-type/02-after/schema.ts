import { UpdateBoardInput } from "@/commons/graphql/graphql";
import { z } from "zod";

// 타입 지정 방법
// 1. zod에서 작성된 내용으로 타입을 뽑아내기
// 2. 기존에 받은 타입이 있다면 (백엔드에서 받거나, codegen 등) 그 타입으로 zod 작성하기

// 백엔드 api에 넘길 값이다 => 2번 채택 / 왜냐면 백엔드와 타입을 일치 시켜줘야 하니까
// 나만의 규칙을 만들거다? => 1번

// zod는 자동으로 타입추론 안됨. zod string으로 따로 관리됨 (본인들이 별개로 타입을 만듦)
// 그렇다면 zod로 타입을 뽑아내보려면?

// 1. 내가 만든 z.object로 타입 뽑아내기
// infer 사용 => zod에서 zod 타입 뽑아주는(추론하는) 친구
type myschema = z.infer<typeof schema>;

// 2-1) 이미 타입이 있는 경우, 이 타입을 적용하여 schema 만들기
// z.ZodType 으로 묶어준다. => 100% 완벽하지 않음 => zod 문제
// 현재 내부에 있는 애들은 잘 지정해주지만, 추가로 생긴 값의 경우 잘 못잡아냄.
interface IMySchema {
  writer: string;
  title: string;
  contents: string;
}

// export const schema: z.ZodType<IMySchema> = z.object({
//   writer: z.string().min(1, { message: "작성자는 한 글자 이상입니다." }),
//   title: z.string().min(1, { message: "제목은 한 글자 이상입니다." }),
//   contents: z.string().min(1, { message: "내용은 한 글자 이상입니다." }),
// });

// IMySchema를 직접 해주는게 아닌 다운받아서 사용할 수 있음
// codegen으로 받은 값을 기반으로 zod 타입을 지정해줘야함

// 2-2) 이미 있는 타입을 다운받은 경우 => Omit으로 사용 가능(주의: 나머지 모두 => 예측하지 못한 타입이 들어올 수 있다, 안정성에 주의)
// 이 타입은 page.tsx에서 useForm에 적용 시켜줘야 한다. => export
// Pick은 내가 원하는 타입만 불러올 수 있어서 안정성 측면에서 좋다.
export interface ISchema extends Pick<UpdateBoardInput, "title" | "contents"> {
  hobby: string; // => 추가도 할 수 있다.
}

export const schema: z.ZodType<ISchema> = z.object({
  // writer: z.string().min(1, { message: "작성자는 한 글자 이상입니다." }),
  title: z.string().min(1, { message: "제목은 한 글자 이상입니다." }),
  contents: z.string().min(1, { message: "내용은 한 글자 이상입니다." }),
});
