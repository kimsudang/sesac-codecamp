"use client"; // => 클라이언트 컴포넌트

import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
export default function Form<IFormSchama extends FieldValues>({
  children,
  schema,
  useInitialize,
}) {
  // 페이지마다 원하는 값이 다를텐데 타입이 고정되어있으면 안됨 => 해결하기 위해 제네릭으로 던져줌
  const methods = useForm<IFormSchama>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const { onSubmit } = useInitialize(methods);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
