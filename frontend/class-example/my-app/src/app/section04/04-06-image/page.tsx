"use client";

import Image from "next/image";
import styles from "./styles.module.css";

export default function ImagePage() {
  return (
    <>
      {/* 이미지 고전 방식 */}
      <img src="/images/토마토.png" alt="토마토" className={styles.이미지를보여주자} />

      <br />
      {/* 이미지 Next 방식 */}
      <Image
        src="/images/토마토.png"
        alt="토마토"
        width={500}
        height={300}
        sizes="100vW"
        className={styles.이미지를보여주자}
      />
    </>
  );
}
