import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

const products = [
  {
    id: 1,
    title: "Gloam Eau de Parfum",
    desc: "Floral, spicy, green",
    proImg:
      "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
  },
  {
    id: 2,
    title: "Ouranon Eau de Parfum",
    desc: "Woody, spicy, resinous ",
    proImg:
      "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
  },
  {
    id: 2,
    title: "Eidesis Eau de Parfum ",
    desc: "Woody, spicy, ambery ",
    proImg:
      "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
  },
  {
    id: 3,
    title: "Gloam Eau de Parfum",
    desc: "Floral, spicy, green",
    proImg:
      "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
  },
  {
    id: 4,
    title: "Erémia Eau de Parfum",
    desc: "A green, floral, citrus fragrance",
    proImg:
      "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
  },
  {
    id: 5,
    title: "Gloam Eau de Parfum",
    desc: "Floral, spicy, green",
    proImg:
      "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
  },
  {
    id: 6,
    title: "Miraceti Eau de Parfum",
    desc: "Resinous, woody, spicy fragrance",
    proImg:
      "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
  },
  {
    id: 7,
    title: "Gloam Eau de Parfum",
    desc: "Floral, spicy, green",
    proImg:
      "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
  },
  {
    id: 8,
    title: "Gloam Eau de Parfum",
    desc: "Floral, spicy, green",
    proImg:
      "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
  },
  {
    id: 9,
    title: "Gloam Eau de Parfum",
    desc: "Floral, spicy, green",
    proImg:
      "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
  },
];

const warmProducts = [
    {
      id: 1,
      title: "Gloam Eau de Parfum",
      desc: "Floral, spicy, green",
      proImg:
        "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
    },
    {
      id: 2,
      title: "Ouranon Eau de Parfum",
      desc: "Woody, spicy, resinous ",
      proImg:
        "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
    },
    {
      id: 2,
      title: "Eidesis Eau de Parfum ",
      desc: "Woody, spicy, ambery ",
      proImg:
        "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
    },
    {
      id: 3,
      title: "Gloam Eau de Parfum",
      desc: "Floral, spicy, green",
      proImg:
        "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
    },
    {
      id: 4,
      title: "Erémia Eau de Parfum",
      desc: "A green, floral, citrus fragrance",
      proImg:
        "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
    },
    {
      id: 5,
      title: "Gloam Eau de Parfum",
      desc: "Floral, spicy, green",
      proImg:
        "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
    },
    {
      id: 6,
      title: "Miraceti Eau de Parfum",
      desc: "Resinous, woody, spicy fragrance",
      proImg:
        "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
    },
    {
      id: 7,
      title: "Gloam Eau de Parfum",
      desc: "Floral, spicy, green",
      proImg:
        "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
    },
    {
      id: 8,
      title: "Gloam Eau de Parfum",
      desc: "Floral, spicy, green",
      proImg:
        "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
    },
    {
      id: 9,
      title: "Gloam Eau de Parfum",
      desc: "Floral, spicy, green",
      proImg:
        "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
    },
  ];

const LandingPage = () => {
  return (
    <div>
      {/* Hero section */}
      <div>
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/51ATQtZl3wy8KBBgt4MACM/1588c8b4d7e2291b47796d3d42884f1f/Aesop_Othertopias_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg"
          alt="A full collection of Othertopias"
        />
      </div>

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
                <span>Fragrance</span>
                <h2 className="text-2xl">Our personal scents</h2>
                <p>
                  Unorthodox, evocative, and refined, Aesop fragrances are
                  sensory bridges to memory and connection points to those
                  around us.
                </p>
                <div className="flex flex-row">
                  See all Fragrance
                  <span>
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
                  </span>
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
  );
};

export default LandingPage;
