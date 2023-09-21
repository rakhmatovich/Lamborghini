import React, { useState } from "react";
import Layout from "../components/Layout";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

const slides = [
  {
    url: "/photo50.jpg",
  },
  {
    url: "/photo23.jpg",
  },
  {
    url: "/photo51.jpg",
  },
];

const slide = [
  {
    url: "/museo_23_01.webp",
  },
  {
    url: "/museo_23_02.jpg",
  },
  {
    url: "/museo_23_03.jpg",
  },
  {
    url: "/museo_23_04.jpg",
  },
  {
    url: "/museo_23_05.jpg",
  },
];

export default function Museum() {
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

  const [cuentIndex, setCuentIndex] = useState(0);

  const preivSlide = () => {
    const isFirstSlid = cuentIndex === 0;
    const newsIndex = isFirstSlid ? slide.length - 1 : cuentIndex - 1;
    setCuentIndex(newsIndex);
  };

  const nextsSlide = () => {
    const isLastsSlide = cuentIndex === slide.length - 1;
    const newsIndex = isLastsSlide ? 0 : cuentIndex + 1;
    setCuentIndex(newsIndex);
  };

  const goToSlides = (slidesIndex) => {
    setCuentIndex(slidesIndex);
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
            <h3 className="text-3xl">AUTOMOBILI LAMBORGHINI</h3>
            <h1 className=" text-7xl font-bold">MUSEUM</h1>
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
                    slideIndex === currentIndex
                      ? "border-b-4 border-white"
                      : "border-b border-white"
                  }`}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between overflow-hidden relative w-full h-[80vh]">
        <div className="text-black w-[60%] mb-6 bg-white bg-cover p-20">
          <h1 className="text-3xl font-bold mb-8">
            AUTOMOBILI LAMBORGHINI MUSEUM
          </h1>
          <p className="text-base mb-8">
            The fascinating history, iconic models and tours of the production
            lines inside the Automobili Lamborghini Museum reveal 60 years of
            innovation that are projecting Lamborghini into the future. From the
            first visionary creations of the genius of Ferruccio Lamborghini,
            such as the Miura and the Countach, followed by the more recent and
            exclusive super sports cars like the Huracán Performante, the
            Aventador SVJ, and the few-offs Centenario, Sesto Elemento and
            Veneno, to arrive today with the first Lamborghinis with hybrid
            technology, the Sian and Countach LPI 800-4. The Automobili
            Lamborghini Museum offers an interactive experience, also provided
            by the new driving simulator that amplifies the emotions and
            discovery of the vehicles on display. Open every day From October 1
            to April 30, from 9:30 a.m. to 6 p.m. (last entrance at 5 p.m.) From
            May 2 to September 30, from 9:30 a.m. to 7 p.m. (last entrance at 6
            p.m.)
          </p>
        </div>
        <svg
          height="90%"
          viewBox="0 0 23.5 11"
          xmlns="http://www.w3.org/2000/svg"
          xlink:href="http://www.w3.org/1999/xlink"
          className="absolute mt-5 -right-[500px] top-0"
        >
          <defs>
            <clipPath id="clip-polygon--uid449">
              <polygon points=" 8 0, 8.1 0, 8.1 11, 0 11"></polygon>
              <rect x="8" y="0" width="7.5" height="11"></rect>
              <polygon points="15.4 0, 23.5 0, 15.5 11, 15.4 11"></polygon>
            </clipPath>
          </defs>
          <g clip-path="url(#clip-polygon--uid449)">
            <image
              class=""
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2023/01_23/s/museo_23_s1_01.jpg"
              alt="Lamborghini Museum | Lamborghini.com"
              href="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2023/01_23/s/museo_23_s1_01.jpg"
              width="100%"
              height="100%"
              x="0%"
              y="0%"
            ></image>
          </g>
        </svg>
      </div>
      <div className="flex justify-between overflow-hidden">
        <div className="romb overflow-hidden w-[50%] -mr-48">
          <svg
            className="-ml-20 h-[60vh] mt-20"
            height="100%"
            viewBox="0 0 24 11"
            xmlns="http://www.w3.org/2000/svg"
            xlink:href="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="clip-polygon--uid170">
                <polygon points=" 8 0, 8.1 0, 8.1 11, 0 11"></polygon>
                <rect x="8" y="0" width="8" height="11"></rect>
                <polygon points="15.9 0, 24 0, 16 11, 15.9 11"></polygon>
              </clipPath>
            </defs>
            <g clip-path="url(#clip-polygon--uid170)">
              <image
                class=""
                src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2023/01_23/s/museo_23_s1_03.jpg"
                alt="Lamborghini Museum | Lamborghini.com"
                href="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2023/01_23/s/museo_23_s1_03.jpg"
                width="100%"
                height="100%"
                x="0%"
                y="0%"
              ></image>
            </g>
          </svg>
        </div>
        <div className=" overflow-hidden w-[50%] -mr-5">
          <svg
            className="mr-16 h-[60vh]"
            height="100%"
            viewBox="0 0 24 11"
            xmlns="http://www.w3.org/2000/svg"
            xlink:href="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="clip-polygon--uid171">
                <polygon points=" 8 0, 8.1 0, 8.1 11, 0 11"></polygon>
                <rect x="8" y="0" width="8" height="11"></rect>
                <polygon points="15.9 0, 24 0, 16 11, 15.9 11"></polygon>
              </clipPath>
            </defs>
            <g clip-path="url(#clip-polygon--uid171)">
              <image
                class=""
                src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2023/01_23/s/museo_23_s1_02.jpg"
                alt="Lamborghini Museum | Lamborghini.com"
                href="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2023/01_23/s/museo_23_s1_02.jpg"
                width="100%"
                height="100%"
                x="0%"
                y="0%"
              ></image>
            </g>
          </svg>
        </div>
      </div>
      <div className="flex overflow-hidden mt-10">
        <div className="romb overflow-hidden w-[50%] -ml-[400px]">
          <img
            className="h-[60vh] object-cover w-full"
            src="/ph1.jpg"
            alt="motor"
          />
        </div>
        <div className="text-black w-[50%] mb-6 bg-white p-24 ml-[200px]">
          <h1 className=" font-bold mb-8">DAYS CLOSED IN 2023</h1>
          <p className="text-base mb-8">
            August: 15 September: 12 (early closing at 4 p.m.); 21 (opening
            delayed to 11 a.m.) October: 26 (early closing at 3 p.m.) December:
            24 (early closing at 2 p.m.); 25; 31 (early closing at 2 p.m.)
          </p>
        </div>
      </div>
      <div className="flex justify-between overflow-hidden mb-20">
        <div className="text-black w-[50%] mb-6 bg-white bg-cover p-24">
          <h1 className="text-3xl font-bold mb-8">
            TOUR OF THE PRODUCTION LINES
          </h1>
          <p className="text-base mb-8">
            From the historic entrance toward the future. Visiting the
            production lines is a unique journey to witness the birth of
            Lamborghini’s super sports cars. From the brand new Revuelto V12
            hybrid, whose production line comprises 15 stations, passing through
            the V10 line where the Huracán was born, and up to the Upholstery
            line. The guided tours starting from the Lamborghini Museum make the
            visit an unforgettable experience for discovering the company’s most
            surprising and technological places.
          </p>
        </div>
        <div className="romb overflow-hidden  w-[50%] scroll -mr-56">
          <svg
            className=""
            height="100%"
            viewBox="0 0 23.5 11"
            xmlns="http://www.w3.org/2000/svg"
            xlink:href="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="clip-polygon--uid168">
                <polygon points=" 8 0, 8.1 0, 8.1 11, 0 11"></polygon>
                <rect x="8" y="0" width="7.5" height="11"></rect>
                <polygon points="15.4 0, 23.5 0, 15.5 11, 15.4 11"></polygon>
              </clipPath>
            </defs>
            <g clip-path="url(#clip-polygon--uid168)">
              <image
                class=""
                src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2023/01_23/s/museo_23_s2_01.jpg"
                alt="Lamborghini Museum | Lamborghini.com"
                href="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2023/01_23/s/museo_23_s2_01.jpg"
                width="100%"
                height="100%"
                x="0%"
                y="0%"
              ></image>
            </g>
          </svg>
        </div>
      </div>

      <div className="flex overflow-hidden ">
        <div className="romb overflow-hidden w-[50%] -ml-[450px]">
          <img
            className="h-[60vh] object-cover w-full"
            src="/ph2.jpg"
            alt="motor"
          />
        </div>
        <div className="text-black w-[50%] mb-6 bg-white p-24 ml-[200px]">
          <h1 className="text-3xl font-bold mb-8">
            PRIVATE EVENTS: AN EXCLUSIVE EXPERIENCE
          </h1>
          <p className="text-base mb-8">
            Our spaces were created to inspire, for sharing new ideas and for
            networking. Museo Automobili Lamborghini is the ideal place to
            organize evening events in an elegant setting. Its area has been
            renovated with a new approach, similar to that of an art gallery.
            The new Olimpo, overlooking Manifattura Lamborghini 4.0 – the
            technological Urus production line – is the perfect scenario for
            turning conferences and meetings into unique experiences. For more
            information, write to: museumevents@lamborghini.com.
          </p>
        </div>
      </div>
      <div className="max-w-[100%] h-[670px] w-full m-auto relative group">
        <div
          style={{ backgroundImage: `url(${slide[cuentIndex].url})` }}
          className="w-full h-full  bg-center bg-cover duration-500"
        ></div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={preivSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextsSlide} size={30} />
        </div>
      </div>
      <div className="flex justify-between overflow-hidden mb-20 p-10">
        <div className="w-[50%]">
          <h1 className="text-3xl font-bold mb-10">INFORMATION</h1>
          <h1 className="text-3xl font-bold mb-8">EDUCATIONAL VISITS</h1>
          <p>School and university groups must book in advance.</p>
          <h1 className="text-3xl font-bold mb-8  mt-5">PICTURES AND VIDEO SHOOTING</h1>
          <p>
            Pictures and videos may be taken inside the Museum for private use
            only. No photography or video recording is allowed during the
            factory visit. Before the start of the tour, participants will be
            asked to leave cameras, cellphones, and all other equipment able to
            take photos and/or video recordings in the lockers provided.
          </p>
          <h1 className="text-3xl font-bold mb-8 mt-3">ARCHITECTURAL BARRIERS</h1>
          <p>
            The Museum has no architectural barriers. Visits take place over two
            floors, and a lift is available for persons with limited mobility.
          </p>
        </div>
        <div className="w-[50%]">
          <h1 className="text-3xl font-bold mb-10 mt-20">RESTRICTIONS</h1>
          <p>
            Visitors are not permitted to touch the vehicles and materials on
            display, and it is not permitted to enter the vehicles or remove
            anything from the Museum. Eating is not allowed inside the Museum.
            Animals may not enter, with the exception of guide dogs for the
            blind. Visitors are asked to behave in a manner appropriate for a
            museum, showing respect to the staff and other visitors; this
            includes their choice of attire and tone of voice. Those
            accompanying children and minors are responsible for their behavior
            at all times. The use of cellular phones is permitted as long as
            care is taken not to disturb or inconvenience others
          </p>
          <h1 className="text-3xl font-bold mb-8  mt-9">REDUCED RATES</h1>
          <p>
            Documents certifying the right to reduced admission fees must be
            shown to staff on request. 
          </p>
        </div>
      </div>
     <div className="flex justify-center items-center flex-col text-center bg-gray-100">
          <h1 className="text-3xl font-bold m-8">PARTNERS</h1>
          <img
            className="h-[30vh] object-cover mb-28 ml-24"
            src="/logo-partner.webp"
            alt="motor"
          />
      </div>
    </Layout>
  );
}
