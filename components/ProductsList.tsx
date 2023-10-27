import React from "react";
import { PRODUCTSLIST } from "@/constants/index";
import Image from "next/image";

const ProductsList = () => {
  return (
    <div>
      {PRODUCTSLIST.map((item) => (
        <div key={item.title}>
          <Image src={item.image} width={400} height={600} alt="im1" />
          <h2>{item.title}</h2>
          <ul>
            <li>{item.details}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
