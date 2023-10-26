import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="lg:h-screen lg:max-container flexCenter flex-col lg:flex-row px-6 py-6">
      <div className="w-full absolute lg:relative opacity-[15%] lg:opacity-[1] z-0">
        <Image
          src="/about.svg"
          width={400}
          height={600}
          priority={true}
          alt="heroImage"
          className="object-cover h-screen lg:w-auto lg:h-auto lg:pr-3"
        />
      </div>
      <div className="text-[14px] lg:text-[16px] flex flex-col gap-4 leading-10">
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
      </div>
    </div>
  );
};

export default About;
