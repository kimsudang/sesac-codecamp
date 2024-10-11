"use client";

import { usePathname } from "next/navigation";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";

const HIDDEN_HEADERS = ["/section12/12-03-library-star", "/section12/12-03-library-icon"];

import LayoutNavigation from "./navigation";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  const pathname = usePathname();

  console.log("=======================");
  console.log(`pathname: ${pathname}`);
  console.log("=======================");

  // const isHiddenHeader = HIDDEN_HEADERS.includes(pathname);

  return (
    <>
      {/* {!isHiddenHeader && <LayoutHeader />} */}
      {!HIDDEN_HEADERS.includes(pathname) && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ height: "500px", display: "flex" }}>
        <div style={{ width: "20%", backgroundColor: "lightsalmon" }}>사이드바</div>
        <div style={{ width: "70%" }}>{children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
