import { FC, useRef } from "react";
import { Header } from "@/sections";
import { useHoverAnimation } from "@/hooks";
import homeImg from "@/assets/img/home-img.png";

export const Home: FC = () => {
  const homeBlock = useRef<HTMLDivElement>(null);
  const { transform } = useHoverAnimation(homeBlock, {
    x: -60,
    y: -60,
    z: 60,
  });

  return (
    <div className="section mb-28 flex flex-col md:h-screen" ref={homeBlock}>
      <Header />
      <section className="flex flex-auto items-center  py-10 lg:py-0">
        <div className="mx-auto w-full max-w-[1178px] px-4">
          <div className="flex flex-col-reverse items-center gap-4 lg:flex-row">
            <div className="max-w-[585px]">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                <span className="font-dirtyline">W</span>elcome to the world of{" "}
                <span className="uppercase text-red">$øñE</span>, the start of a new number trend.{" "}
              </h1>
              <p className="text-gray">
                A revolutionary crypto that dares to redefine the conventions of the crypto landscape.
              </p>
            </div>
            <div
              className="relative w-full pb-[60%] lg:flex-[0_1_561px] lg:pb-[46%]"
              style={{
                transform,
              }}
            >
              <img className="absolute left-0 top-0 h-full w-full object-contain" src={homeImg} alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
