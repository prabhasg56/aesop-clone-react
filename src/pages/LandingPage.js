import React from "react";

import ProductSlider from "../components/ProductSlider";

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
      "https://www.aesop.com/hk/en/p/skin/hydrate/immediate-moisture-facial-hydrosol/",
  },
  {
    id: 2,
    title: "Ouranon Eau de Parfum",
    desc: "Woody, spicy, resinous ",
    proImg:
      "https://www.aesop.com/hk/en/p/skin/exfoliate/purifying-facial-exfoliant-paste/",
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
  const catego = "Fragrance";
  const title = "Our personal scents";
  const desc = `Unorthodox, evocative, and refined, Aesop fragrances are
    sensory bridges to memory and connection points to those
    around us.`;
  const seeAll = "See all Fragrance";

  return (
    <div>
      {/* Hero section */}
      <div className="relative">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/51ATQtZl3wy8KBBgt4MACM/1588c8b4d7e2291b47796d3d42884f1f/Aesop_Othertopias_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg"
          alt="A full collection of Othertopias"
        />
        <div className="flex flex-row absolute top-20 px-8 py-3  w-full text-white">
          <span className="font-bold text-2xl ">Aesop</span>
          <div className="w-1/2">
            <div className="space-y-2 px-20">
              <span>Doorways to the undiscovered</span>
              <h2 className="text-3xl py-4">
                Othertopias: a collection of unorthodox fragrances
              </h2>
              <p className="py-3">
                Step inside six fragrant worlds that transcend our immediate
                perception—vivid and distinctive.
              </p>

              <div className="flex flex-row border py-5 w-1/2 px-2 space-x-32 cursor-pointer hover:bg-white hover:text-gray-700">
                <span> Discover the fragrance</span>
                <span>
                  <svg
                    className="h-6 w-6 ml-1 "
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
          </div>
        </div>
      </div>

      <ProductSlider
        products={products}
        cat={catego}
        title={title}
        desc={desc}
        seeAll={seeAll}
      />

      <div className="flex flex-row bg-[#fffef2]">
        <div className="w-1/2">
          <div className="space-y-2 px-20">
            <span>Parsley Seed Skin Care</span>
            <h2 className="text-2xl py-5">
              In warm or humid urban settings, skin is vulnerable to a range of
              environmental factors.
            </h2>
            <p className="py-5">
              Pollution, air-conditioning and the stresses of city life can
              heighten skin’s susceptibility to free radical damage and
              dehydration. Anti-oxidant rich Parsley Seed formulations help to
              support skin against these effects.
            </p>

            <div className="flex flex-row border py-5 w-1/2 px-2 space-x-32 cursor-pointer hover:text-white hover:bg-gray-700">
              <span> Regimens for warm climates</span>
              <span>
                <svg
                  className="h-6 w-6 ml-1 "
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
        </div>

        <div className="container w-1/2">
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/7tPk6zFo84MiOR6dy8WNAg/1f71197de94be5fb07cbd03365132775/Aesop-Parsley-Seed-Performance-Campaign-2020-Hybris-Homepage-Secondary-1-Mid-Desktop-1690x1185px.jpg"
            alt="A full collection of Othertopias"
          />
        </div>
      </div>

      <div className="flex bg-[#fffef2]">
        <div className="flex flex-row mt-32">
          <div className="container ">
            <video autoplay loop muted>
              <source
                controls
                src="https://videos.ctfassets.net/u1nb1km7t5q7/1fy7IJOkhkLfiBJNrqqZlL/55ce2547d65d261beb120b441a0ed0df/Aesop_A_Guide_to_Fragrance_Web_Secondary_Mid_01_Rose_Desktop_1920x1080px.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="w-1/2">
            <div className="space-y-2 px-20">
              <span>The Athenaeum</span>
              <h2 className="text-2xl py-5">Decoding fragrance</h2>
              <p className="py-4">
                The language of notes, sillage and aromatic profiles allows us
                to describe perfume. Discover our guide to selecting a signature
                fragrance.
              </p>

              <div className="flex flex-row border py-5 w-1/2 px-2 cursor-pointer  space-x-24 hover:text-white hover:bg-gray-700">
                <span> Read more</span>
                <span>
                  <svg
                    className="h-6 w-6 ml-1 "
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
          </div>
        </div>
      </div>

      <ProductSlider
        products={products}
        cat="For warm climates"
        title="Adjusting to seasonal change"
        desc="In the warmer months, high temperatures and humidity can lead to increased sebum production for normal, combination, and oily skins. Accordingly, the use of slightly lighter formulations is recommended."
      />

      <div className="flex flex-row bg-[#fffef2]">
        <div className="w-1/2">
          <div className="space-y-2 px-20">
            <h2 className="text-2xl py-5">Store locator</h2>
            <p className="py-5">
              Our consultants are available to host you in-store and provide
              tailored guidance on gift purchases.
            </p>

            <div className="flex flex-row border py-5 w-1/2 px-2 space-x-32 cursor-pointer transition-all 0.5s hover:text-white hover:bg-gray-700">
              <span> Find a nearby store</span>
              <span>
                <svg
                  className="h-6 w-6 ml-1 cursor-pointer"
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
        </div>

        <div className="container w-1/2">
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg"
            alt="A full collection of Othertopias"
          />
        </div>
      </div>

      <div className="flex bg-[#fffef2]">
        <div className="flex flex-row mt-32">
          <div className="container ">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg"
              alt="A full collection of Othertopias"
            />
          </div>
          <div className="w-1/2">
            <div className="space-y-2 px-20">
              <span>The Athenaeum</span>
              <h2 className="text-2xl py-5">Decoding fragrance</h2>
              <p className="py-4">
                The language of notes, sillage and aromatic profiles allows us
                to describe perfume. Discover our guide to selecting a signature
                fragrance.
              </p>

              <div className="flex flex-row border py-5 w-1/2 px-2 space-x-24 cursor-pointer hover:text-white hover:bg-gray-700">
                <span> Read more</span>
                <span>
                  <svg
                    className="h-6 w-6 ml-1 "
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
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-32 bg-[#fffef2]">
        <p className="font-semibold text-2xl">
          {" "}
          ‘Nothing is ever ended, everything only begun.’
        </p>
        <span className="my-4">Sara Teasdale</span>
      </div>
    </div>
  );
};

export default LandingPage;
