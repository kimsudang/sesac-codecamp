"use client";

import { Button, Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data) => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        모달창 열기
      </Button>

      {/* 모달 종료 방식 - 1. 모달 숨기는 방법(ex. 이력서 등 초기화되면 안되는 내용) */}
      {/* <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel} closable={true}>
        게시글 내용 입력 : <input type="text" />
      </Modal> */}

      {/* 모달 종료 방식 -2 모달 삭제하는 방법(ex. 결제, 비밀번호, 개인정보 등 초기화가 필요한 내용 */}
      {isOpen && (
        <Modal open={true} onOk={handleOk} onCancel={handleCancel} closable={false}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
