import React from "react";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <div className="bg-white container mx-20 my-12 mb-20">
      <p className="text-4xl font-bold">NEWS</p>
      <h1 className="text-8xl font-bold">LAMBORGHINI WORLD</h1>
      <div className="w-full bg-center bg-cover h-screen bg-[url(/ocr.jpg)]"></div>
      <div className="mb-10">
        <p className="font-bold p-2">21 AUGUST 2023</p>
        <div className="flex items-center">
          <h1 className="text-4xl font-bold p-2 w-[80%]">
            LAMBORGHINI HIGHLIGHTS FROM MONTEREY CAR WEEK 2023
          </h1>
          <button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 h-12 border border-black-500 hover:border-transparent rounded">
            READ MORE
          </button>
        </div>
        <p className="p-2">
          Automobili Lamborghini closed another incredible experience at
          Monterey Car Week, with a striking presence at the 72nd Pebble Beach
          Concours d’Elegance.
        </p>
      </div>
      <div className="flex justify-between mb-6">
        <img className="w-[40%]" src="/news1.jpg" alt="" />
        <div className="p-3">
          <p>21 AUGUST 2023</p>
          <h1 className="text-2xl font-bold my-2">
            60TH ANNIVERSARY AT LAMBORGHINI LOURGE MONTEREY
          </h1>
          <button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded ">
            READ MORE
          </button>
        </div>
      </div>
      <div className="flex justify-between mb-6">
        <img className="w-[40%]" src="/news2.jpg" alt="" />
        <div className="p-3">
          <p>20 AUGUST 2023</p>
          <Link className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-1 px-2 border border-black-500 hover:border-transparent rounded text-sm">
            EVENTS
          </Link>
          <h1 className="text-2xl font-bold my-2">
            60TH ANNIVERSARY AT LAMBORGHINI LOURGE MONTEREY
          </h1>
          <button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded ">
            READ MORE
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link className="bg-black text-white hover:bg-black-500 bg-center text-center text-white-700 font-semibold hover:text-white py-2 px-8 border border-black-500  rounded ">
          SEE ALL
        </Link>
      </div>
    </div>
  );
}
