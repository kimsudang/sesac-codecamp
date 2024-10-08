"use client";

import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CarouselPage() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image
          src="/images/12-04-dog1.jpg"
          alt="토마토"
          width={0}
          height={0}
          sizes="100vW"
          style={{ width: "100%", height: "400px", objectFit: "contain" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/12-04-dog2.jpg"
          alt="토마토"
          width={30}
          height={0}
          sizes="100vW"
          style={{ width: "100%", height: "400px", objectFit: "contain" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/12-04-dog3.jpg"
          alt="토마토"
          width={30}
          height={0}
          sizes="100vW"
          style={{ width: "100%", height: "400px", objectFit: "contain" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/12-04-dog4.jpg"
          alt="토마토"
          width={30}
          height={0}
          sizes="100vW"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
}
