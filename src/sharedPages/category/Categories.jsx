import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaPepperHot } from "react-icons/fa";
import CategoriesList from "./CategoriesList";

const Categories = () => {
  return (
    <div className="p-6 m-4 mt-12 bg-white rounded-lg shadow-md">
      <h2 className="mx-auto text-4xl font-extrabold text-purple-400 w-80">
        Food Categories
      </h2>
      <div className="grid-cols-5 md:grid">
        <div className="cols-span-1">
          <CategoriesList></CategoriesList>
        </div>
        <div className="col-span-4">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="w-9/12 mx-auto lg:flex ">
                <p className="w-9/12 p-2 text-3xl font-medium text-center text-black">
                  Experience the vibrant and bold flavors of Thai curries. From
                  the fiery heat of green curry to the milder but aromatic
                  massaman curry, there's something for every spice level.
                </p>
                <p>
                  <img
                    src="https://i.ibb.co/PZmygbw/download.jpg"
                    alt="Thai curries"
                  />
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-9/12 mx-auto lg:flex ">
                <p className="w-9/12 p-2 text-3xl font-medium text-center text-black">
                  Experience the vibrant and bold flavors of Thai curries. From
                  the fiery heat of green curry to the milder but aromatic
                  massaman curry, there's something for every spice level.
                </p>
                <p>
                  <img
                    src="https://i.ibb.co/PZmygbw/download.jpg"
                    alt="Thai curries"
                  />
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-9/12 mx-auto lg:flex ">
                <p className="w-9/12 p-2 text-3xl font-medium text-center text-black">
                  Experience the vibrant and bold flavors of Thai curries. From
                  the fiery heat of green curry to the milder but aromatic
                  massaman curry, there's something for every spice level.
                </p>
                <p>
                  <img
                    src="https://i.ibb.co/PZmygbw/download.jpg"
                    alt="Thai curries"
                  />
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Categories;
