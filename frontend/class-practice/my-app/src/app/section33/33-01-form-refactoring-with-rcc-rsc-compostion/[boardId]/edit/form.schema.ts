"use client"; // 클라이언트의 props로 넘겨주는 props들도 클라이언트여야 함

import { UpdateBoardInput } from "@/commons/graphql/graphql";
import { z } from "zod";

export interface ISchema extends Pick<UpdateBoardInput, "title" | "contents"> {}

export const schema: z.ZodType<ISchema> = z.object({
  // writer: z.string().min(1, { message: "작성자를 입력해주세요." }),
  title: z.string().min(1, { message: "제목을 입력해주세요." }),
  contents: z.string().min(1, { message: "내용을 입력해주세요." }),
});
