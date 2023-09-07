import React, { useState } from "react";
import {AiOutlineRight} from "react-icons/ai"
import {AiOutlineLeft} from "react-icons/ai"

export default function Slider() {
  const slides = [
    {
      url: "/slider-revuelto.jpg",
      title: "REVUELTO",
      subtitle: "FROM NOW ON",
    },
    {
      url: "/slider-sterrato.jpg",
      title: "HURACÁN",
      subtitle: "BEYOND THE CONCRETE",
    },
    {
      url: "/slider-urus.jpg",
      title: "URUS",
      subtitle: "UNLOCK ANY ROAD",
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
    <div className="flex flex-col md:flex-row">
      <div className="w-[40%] bg-gray-900 text-white flex flex-col justify-center items-center">
        <div className="w-[80%] pb-16">
          <h1 className="text-[3rem] font-semibold mb-4">MODELS</h1>
          <div className="flex gap-8">
            <div className="border-2 border-white text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-black duration-300">
              <AiOutlineLeft onClick={prevSlide} size={30} />
            </div>
            <div className="border-2 border-white text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-black duration-300">
              <AiOutlineRight onClick={nextSlide} size={30} />
            </div>
          </div>
        </div>
        <div className="w-[80%]">
          <h1 className="text-[6rem] tracking-tighter font-semibold">
            {slides[currentIndex].title}
          </h1>
          <h1 className="text-[2rem] font-semibold">
            {slides[currentIndex].subtitle}
          </h1>
        </div>
      </div>
      <div className="max-w-[1400px] h-[780px] w-[60%]  relative">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500"
        ></div>
      </div>
    </div>
  );
}
