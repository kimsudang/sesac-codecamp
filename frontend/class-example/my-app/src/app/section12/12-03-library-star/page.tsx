"use client";

import { HeartOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { useState } from "react";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  // === 1단계 방식 ===
  //  => onChange는 AntD 만든 개발자들이 만든 가짜 onChange임 (value 들어옴)
  // const onChangeStar = (value) => {
  //   // let value = 5와 같은 형식
  //   setValue(value);
  // };

  // return <Rate onChange={onChangeStar} value={value} character={<HeartOutlined />} allowHalf />;

  // ================================================================================

  // === 2단계 방식 ===
  // 중괄호와 return 사이에 아무것도 없으면 소괄호로 변경 가능 => 특별한 의미 없으면 소괄호 생략 가능
  // const onChangeStar = (value) => setValue(value);

  // return <Rate onChange={onChangeStar} value={value} character={<HeartOutlined />} allowHalf />;

  // ================================================================================

  // === 3단계 방식 ===
  // 같은 함수 안에 내용이 저것밖에 없다? 그럼 그냥 함수 선언 안하고 넣자.
  // return <Rate onChange={(value) => setValue(value)} value={value} character={<HeartOutlined />} allowHalf />;

  // ================================================================================

  // === 4단계 방식  ===
  // 어차피 받아서 그래도 넣어줘야하므로 생략 가능
  return <Rate onChange={setValue} value={value} character={<HeartOutlined />} allowHalf />;
}
