"use client";
import React from "react";
import { PRODUCTS } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { topToBottom } from "@/utils/motion";

const Products = () => {
  return (
    <motion.div
      variants={topToBottom}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="h-screen flexCenter max-container flexCenter px-6"
    >
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
    </motion.div>
  );
};

export default Products;
