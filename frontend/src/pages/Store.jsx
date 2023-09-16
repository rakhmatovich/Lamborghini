import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Store() {
  const slides = [
    {
      url: "/store.jpg",
      
    },
    {
      url: "/store1.jpg",
      
    },
    {
      url: "/store2.jpg",
      
    },
    {
      url: "/store3.jpg",
      
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
    <Layout>
      <div className="w-[100%] m-auto relative group bg-black">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-[75vh] bg-center bg-cover duration-500 opacity-80"
        ></div>
        <div className="absolute flex flex-col top-28 left-24 justify-between text-xl text-white">
          <div className="py-20">
            <h3 className="text-3xl">LAMBORGHINI</h3>
            <h1 className=" text-7xl font-bold">STORE</h1>
            <h1 className="text-7xl font-bold">{slides[currentIndex].title}</h1>
            <Link>
              <div className="h-14 w-14 rounded-full border-white border-2 flex items-center justify-center mt-5 hover-bg-white text-white font-semibold hover:text-black hover:bg-white py-1 px-2 border-black-500 hover:border-transparent ">
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
                  className={`p-5 transition-transform m-1 ${
                    slideIndex === currentIndex ? "border-b-4 border-white" : 'border-b border-white'
                  }`}
                >
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between overflow-hidden">
        <div className="text-black w-[50%] mb-6 bg-white bg-cover p-20">
          <h1 className="text-3xl font-bold mb-8">
            MENSWEAR AND ACCESSORIES COLLECTION
          </h1>
          <p className="text-base mb-8">
            The iconic features of the super sports cars reflected in the
            Menswear and Travel Collections marked by an informal style and
            contemporary taste.
          </p>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              MEN
            </h1>
          </Link>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              WOMEN
            </h1>
          </Link>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              ACCESSORIES
            </h1>
          </Link>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              JUNIOR
            </h1>
          </Link>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              SQUADRA CORSE
            </h1>
          </Link>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              COLLECTIBLES
            </h1>
          </Link>
        </div>
        <div className="romb overflow-hidden w-[50%] -mr-48">
          <img className="h-[60vh] object-cover" src="/img1.webp" alt="motor" />
        </div>
      </div>
      <div className="flex justify-between overflow-hidden">
        <div className="romb overflow-hidden w-[50%] -mr-48">
          <img
            className="h-[60vh] object-cover mt-20"
            src="/img3.webp"
            alt="motor"
          />
        </div>
        <div className="romb overflow-hidden w-[50%] -mr-5">
          <img
            className="h-[60vh] object-cover mb-28"
            src="/img2.webp"
            alt="motor"
          />
        </div>
      </div>
      <div className="flex justify-between overflow-hidden">
        <svg
            height="100%"
            viewBox="0 0 30.2 11"
            xmlns="http://www.w3.org/2000/svg"
            xlink:href="http://www.w3.org/1999/xlink"
            class="clip-svg overflow-hidden w-[70%] -ml-[450px]"
        >
            <defs>
                <clipPath id="clip-polygon--uid270">
                    <polygon points=" 8 0, 8.1 0, 8.1 11, 0 11"></polygon>
                    <rect x="8" y="0" width="14.2" height="11"></rect>
                    <polygon
                        points="22.1 0, 30.2 0, 22.2 11, 22.1 11"
                    ></polygon>
                </clipPath>
            </defs>
            <g clip-path="url(#clip-polygon--uid270)">
                <image
                    class=""
                    src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/store/2022/image-s/img4.jpg"
                    alt="Lamborghini Store | Lamborghini.Com"
                    href="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/store/2022/image-s/img4.jpg"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                ></image>
            </g>
        </svg>
        <div className="text-black w-[50%] mb-6 bg-white bg-cover p-20">
          <h1 className="text-3xl font-bold mb-8">SHOP BY CAR</h1>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              HURACAN
            </h1>
          </Link>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              URUS
            </h1>
          </Link>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              AVENTADOR
            </h1>
          </Link>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              TERZO MILLENNIO
            </h1>
          </Link>
        </div>
      </div>
      <div className="container flex justify-between p-10  ml-16">
        <div className="w-[50%]">
          <img
            className="h-[90vh] object-cover w-full"
            src="/VETRINA.webp"
            alt="motor"
          />
        </div>
        <div className="w-[50%] bg-stone-200 p-14">
          <h1 className="font-bold text-3xl pb-8">FLAGSHIP STORE SANT’AGATA BOLOGNESE</h1>
          <p>
            Via Modena 12
          </p>
          <p>
           40019 Sant’Agata Bolognese 
          </p>
          <p>
            Bologna – Italy 
          </p>
          <p className="pb-8">
            +39 051 9597611
          </p>
          <h1 className="font-bold ">Hours</h1>
          <p>
            Open every day, all day.
          </p>
          <p>
            From October 1 to April 30 9:30 a.m. to
            6:30 p.m. (last admittance at 6 p.m.) 
          </p>
          <p className="pb-8">
            From May 2 to September 30 10
            a.m. to 7 p.m. (last admittance at 6:30 p.m.)
          </p>
          <h1 className="font-bold ">Days Closed in 2023</h1>
          <p>
            January 1, May 1, August 15, December 25 
          </p>
          <p>Early closing at 2:30 p.m.
            December 24, December 31</p>
        </div>
      </div>
    </Layout>
  );
}
