"use client";

export default function CheckboxComponent() {
  const qqq2 = () => {
    alert(`2번 클릭`);
  };

  const qqq3 = () => {
    alert(`3번 클릭`);
  };

  return (
    <span style={{ marginRight: "10px" }} onClick={qqq2}>
      <input type="checkbox" onClick={qqq3} />
    </span>
  );
}
