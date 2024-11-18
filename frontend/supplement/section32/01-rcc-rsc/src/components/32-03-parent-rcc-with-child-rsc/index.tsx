// "use client"를 붙이지 않았지만, 부모가 RCC이므로, 자식도 RCC로 작동

export default function Rsc() {
  // 브라우저에서 콘솔이 찍히면? 클라이언트 컴포넌트이다!
  console.log("??? 컴포넌트가 렌더링되었습니다.");

  return <div>저는 자식입니다.</div>;
}
