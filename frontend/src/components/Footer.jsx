import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="w-full bg-[#181818] text-white px-10 pt-10">
      <div className="flex justify-between">
        <div className="w-[60%]">
          <Link className="py-3 px-4 ">COMPANY</Link>
          <Link className="py-3 px-4 ">CAREERS</Link>
          <Link className="py-3 px-4 ">CONTACT US</Link>
          <Link className="py-3 px-4 ">MOTORSPORT</Link>
          <Link className="py-3 px-4 ">MEDIA CENTER</Link>
          <Link className="py-3 px-4 ">PRIVACY & LEGAL</Link>
          <Link className="py-3 px-4 ">COOKIE SETTINGS</Link>
          <Link className="py-3 px-4 ">SITEMAP</Link>
          <Link className="py-3 px-4 ">NEWSLETTER</Link>
          <Link className="py-3 px-4 ">ACCESSIBILITY</Link>
        </div>
        <div className="w-[30%] flex">
          <Link className="m-2">
            <BsInstagram size={20} />
          </Link>
          <Link className="m-2">
            <BiLogoFacebook size={20} />
          </Link>
          <Link className="m-2">
            <BsYoutube size={20}/>
          </Link>
          <Link className="m-2">
            <FaTiktok size={20}/>
          </Link>
          <Link className="m-2">
            <AiFillLinkedin size={20}/>
          </Link>
          <Link className="m-2">
            <BsDiscord size={20}/>
          </Link>
        </div>
      </div>
      <div className="relative items-center w-full bg-[#181818] text-white px-10 py-9">
        <p className="text-sm py-6 ">
          * The consumption and emissions values in the website refer to your
          geographical IP. This value might be unrealistic if you navigate using
          VPN or if the position of your Internet provider is imprecise. If you
          believe you are incorrectly geolocalized, contact your dealer to get
          valid consumption and emissions information in your area
        </p>
        <p className=" text-base">
        Copyright © 2023 Automobili Lamborghini S.p.A. a sole shareholder company part of Audi Group.
        </p>
        <p className="text-base">All rights reserved. VAT no. IT 00591801204</p>
        <p className="text-base">WARNING ABOUT ILLEGAL OFFERS OF ALLEGED SHARES OF AUTOMOBILI LAMBORGHINI S.P.A.</p>
        <p className="text-base">Automobili Lamborghini S.p.A. got the notice that several third parties across different countries are allegedly offering shares in Automobili Lamborghini S.p.A. These offers are unlawful and originate neither from Volkswagen Aktiengesellschaft nor from any of its subsidiaries.</p>
      </div>
    </div>
  );
}
