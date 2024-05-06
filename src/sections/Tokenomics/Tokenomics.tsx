import { FC } from "react";
import tokenomicsImg from "@/assets/img/tokenomics-img.png";
import tokenomicsIcon from "@/assets/img/tokenomics-icon.svg";

export const Tokenomics: FC = () => {
  return (
    <section id="tokenomics" className="mx-[2%] py-[2%] lg:h-screen">
      <div className="h-full rounded-3xl bg-black-secondary bg-[url('./assets/img/tokenomics-bg.png')] bg-cover bg-[center_bottom] bg-no-repeat px-[5%] py-8 sm:py-12 xl:py-20">
        <div className="flex flex-col items-center justify-between gap-[6%] lg:flex-row lg:items-start">
          <div className="w-full lg:max-w-[47%]">
            <h2 className="mb-6 flex flex-wrap items-center gap-3 text-2xl uppercase md:text-3xl lg:mb-8 xl:mb-10 xl:text-4xl 2xl:text-5xl">
              <img className="h-6 w-6 md:h-[50px] md:w-[50px]" src={tokenomicsIcon} alt="Tokenomics" />
              <span>
                <span className="font-dirtyline">T</span>okenomics
              </span>
            </h2>
            <div className="relative my-8 pb-[65%]  lg:my-0 lg:pb-[80%]">
              <img
                className="absolute left-0 top-0 h-full w-full object-contain"
                src={tokenomicsImg}
                alt="Tokenomics"
              />
            </div>
          </div>
          <div className="lg:max-w-[47%]">
            <h3 className="mb-8 text-2xl font-bold xl:text-3xl 2xl:text-4xl">Token Supply: 1 $ONE</h3>
            <div className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              <p>$ONE isn`t like other tokens.</p>
              <br />
              <p className="text-gray">
                With just ONE token in supply, the value of $ONE is as clear as day - the price of the ONE token equals
                the market cap.
              </p>
              <br />
              <p>No taxes. No presale. This is the ultimate reset, the game changer. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
