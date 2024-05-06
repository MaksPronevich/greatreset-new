import { FC } from "react";
import roadmapImg from "@/assets/img/roadmap-img.png";
import roadmapIcon from "@/assets/img/roadmap-icon.svg";

export const Roadmap: FC = () => {
  return (
    <section id="roadmap" className="mx-[2%] min-h-screen py-[2%]">
      <div className="h-full rounded-3xl bg-black-secondary bg-[url('./assets/img/roadmap-bg.png')] bg-cover bg-[center_bottom] bg-no-repeat px-[5%] py-8 sm:py-12 xl:py-20">
        <div className="flex flex-col items-center justify-between gap-[6%] lg:flex-row lg:items-start">
          <div className="w-full lg:max-w-[47%]">
            <h2 className="mb-6 flex flex-wrap items-center gap-3 text-2xl uppercase md:text-3xl lg:mb-8 xl:mb-10 xl:text-4xl 2xl:text-5xl">
              <img className="h-6 w-6 md:h-[50px] md:w-[50px]" src={roadmapIcon} alt="Roadmap" />
              <span>
                Roa<span className="font-dirtyline">D</span>map
              </span>
            </h2>
            <div className="relative my-8 pb-[70%] lg:my-0 lg:pb-[80%]">
              <img className="absolute left-0 top-0 h-full w-full object-contain" src={roadmapImg} alt="Roadmap" />
            </div>
          </div>
          <div className="lg:max-w-[47%]">
            <h3 className="mb-2 text-2xl font-bold xl:text-3xl 2xl:text-4xl">Phase 1: Launch</h3>
            <p className="text-gray lg:text-lg xl:text-xl 2xl:text-2xl">
              We hit the ground running with the launch of $ONE and the establishment of our DAO. The groundwork is
              laid, and the revolution has begun.
            </p>
            <br />
            <h3 className="mb-2 text-2xl font-bold xl:text-3xl 2xl:text-4xl">
              Phase 2: Community Building & Development
            </h3>
            <p className="text-gray lg:text-lg xl:text-xl 2xl:text-2xl">
              We foster community development and encourage participation through our hackathon. Developers have a
              chance to obtain different percentages of the total supply prize for their contributions.
            </p>
            <br />
            <h3 className="mb-2 text-2xl font-bold xl:text-3xl 2xl:text-4xl">Phase 3: Growth & Expansion</h3>
            <p className="text-gray lg:text-lg xl:text-xl 2xl:text-2xl">
              We continue to grow and expand, taking $ONE to new heights. The journey doesn`t end here. As we progress,
              we continue to disrupt, innovate, and make our mark on the crypto landscape.
            </p>
            <br />
            <p className="lg:text-lg xl:text-xl 2xl:text-2xl">Join us, and be a part of The Great Reset - $ONE.</p>
            <br />
            <p className="lg:text-lg xl:text-xl 2xl:text-2xl">
              Nobody will ever own ONE, but everyone will want to own ONE. Will you?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
