import { ChangeEvent, useState } from "react";

const Board = () => {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [isActive, setIsActive] = useState(false);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    if (event.target.value !== "" && title !== "" && content !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);

    if (writer !== "" && event.target.value !== "" && content !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);

    if (writer !== "" && title !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickSubmit = () => {
    // 퀴즈: 내 코드
    // if (writer && title && content) {
    //   setIsActive(true);
    //   console.log(`writer: ${writer}, title: ${title}, content:${content}`);
    //   alert("게시글 등록에 성공하였습니다.");
    // } else {
    //   setIsActive(false);
    //   alert("입력되지 않은 값이 있습니다.");
    // }
  };

  // const 철수의스타일 = {
  //   color: "red",
  //   backgroundColor: "yellow",
  // };

  return (
    <>
      작성자: <br />
      <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <br />
      <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <br />
      <input type="text" onChange={onChangeContent} />
      <br />
      <br />
      <button onClick={onClickSubmit} style={{ backgroundColor: isActive === true ? "yellow" : "lightgray" }}>
        등록하기
      </button>
    </>
  );
};

export default Board;
