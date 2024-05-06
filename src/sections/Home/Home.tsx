import { FC } from "react";
import { Header } from "@/sections";
import homeImg from "@/assets/img/home-img.png";

export const Home: FC = () => {
  return (
    <div className="mx-[5%] flex h-screen flex-col">
      <Header />
      <section className="flex flex-auto items-center py-10 lg:py-0">
        <div className="mx-auto w-full">
          <div className="flex flex-col-reverse items-center justify-between gap-4 lg:flex-row">
            <div className="lg:max-w-[50%]">
              <h1 className="mb-7 text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="font-dirtyline">W</span>elcome to the world of{" "}
                <span className="uppercase text-red">$øñE</span>, the start of a new number trend.{" "}
              </h1>
              <p className="text-gray lg:text-lg xl:text-xl 2xl:text-2xl">
                A revolutionary crypto that dares to redefine the conventions of the crypto landscape.
              </p>
            </div>
            <div className="fold relative w-full pb-[60%] lg:pb-[46%]">
              <img className="absolute left-0 top-0 h-full w-full object-contain" src={homeImg} alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
