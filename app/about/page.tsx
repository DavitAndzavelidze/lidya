"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { rightToLeft, leftToRight } from "@/utils/motion";

const About = () => {
  return (
    <div className="pt-[2rem] md:pt-0 md:h-screen lg:max-container flexCenter flex-col lg:flex-row px-6 py-6 ">
      <motion.div
        variants={leftToRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full absolute lg:relative opacity-[15%] lg:opacity-[1] z-0"
      >
        <Image
          src="/about.svg"
          width={400}
          height={600}
          priority={true}
          alt="heroImage"
          className="hidden lg:block lg:w-auto lg:h-auto lg:pr-3 "
        />
      </motion.div>
      <motion.div
        variants={rightToLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-[14px] lg:text-[16px] flex flex-col gap-4 leading-10 lg:bg-slate-300/75 lg:py-3 lg:px-6 lg:rounded-xl lg:shadow-xl"
      >
        <p>
          <span className="font-bold text-[20px]"> About Us </span> -LIDYA
          company is a leader in distribution of steel long and flat products
          from Europe and Turkey. We are exclusively selling rebars, wire rods,
          merchant bar, steel profiles , Prepainted hot dipped galvanized coils
          and galvanized hot dipped coils from the main steel mills. Our
          experience as global traders enable us to link customers with a wide
          range of suppliers. We also guarantee to assist our customers to find
          the products that suits the best for their needs
        </p>
        <p>
          <span className="font-bold text-[20px]">Hakkımızda </span> -LIDYA
          şirketi, Avrupa ve Türkiye&apos;den çelik uzun ve yassı ürün
          dağıtımında lider bir şirkettir. Ana çelik fabrikalarından yalnızca
          inşaat demiri, filmaşin, ticari profil, çelik profil, Boyalı sıcak
          daldırma galvanizli çelik rulo ve galvanizli sıcak daldırma çelik rulo
          satıyoruz. Küresel tüccarlar olarak deneyimimiz, müşterilerimizi geniş
          bir tedarikçi yelpazesine bağlamamızı sağlıyor. Ayrıca
          müşterilerimizin ihtiyaçlarına en uygun ürünleri bulmalarına yardımcı
          olacağımızı da garanti ediyoruz.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
