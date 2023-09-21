import React from "react";

export default function Product({ title, price, img }) {
  return (
    <div className="w-[30%]">
      <div className="bg-stone-200">
        <img
          src={img}
          alt="Automobili Lamborghini Iconic Padded Gilet - Man Collection | Lamborghini Store"
          title="Automobili Lamborghini Iconic Padded Gilet - Man Collection | Lamborghini Store"
          className="lazyloading-image img-loaded"
        />
      </div>
      <div className="p-10">
        <h1 className="">{title}</h1>
        <p className="italic text-center">${price}</p>
      </div>
    </div>
  );
}
