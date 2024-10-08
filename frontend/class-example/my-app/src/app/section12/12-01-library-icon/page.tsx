"use client";

import { AndroidFilled, AndroidOutlined, CloseCircleOutlined } from "@ant-design/icons";

export default function LibraryIconPage() {
  // 1. 대부분의 아이콘 라이브러리들은 <span />를 부모로 하여 내부에 아이콘 이미지가 자식으로 들어감
  // 2, 이미지 클릭 시, 부모로 onClick 이벤트가 전해짐
  const onClickDelete = (event) => {
    // alert(`${event.target.id}를 정말로 삭제하시겠습니까?`); => "를 정말로 삭제하시겠습니까?"
    alert(`${event.currentTarget.id}를 정말로 삭제하시겠습니까?`); // => "삭제할게시글ID를 정말로 삭제하시겠습니까?"
  };

  return (
    <>
      <AndroidOutlined />
      <AndroidFilled />
      <CloseCircleOutlined id="삭제할게시글ID" onClick={onClickDelete} />
    </>
  );
}
