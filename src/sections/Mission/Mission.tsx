import { FC } from "react";
import missionImg from "@/assets/img/mission-img.png";
import missionIcon from "@/assets/img/mission-icon.svg";

export const Mission: FC = () => {
  return (
    <section id="mission" className="mx-[2%] py-[2%] lg:h-screen">
      <div className="h-full rounded-3xl bg-black-secondary bg-[url('./assets/img/mission-bg.png')] bg-cover bg-[center_bottom] bg-no-repeat px-[5%] py-8 sm:py-12 xl:py-20">
        <div className="flex flex-col items-center justify-between gap-[6%] lg:flex-row lg:items-start">
          <div className="w-full lg:max-w-[47%]">
            <h2 className="mb-6 flex flex-wrap items-center gap-3 text-2xl uppercase md:text-3xl lg:mb-8 xl:mb-10 xl:text-4xl 2xl:text-5xl">
              <img className="h-6 w-6 md:h-[50px] md:w-[50px]" src={missionIcon} alt="Mission" />
              <span>
                Mis<span className="font-dirtyline">s</span>ion
              </span>
            </h2>
            <div className="relative my-8 pb-[65%] lg:my-0 lg:pb-[80%]">
              <img className="absolute left-0 top-0 h-full w-full object-contain" src={missionImg} alt="Mission" />
            </div>
          </div>
          <div className="mb-6 md:text-lg lg:mb-8 lg:max-w-[47%] lg:text-xl xl:mb-10 xl:text-2xl 2xl:text-3xl">
            <p>
              Our mission is to disrupt the status quo, foster community participation, and contribute meaningfully to
              the crypto space.
            </p>
            <br />
            <p className="text-gray">We want to incentivize and reward those who build with us, not just own.</p>
            <br />
            <p className="text-gray">
              Unlike other meme coins, $ONE is not just community-owned; it`s community-driven and community rewarded.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
