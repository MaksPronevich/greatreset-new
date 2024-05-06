import { FC } from "react";
import roadmapImg from "@/assets/img/roadmap-img.png";
import roadmapIcon from "@/assets/img/roadmap-icon.svg";

export const Roadmap: FC = () => {
  return (
    <section
      id="roadmap"
      className="section mx-auto mb-28 h-[calc(100lvh-150px)] max-w-[1380px] rounded-3xl bg-black-secondary bg-[url('./assets/img/roadmap-bg.png')] bg-cover bg-[center_bottom] bg-no-repeat py-12 sm:h-[calc(100vh-40px)]"
    >
      <div className="mx-auto max-w-[1178px] px-4">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-start">
          <div className="w-full max-w-[585px]">
            <h2 className="mb-6 flex items-center gap-3 text-2xl uppercase md:text-4xl">
              <img className="h-6 w-6 md:h-[50px] md:w-[50px]" src={roadmapIcon} alt="Roadmap" />
              <span>
                Roa<span className="font-dirtyline">D</span>map
              </span>
            </h2>
            <div className="relative pb-[50%] lg:pb-[70%]">
              <img className="absolute left-0 top-0 h-full w-full object-contain" src={roadmapImg} alt="Roadmap" />
            </div>
          </div>
          <div className="h-[310px] max-w-[445px] overflow-y-auto pr-2 sm:h-auto sm:pr-0">
            <h3 className="mb-2 text-xl font-bold lg:text-2xl">Phase 1: Launch</h3>
            <p className="text-gray">
              We hit the ground running with the launch of $ONE and the establishment of our DAO. The groundwork is
              laid, and the revolution has begun.
            </p>
            <br />
            <h3 className="mb-2 text-xl font-bold lg:text-2xl">Phase 2: Community Building & Development</h3>
            <p className="text-gray">
              We foster community development and encourage participation through our hackathon. Developers have a
              chance to obtain different percentages of the total supply prize for their contributions.
            </p>
            <br />
            <h3 className="mb-2 text-xl font-bold lg:text-2xl">Phase 3: Growth & Expansion</h3>
            <p className="text-gray">
              We continue to grow and expand, taking $ONE to new heights. The journey doesn`t end here. As we progress,
              we continue to disrupt, innovate, and make our mark on the crypto landscape.
            </p>
            <br />
            <p>Join us, and be a part of The Great Reset - $ONE.</p>
            <br />
            <p>Nobody will ever own ONE, but everyone will want to own ONE. Will you?</p>
          </div>
        </div>
      </div>
    </section>
  );
};
