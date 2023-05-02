import React from 'react';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="m-2 lg:m-8">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="w-9/12 mx-auto lg:flex ">
            <p className="w-9/12 p-2 text-3xl font-medium text-center text-black">
              Cooks plan, organize, prepare and cook meals, according to recipes
              or under the supervision of chefs, in hotels, restaurants and
              other eating places, on board ships, on passenger trains and in
              private households.
            </p>
            <p>
              <img src="https://thumbs.dreamstime.com/b/thai-chef-cooking-fried-meat-vegetables-donburi-japanese-food-show-customer-serve-modern-restaurant-bangyai-city-184967398.jpg" />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-9/12 mx-auto lg:flex ">
            <p className="w-9/12 p-2 text-3xl font-medium text-center text-black">
              Cooks plan, organize, prepare and cook meals, according to recipes
              or under the supervision of chefs, in hotels, restaurants and
              other eating places, on board ships, on passenger trains and in
              private households.
            </p>
            <p>
              <img src="https://media.istockphoto.com/id/1391236717/photo/world-famous-restaurant-asian-female-chef-cooking-delicious-and-authentic-food-uses-digital.jpg?b=1&s=170667a&w=0&k=20&c=B6oVDp7V3-0rYCNUIg-VWx0N6ML9TJT2ES6JywqL46A=" />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-auto mt-3 md:w-9/12 lg:flex ">
            <p className="w-9/12 p-2 text-3xl font-medium text-center text-black">
              Cooks plan, organize, prepare and cook meals, according to recipes
              or under the supervision of chefs, in hotels, restaurants and
              other eating places, on board ships, on passenger trains and in
              private households.
            </p>
            <p>
              <img src="https://thumbs.dreamstime.com/b/thai-chef-cooking-fried-meat-vegetables-donburi-japanese-food-show-customer-serve-modern-restaurant-bangyai-city-184967398.jpg" />
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;