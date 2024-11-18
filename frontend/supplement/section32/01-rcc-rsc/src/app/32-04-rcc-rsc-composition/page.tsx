// "use client" => 페이지는 RSC로 시작하자! (안그러면 하위 컴포넌트는 모두 RCC가 되기 때문)\
// 최상위 컴포넌트(페이지)는 서버 컴포넌트를 유지하기.

import Rsc from "@/components/32-03-parent-rcc-with-child-rsc";
import Rcc from "@/components/32-04-rcc-rsc-composition/01-rcc";

export default function RccRscCompositionPage() {
  console.log("서버 컴포넌트가 렌더링되었습니다.");

  return (
    <>
      <div>저는 페이지 컴포넌트입니다.</div>
      <Rcc>
        {/* Rsc의 부모 컴포넌트 => page 컴포넌트 */}
        {/* children props로 Rcc에 Rsc를 넘겨줌 => Rcc가 Rsc의 부모는 아님 */}
        <Rsc />
      </Rcc>
    </>
  );
}
