"use client";

import { useEffect } from "react";

// 아무튼 window엔 kakao 존재함
declare const window: Window & {
  kakao: any;
};

export default function KakaoMapPage() {
  // 지도가 그려지고 나서 불러와야 함 => useEffect로 마운트되고 실행될 코드 적음(아래 div가 그려지고 이후에 실행될 코드)
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      // 아래 코드에서 window 생략 가능
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    // 생성한 부분에 대해 응용하고 싶을 때 사용하려고 map 변수에 담아주기(마커 등)
    const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    console.log(map);
  }, []);
  // 아래 div에 styles={{}}인 이유
  // const styles = { width: "500px", height: "400px" };
  // 위 변수를 그대로 넣은 것과 같음 => style={{styles}} => 객체의 중괄호임
  return (
    <>
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=959ac9a4786dc353312c2ff249f5b0d7"
      ></script>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
