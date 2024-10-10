"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const BoardListBannerComponent = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Swiper
        loop={true}
        speed={300}
        autoHeight={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/images/banner01.jpeg"
            alt="banner1"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "512px", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/banner02.jpeg"
            alt="banner2"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "512px", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/banner03.jpeg"
            alt="banner3"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "512px", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BoardListBannerComponent;
