import { FC } from "react";
import aboutImg from "@/assets/img/about-img.png";
import aboutIcon from "@/assets/img/about-icon.svg";

export const About: FC = () => {
  return (
    <section id="about" className="mx-[2%] py-[2%] lg:h-screen">
      <div className="h-full rounded-3xl bg-black-secondary bg-[url('./assets/img/about-bg.png')] bg-cover bg-[center_bottom] bg-no-repeat px-[5%] py-8 sm:py-12 xl:py-20">
        <div className="flex flex-col items-center justify-between gap-[6%] lg:flex-row lg:items-start">
          <div className="w-full lg:max-w-[47%]">
            <h2 className="mb-6 flex flex-wrap items-center gap-3 text-2xl uppercase md:text-3xl lg:mb-8 xl:mb-10 xl:text-4xl 2xl:text-5xl">
              <img className="h-6 w-6 md:h-[50px] md:w-[50px]" src={aboutIcon} alt="About" />
              <span>
                Abo<span className="font-dirtyline">u</span>t
              </span>
            </h2>
            <div className="relative my-8 pb-[65%]  lg:my-0 lg:pb-[80%]">
              <img className="absolute left-0 top-0 h-full w-full object-contain" src={aboutImg} alt="About" />
            </div>
          </div>
          <div className="mb-6 md:text-lg lg:mb-8 lg:max-w-[47%] lg:text-xl xl:mb-10 xl:text-2xl 2xl:text-3xl">
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
    </section>
  );
};
