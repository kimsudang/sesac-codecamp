// "use client"; => 서버 컴포넌트

import Form from "@/commons/ui/33-01-form-refactoring-with-rcc-rsc-composition";
import { ISchema, schema } from "./form.schema";
import { InputSoftSFull, ButtonSoftMFull } from "@codecamp2/ui";
import { useInitialize } from "./form.initialize";

export default function GraphqlMutationPage() {
  return (
    // 클라이언트의 props로 넘겨주는 props들도 클라이언트여야 함
    <Form<ISchema> schema={schema} useInitialize={useInitialize}>
      제목(컴포넌트): <InputSoftSFull<ISchema> type="text" keyname="title" />
      <br />
      내용(컴포넌트):
      <InputSoftSFull<ISchema> type="text" keyname="contents" />
      <br />
      <ButtonSoftMFull<ISchema>>GRAPHQL-API 요청하기</ButtonSoftMFull>
    </Form>
  );
}
