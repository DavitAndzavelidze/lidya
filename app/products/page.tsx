"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import Image from "next/image";
import { PRODUCTSLIST } from "@/constants";
import { motion } from "framer-motion";
import { topToBottom } from "@/utils/motion";

const YourPage = () => {
  const [selectedContent, setSelectedContent] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content: any) => {
    setSelectedContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedContent(null);
    setIsModalOpen(false);
  };
  return (
    <motion.div
      variants={topToBottom}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="h-screen flexCenter max-container flexCenter px-6"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 lg:gap-4">
        {PRODUCTSLIST.map((product, index) => (
          <div key={index} onClick={() => openModal(product)}>
            <Image
              src={product.image}
              priority={true}
              width={150}
              height={200}
              alt={`Image ${index}`}
              className="object-cover w-[200px] h-full lg:w-[300px] lg:h-[300px] rounded-lg lg:hover:-translate-y-1 lg:transition-transform"
            />
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedContent && (
          <div className="w-[300px] md:w-[400px]">
            <Image
              src={selectedContent.image}
              width={400}
              height={600}
              alt="Selectedimage"
            />
            <div className="pt-4 flex flex-col">
              <h2 className="font-bold">{selectedContent.title}</h2>
              <p className="w-[200px]">{selectedContent.details}</p>
              <button className=" mt-4 self-end" onClick={closeModal}>
                <Image
                  src="/closeBlack.svg"
                  width={20}
                  height={20}
                  alt="closebtn"
                />
              </button>
            </div>
          </div>
        )}
      </Modal>
    </motion.div>
  );
};

export default YourPage;
