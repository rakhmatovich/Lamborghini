import React from "react";
import {Link} from "react-router-dom";
import {AiOutlineDown} from "react-icons/ai";
import Layout from "../components/Layout";

export default function MotorSport() {
    return (
        <Layout>
            <div className="w-full h-screen bg-cover bg-[url(/motor.jpg)] p-32">
                <div className="text-white">
                    <p className="text-4xl ">LAMBORGHINI</p>
                    <h1 className="text-8xl font-bold">SUPER TROFEO</h1>

                    <Link>
                        <div
                            className="h-14 w-14 rounded-full border-white border-2 flex items-center justify-center mt-5">
                            <AiOutlineDown size={25}/>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex justify-between overflow-hidden">
                <div className="text-black w-[50%] mb-6 bg-white bg-cover">
                    <h1 className="text-5xl font-bold">SUPER TROFEO EUROPE</h1>
                    <p className="text-xl">
                        The longest established Lamborghini championship takes place on the
                        famous circuits of Europe in tandem with five of the races in the GT
                        World Challenge Europe Powered by AWS. The Lamborghini Super Trofeo
                        Europe is one of the most competitive one-make championships in the
                        world. Over the years, some of the top GT racers, gentleman drivers
                        and motorsport champions have battled it out on iconic tracks such
                        as Monza, Silverstone, Paul Ricard and Spa-Francorchamps.
                    </p>
                    <Link>
                        <h1 className="text-4xl">EUROPE CHAMPIONSHIP</h1>
                    </Link>
                </div>
                <div className="romb overflow-hidden w-[50%] -mr-64">
                    <img className='h-[60vh] object-cover' src="/motor2.jpg" alt="motor"/>
                </div>
            </div>
        </Layout>
    );
}
