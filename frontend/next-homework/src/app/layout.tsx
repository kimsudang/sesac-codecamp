import ApolloSetting from "@/commons/settings/06-02-apollo-setting";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "./fonts/Pretendard-Regular.woff2",
  variable: "--pretendard",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Su Trip",
  description: "당신의 여행을 편하게 해주는 친구, Su Trip입니다.",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable}`}>
        {/* 헤더 */}
        {/* 내용 */}
        <ApolloSetting>{props.children}</ApolloSetting>
        {/* 푸터 */}
      </body>
    </html>
  );
}
