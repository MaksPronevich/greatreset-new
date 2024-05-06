import { FC } from "react";
import aboutImg from "@/assets/img/about-img.png";
import aboutIcon from "@/assets/img/about-icon.svg";

export const About: FC = () => {
  return (
    <section
      id="about"
      className="section mx-auto mb-28 h-[calc(100lvh-150px)] max-w-[1380px] rounded-3xl bg-black-secondary bg-[url('./assets/img/about-bg.png')] bg-cover bg-[center_bottom] bg-no-repeat py-12 sm:h-[calc(100vh-40px)]"
    >
      <div className="mx-auto max-w-[1178px] px-4">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-start">
          <div className="w-full max-w-[585px]">
            <h2 className="mb-6 flex items-center gap-3 text-2xl uppercase md:text-4xl">
              <img className="h-6 w-6 md:h-[50px] md:w-[50px]" src={aboutIcon} alt="About" />
              <span>
                Abo<span className="font-dirtyline">u</span>t
              </span>
            </h2>
            <div className="relative pb-[50%] lg:pb-[70%]">
              <img className="absolute left-0 top-0 h-full w-full object-contain" src={aboutImg} alt="About" />
            </div>
          </div>
          <div className="h-[310px] max-w-[445px] overflow-y-auto pr-2 sm:h-auto sm:pr-0">
            <div>
              <p>
                $ONE is the antidote to the convoluted world of meme coins. We`ve done away with inflated supplies and
                perplexing prices.
              </p>
              <br />
              <p className="text-gray">We present $ONE, a token with clear value - its price is its market cap.</p>
              <br />
              <p className="text-gray">Its development is community-incentivized and rewarded.</p>
              <br />
              <p className="text-gray">No illusions, no deceptions, just transparency and fairness.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
