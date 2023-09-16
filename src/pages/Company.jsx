import React from "react";
import Layout from "../components/Layout";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { employers, news } from "../utils/postData";

export default function Company() {
  return (
    <Layout>
      <div className="w-full h-screen bg-cover bg-[url(/00_hero.jpg)] p-32">
        <div className="text-white">
          <p className="text-4xl ">AUTOMOBILI LAMBORGHINI</p>
          <h1 className="text-8xl font-bold">COMPANY</h1>

          <Link>
            <div className="h-14 w-14 rounded-full border-white border-2 flex items-center justify-center mt-5">
              <AiOutlineDown size={25} />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-between overflow-hidden">
        <div className="text-black w-[50%] mb-6 bg-white bg-cover p-20">
          <h1 className="text-3xl font-bold mb-8">COMPANY PROFILE</h1>
          <p className="text-base mb-8">Automobili Lamborghini S.p.A.</p>
          <p className="text-base mb-8">
            Founded in 1963, Automobili Lamborghini is headquartered in
            Sant’Agata Bolognese, in Northern Italy.
          </p>
          <p className="text-base mb-8">
            Lamborghini currently produces two super sports car models, the
            V12-powered Aventador, launched in 2011, and the V10-powered
            Huracán, launched in 2014, along with the Urus Super SUV powered by
            a twin-turbo V8 engine, launched in 2017..
          </p>
          <p className="text-base mb-8">
            For over half a century Automobili Lamborghini created a continuous
            series of dream cars, including the 350 GT, Miura, Espada, Countach,
            Diablo, and Murciélago, as well as limited editions such as the
            Reventón, Sesto Elemento, Veneno and the Centenario. With the
            unveiling in 2019 of the Lamborghini Sián FKP 37, a few-off build of
            only 63 units, the company delivers unique new hybrid technologies,
            featuring the world-first application of a supercapacitor for
            hybridization, new materials technology, and unsurpassed Lamborghini
            performance.
          </p>
        </div>
        <div className="romb overflow-hidden w-[50%] -mr-48">
          <img
            className="h-[60vh] object-cover pb-5"
            src="/01_s1.webp"
            alt="motor"
          />
          <img
            className="h-[60vh] object-cover "
            src="/02_s2.webp"
            alt="motor"
          />
        </div>
      </div>
      <div className="flex overflow-hidden ">
        <div className="romb overflow-hidden w-[70%] -ml-[450px] pt-5">
          <img
            className="h-[70vh] object-cover w-full pb-5"
            src="/03_s3.webp"
            alt="motor"
          />
          <img
            className="h-[60vh] object-cover w-full"
            src="/04_s4.webp"
            alt="motor"
          />
        </div>

        <div className="text-black w-[50%] mb-6 bg-white p-24 ml-[200px] mt-28">
          <p className="text-base  mb-8">
            In 2021 Lamborghini dedicated itself to the Countach for its 50th
            anniversary. A limited and futuristic edition of the super sports
            car, the iconic Countach LPI 800-4 boasts a revolutionary design and
            is a technology rule-breaker.
          </p>
          <h1 className="pb-3 font-bold">Company data</h1>
          <p>
            Automobili Lamborghini S.p.A., with legal seat in S. Agata Bolognese
            (BO) 40019 Via Modena 12 Italy Business Register of Bologna no.
            259882 Share capital duly paid up Euros 130.000.000 P Iva
            00591801204 Fiscal code 03049840378 A sole shareholder company part
            of Audi Group Registered email address:
            automobililamborghini@legalmail.it
          </p>
        </div>
      </div>
      <div className="container flex bg-stone-200 justify-between w-[90%] mx-auto my-10">
        <div className="w-[50%]">
          <img
            className="object-cover mx-auto"
            src="/eployer/wink.webp"
            alt="motor"
          />
        </div>
        <div className="w-[50%]  p-14">
          <h1 className="font-bold text-3xl pb-8">STEPHAN WINKELMANN</h1>
          <h1 className="font-bold text-3xl">
            CHAIRMAN & CHIEF EXECUTIVE OFFICER
          </h1>
          <p>
            Stephan Winkelmann was born in Berlin on the 18 October 1964 and
            grew up in Rome, Italy. He studied political science in Rome and
            took his degree in Munich. In 1991 he started his professional
            career at a German financial institution before moving to the
            automotive industry, working firstly for Mercedes-Benz and then for
            Fiat Auto from 1994 to 2004, until he was appointed CEO of Fiat Auto
            Austria, Switzerland and Germany. Stephan Winkelmann was President
            and CEO of Automobili Lamborghini S.p.A from 2005 to 2016. In March
            2016, he became CEO of Quattro GmbH (today Audi Sport GmbH) before
            joining Bugatti Automobiles S.A.S. as President from the beginning
            of 2018 until November 2021. Winkelmann returned to Lamborghini as
            President and CEO on 1 December 2020.
          </p>
        </div>
      </div>
      <div className="container flex flex-wrap justify-between w-[90%] mx-auto my-10">
        {employers.map((employer) => (
          <div className="w-[30%]" key={employer.id}>
            <div className="bg-stone-200">
              <img src={employer.url} alt={employer.name} />
            </div>
            <div className="p-10">
              <h1 className="font-bold text-2xl">{employer.name}</h1>
              <p className="italic">{employer.role}</p>
            </div>
          </div>
        ))}
      </div>
      {news.map((post) => (
        <div key={post.id} className="container flex w-[90%] mx-auto my-10">
          <img className="w-[50%]" src={post.url} alt="asd" />
          <div className="px-6 py-3 w-[50%]">
            <h1 className="text-3xl font-bold my-2 pb-4">{post.title}</h1>
            <p className="">{post.subtitle}</p>
          </div>
        </div>
      ))}
    </Layout>
  );
}
