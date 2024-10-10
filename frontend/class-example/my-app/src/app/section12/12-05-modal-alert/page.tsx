"use client";

import { Button, Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccess = () => {
    Modal.success({
      content: "게시글 등록에 성공했습니다!",
    });
  };

  const onClickError = () => {
    Modal.error({
      title: "This is an error message",
      content: "비밀번호가 틀렸습니다.",
    });
  };
  return (
    <>
      <Button onClick={onClickSuccess}>성공 시</Button>
      <br />
      <br />
      <Button onClick={onClickError}>실패 시</Button>
    </>
  );
}
