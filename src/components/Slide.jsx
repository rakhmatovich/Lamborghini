import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from 'react-icons/bs'


export default function Slide() {
  const slides = [
    {
      url: "/revuelto-home.jpg",
      title: "REVUELTO",
    },
    {
      url: "/huracan-home.jpg",
      title: "HURACAN",
    },
    {
      url: "/urus-home.jpg",
      title: "URUS",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-[100%] m-auto py-16  relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-[75vh] rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="absolute flex flex-col top-28 left-24 justify-between text-xl">
        <div className="py-20">
          <h3 className="text-3xl">CONFIGURATOR</h3>
          <h1 className=" text-7xl font-bold">CREATE YOUR</h1>
          <h1 className="text-7xl font-bold">{slides[currentIndex].title}</h1>
          <Link>
            <div className='h-14 w-14 rounded-full border-black border-2 flex items-center justify-center mt-5 hover-bg-white text-black font-semibold hover:text-white hover:bg-black py-1 px-2 border-black-500 hover:border-transparent '>
              <BsChevronRight size={25} />
            </div>
          </Link>
        </div>
        <div className="flex py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-xl cursor-pointer"
            >
              <p
                className={`p-3 transition-transform  ${
                  slideIndex === currentIndex && "border-b-2 border-black"
                }`}
              >
                {slide.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
