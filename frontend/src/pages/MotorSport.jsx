import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import Layout from "../components/Layout";

export default function MotorSport() {
  return (
    <Layout>
      <div className="w-full h-screen bg-cover bg-[url(/motor.jpg)] p-32">
        <div className="text-white">
          <p className="text-4xl ">LAMBORGHINI</p>
          <h1 className="text-8xl font-bold">SUPER TROFEO</h1>

          <Link>
            <div className="h-14 w-14 rounded-full border-white border-2 flex items-center justify-center mt-5">
              <AiOutlineDown size={25} />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-between overflow-hidden">
        <div className="text-black w-[50%] mb-6 bg-white bg-cover p-20">
          <h1 className="text-3xl font-bold mb-8">SUPER TROFEO EUROPE</h1>
          <p className="text-base mb-8">
            The longest established Lamborghini championship takes place on the
            famous circuits of Europe in tandem with five of the races in the GT
            World Challenge Europe Powered by AWS. The Lamborghini Super Trofeo
            Europe is one of the most competitive one-make championships in the
            world. Over the years, some of the top GT racers, gentleman drivers
            and motorsport champions have battled it out on iconic tracks such
            as Monza, Silverstone, Paul Ricard and Spa-Francorchamps.
          </p>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              EUROPE CHAMPIONSHIP
            </h1>
          </Link>
        </div>
        <div className="romb overflow-hidden w-[50%] -mr-48">
          <img
            className="h-[60vh] object-cover"
            src="/motor2.jpg"
            alt="motor"
          />
        </div>
      </div>
      <div className="flex justify-between overflow-hidden">
      <div className="romb overflow-hidden w-[50%] -mr-48">
          <img
            className="h-[60vh] object-cover mt-20"
            src="/mot.webp"
            alt="motor"
          />
        </div>
        <div className="romb overflow-hidden w-[50%] -mr-5">
          <img
            className="h-[60vh] object-cover mb-28"
            src="/mot2.jpg"
            alt="motor"
          />
        </div>
      </div>
      <div className="flex overflow-hidden ">
        <div className="romb overflow-hidden w-[50%] -ml-[450px]">
          <img
            className="h-[60vh] object-cover w-full"
            src="/mot3.webp"
            alt="motor"
          />
        </div>
        <div className="text-black w-[50%] mb-6 bg-white p-24 ml-[200px]">
          <h1 className="text-3xl font-bold mb-8">
            SUPER TROFEO NORTH AMERICA
          </h1>
          <p className="text-base mb-8">
            From the East Coast to California, the Lamborghini Super Trofeo
            takes in circuits that have gone down in American motorsport
            history. It made its debut in North America in 2013 and from the
            very beginning it attracted professionals and gentleman drivers who
            were keen to put themselves to the test behind the wheel of a racing
            Lamborghini on tracks such as Laguna Seca and Watkins Glen. It has
            provided young drivers with invaluable experience and helped to pave
            their way to success in legendary races such as the 24 Hours of
            Daytona.
          </p>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              NORTH AMERIKA CHAMPIONSHIP
            </h1>
          </Link>
        </div>
      </div>
      <div className="flex justify-between overflow-hidden mb-20">
        <div className="text-black w-[40%] mb-6 bg-white bg-cover p-24">
          <h1 className="text-3xl font-bold mb-8">SUPER TROFEO ASIA</h1>
          <p className="text-base mb-8">
            Super Trofeo Asia has been a classic for Lamborghini sports
            customers since 2012. Over 254 drivers of 30 different nationalities
            have raced in the series, with an average number of participants
            growing at a steady pace. The series races are contended on iconic
            circuits such as Sepang and Fuji, but many Asian countries have
            hosted this championship.
          </p>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              SUPER TROFEO ASIA
            </h1>
          </Link>
        </div>
        <div className="romb overflow-hidden w-[60%] -mr-48">
          <img className="h-[80vh] object-cover" src="/mot4.webp" alt="motor" />
        </div>
      </div>
      <div className="flex justify-between overflow-hidden">
        <div className="romb overflow-hidden w-[60%] -ml-[200px]">
          <img className="h-[80vh] object-cover" src="/mot5.webp" alt="motor" />
        </div>
        <div className="text-black w-[40%] mb-6 bg-white  p-24 ml-[300px]">
          <h1 className="text-3xl font-bold mb-8">SUPER TROFEO GRAND FINAL</h1>
          <p className="text-base mb-8">
            The Lamborghini World Final has brought the curtain down on every
            Super Trofeo season since 2013. Every year, the drivers from all of
            the continental championships go to a different circuit and take
            part in two 50-minute Sprint races, with the overall winner being
            crowned as the Lamborghini world champion. As well as being the
            biggest racing weekend of the year, the Lamborghini World Final is a
            genuine motorsport festival that attracts fans and owners from all
            over the world.
          </p>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              SUPER TROFEO GRAND FINAL
            </h1>
          </Link>
        </div>
      </div>
      <div className="flex justify-between overflow-hidden mb-20">
        <div className="text-black w-[40%] mb-6 bg-white bg-cover p-24">
          <h1 className="text-3xl font-bold mb-8">SUPER TROFEO TEAMS</h1>
          <p className="text-base mb-8">
            All of the cars that take part in the Lamborghini Super Trofeo
            championships are run by private teams, which use their experience
            to fine-tune them for the drivers. There are both Driver and Team
            rankings for each of the Lamborghini Super Trofeo continental
            championships.
          </p>
          <Link>
            <h1 className="text-lg font-bold p-3 w-fit border-b border-black">
              TEAMS LIST
            </h1>
          </Link>
        </div>
        <div className="romb overflow-hidden w-[60%] -mr-48">
          <img className="h-[80vh] object-cover" src="/motors.webp" alt="motor" />
        </div>
      </div>
    </Layout>
  );
}
