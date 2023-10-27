"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { rightToLeft, leftToRight } from "@/utils/motion";

export default function Home() {
  return (
    <main className="h-screen flexCenter max-container flex-col lg:flex-row-reverse">
      <motion.div
        variants={rightToLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full absolute lg:relative opacity-[15%] lg:opacity-[1]"
      >
        <Image
          src="/hero.svg"
          width={400}
          height={600}
          priority={true}
          alt="heroImage"
          className="hidden lg:block lg:w-auto lg:h-auto"
        />
      </motion.div>
      <motion.div
        variants={leftToRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flexCenter flex-col max-w-lg gap-[1.2rem] px-6 lg:px-3 z-20"
      >
        <h1 className="fontHero lg:text-[45px] self-start">
          Welcome to <span className="text-blue-700">LIDYA</span> Company
        </h1>
        <p className="text-[18px]">
          Your premier source for top-quality steel products from Europe and
          Turkey
        </p>
        <div className="flexStart w-full">
          <Link href="/products">
            <Button
              type="button"
              alt="products"
              title="Our Products"
              variant="btn_blue"
            />
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
