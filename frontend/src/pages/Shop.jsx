import React from "react";
import Layout from "../components/Layout";
import Product from "../components/Product";

export default function Shop() {
  return (
    <Layout>
      <div className=" mx-20 my-16">
        <h1 className="font-bold text-5xl">TRAVEL</h1>
        <div className=" bg-[url(/1920x600.jpg)]  h-[60vh] w-full  bg-cover"></div>
      </div>
      <div className="container flex flex-wrap justify-between w-[90%] mx-auto my-10">
        <Product
          title="Automobili Lamborgini Iconic Padded Gilet"
          price="203.00"
          img="https://static.lamborghinistore.com/rx/500x,ofmt_webp/media/catalog/product/1/6/16197PAU095_01.jpg"
        />
        <Product
          title="Automobili Lamborgini Iconic Padded Gilet"
          price="203.00"
          img="https://static.lamborghinistore.com/rx/500x,ofmt_webp/media/catalog/product/1/6/16197PAU095_01.jpg"
        />
      </div>
    </Layout>
  );
}
