import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductSlider = (props) => {
    const {products, cat, title, desc, seeAll} = props;
  return (
    <div>
       <div className="flex w-full bg-[#fffef2] ">
        <div className="  mt-44 pb-28 w-full">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="w-full"
          >
            <SwiperSlide>
              <div className="space-y-2 px-20">
                <span>{cat}</span>
                <h2 className="text-2xl">{title}</h2>
                <p>
                 {desc}
                </p>
                <div className="flex flex-row">
                 {seeAll}
                 {seeAll && <span>
                    <svg
                      className="h-6 w-6 ml-1 cursor-pointer text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <line x1="5" y1="12" x2="19" y2="12" />{" "}
                      <line x1="13" y1="18" x2="19" y2="12" />{" "}
                      <line x1="13" y1="6" x2="19" y2="12" />
                    </svg>
                  </span>}
                </div>
              </div>
            </SwiperSlide>

            {products.map((item, key) => {
              return (
                <SwiperSlide key={key}>
                  <div>
                    <div className="">
                      <img src={item.proImg} />
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold  underline cursor-pointer">{item.title}</h3>
                      <h5>{item.desc} </h5>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

        </div>
      </div>
    </div>
  )
}

export default ProductSlider;
