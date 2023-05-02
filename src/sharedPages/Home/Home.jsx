/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Slider from "../slider/Slider";
import { Outlet } from "react-router-dom";
import Card from "../card/Card";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefdata")
      .then((res) => res.json())
      .then((chefsData) => setData(chefsData));
  }, []);
  return (
    <div className="mt-4">
      <Outlet></Outlet>
      <Slider></Slider>
      <section>
        <h1 className="mx-auto text-4xl font-extrabold text-purple-400 w-80">Our top Chef </h1>
        <div className="grid w-9/12 gap-4 mx-auto mt-4 lg:grid-cols-2 lg:grid">
          {data.map((data) => (
            <Card data={data} key={data.id}></Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
