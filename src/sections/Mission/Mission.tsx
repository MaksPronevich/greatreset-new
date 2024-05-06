import { FC } from "react";
import missionImg from "@/assets/img/mission-img.png";
import missionIcon from "@/assets/img/mission-icon.svg";

export const Mission: FC = () => {
  return (
    <section
      id="mission"
      className="section mx-auto mb-28 h-[calc(100lvh-150px)] max-w-[1380px] rounded-3xl bg-black-secondary bg-[url('./assets/img/mission-bg.png')] bg-cover bg-[center_bottom] bg-no-repeat py-12 sm:h-[calc(100vh-40px)]"
    >
      <div className="mx-auto max-w-[1178px] px-4">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-start">
          <div className="w-full max-w-[585px]">
            <h2 className="mb-6 flex items-center gap-3 text-2xl uppercase md:text-4xl">
              <img className="h-6 w-6 md:h-[50px] md:w-[50px]" src={missionIcon} alt="Mission" />
              <span>
                Mis<span className="font-dirtyline">s</span>ion
              </span>
            </h2>
            <div className="relative pb-[50%] lg:pb-[70%]">
              <img className="absolute left-0 top-0 h-full w-full object-contain" src={missionImg} alt="Mission" />
            </div>
          </div>
          <div className="h-[310px] max-w-[445px] overflow-y-auto pr-2 sm:h-auto sm:pr-0">
            <div>
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
      </div>
    </section>
  );
};
