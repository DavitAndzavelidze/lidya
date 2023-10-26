import React from "react";
import { PRODUCTS } from "@/constants";
import Image from "next/image";

const Products = () => {
  return (
    <div className="h-screen flexCenter max-container flexCenter px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 lg:gap-4">
        {PRODUCTS.map((product) => (
          <Image
            key={product}
            src={product}
            priority={true}
            width={150}
            height={200}
            alt="productImage"
            className="object-cover w-[200px] h-full lg:w-[300px] lg:h-[300px] rounded-lg lg:hover:-translate-y-1 lg:transition-transform"
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
