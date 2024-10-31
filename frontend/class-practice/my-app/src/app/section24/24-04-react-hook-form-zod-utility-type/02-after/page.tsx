"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ISchema, schema } from "./schema";

export default function GraphqlMutationPage() {
  const { register, handleSubmit, formState } = useForm<ISchema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: ISchema) => {
    console.log(data);

    console.log("리렌더링 될까요?");
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* 작성자: <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      <br /> */}
      제목: <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      <br />
      내용: <input type="text" {...register("contents")} />{" "}
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      <br />
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} />
      <br /> */}
      <button disabled={!formState.isValid}>GraphQL 동기 요청하기</button>
    </form>
  );
}
