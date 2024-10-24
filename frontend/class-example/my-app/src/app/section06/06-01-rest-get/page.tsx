"use client";

export default function RestGetPage() {
  const onClickAsync = () => {
    const result = fetch("https://koreanjson.com/posts/1");
    console.log(result); // Promise
  };

  const onClickSync = async () => {
    const result = await fetch("https://koreanjson.com/posts/1");
    const data = await result.json();
    console.log(data); // 제대로된 결과 => {title: "...", id="...",...}
    console.log(data.title); // "~~~"
  };

  return (
    <>
      <button onClick={onClickAsync}>RestAPI 비동기 요청하기</button>
      <br />
      <button onClick={onClickSync}>RestAPI 동기 요청하기</button>
    </>
  );
}
