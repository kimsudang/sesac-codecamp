"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { v4 as uuidv4 } from "uuid";

export default function PaymentPage() {
  const onClickPayment = async () => {
    // return 받아오는데 시간 발생 => 비동기 처리
    const result = await PortOne.requestPayment({
      // storeId: "(과제 시 백엔드 API에 존재)복사해서 가져오기",
      storeId: "store-0467ca45-7bf3-44a7-ad9c-796a583ffbd2",
      // channelKey: "(과제 시 백엔드 API에 존재)복사해서 가져오기",
      channelKey: "channel-key-6aa70e2e-8f95-4b69-a975-299da81963fc",
      // paymentId: "하나 만들어서 포트원에 주기 => UUID 사용",
      // uuidv4 => 함수, 16자리 랜덤 키값
      paymentId: uuidv4(),
      orderName: "마우스",
      totalAmount: 3000,
      currency: "CURRENCY_KRW",
      payMethod: "EASY_PAY",
      customer: {
        fullName: "철수",
        phoneNumber: "010-0000-0000",
        email: "a@a.com",
        address: {
          country: "COUNTRY_KR",
          addressLine1: "서울시",
          addressLine2: "4층",
        },
        zipcode: "00000",
      },
      redirectUrl: "http://localhost:3000/section27/27-01-payment-성공페이지",
    });

    // 결제 성공 시 로직 작성
    console.log(result);

    // 백엔드에다 결제관련 Data 넘겨주기(뮤테이션 실행) => 숙제API에서 사용(주의: storeId, channelKey 변경 필요)
    // createPointTransactionOfLoading(paymentId: ...)
  };
  return <button onClick={onClickPayment}>결제하기</button>;
}
