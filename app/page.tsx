import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flexCenter max-container flex-col lg:flex-row-reverse">
      <div className="w-full absolute lg:relative opacity-[15%] lg:opacity-[1]">
        <Image
          src="/hero.svg"
          width={400}
          height={600}
          priority={true}
          alt="heroImage"
          className="object-cover h-screen lg:w-auto lg:h-auto"
        />
      </div>
      <div className="flexCenter flex-col max-w-lg gap-[1.2rem] px-6 lg:px-3 z-20">
        <h1 className="fontHero lg:text-[45px] self-start">
          Welcome to <span className="text-blue-700">LIDYA</span> Company
        </h1>
        <p className="text-[18px]">
          Your premier source for top-quality steel products from Europe and
          Turkey
        </p>
        <div className="flexStart w-full">
          <Button
            type="button"
            alt="products"
            title="Our Products"
            variant="btn_blue"
          />
        </div>
      </div>
    </main>
  );
}
