"use client";

import Child1 from "@/app/components/14-04-lifting-state-up/Child1";
import Child2 from "@/app/components/14-04-lifting-state-up/Child2";
import { useState } from "react";

const 카운터 = () => {
  const [카운트변수, 카운트바꿔주는함수] = useState(0);

  const 카운트올리는기능 = () => {
    카운트바꿔주는함수(카운트변수 + 1);
  };

  return (
    <>
      <Child1 카운트변수={카운트변수} 카운트바꿔주는함수={카운트바꿔주는함수} />
      <div>========================================</div>
      <Child2 카운트변수={카운트변수} 카운트올리는기능={카운트올리는기능} />
    </>
  );
};

export default 카운터;
