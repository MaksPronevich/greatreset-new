import { FC } from "react";
import tokenomicsImg from "@/assets/img/tokenomics-img.png";
import tokenomicsIcon from "@/assets/img/tokenomics-icon.svg";

export const Tokenomics: FC = () => {
  return (
    <section
      id="tokenomics"
      className="section mx-auto mb-28 h-[calc(100lvh-150px)] max-w-[1380px] rounded-3xl bg-black-secondary bg-[url('./assets/img/tokenomics-bg.png')] bg-cover bg-[center_bottom] bg-no-repeat py-12 sm:h-[calc(100vh-40px)]"
    >
      <div className="mx-auto max-w-[1178px] px-4">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-start">
          <div className="w-full max-w-[585px]">
            <h2 className="mb-6 flex items-center gap-3 text-2xl uppercase md:text-4xl">
              <img className="h-6 w-6 md:h-[50px] md:w-[50px]" src={tokenomicsIcon} alt="Tokenomics" />
              <span>
                <span className="font-dirtyline">T</span>okenomics
              </span>
            </h2>
            <div className="relative pb-[50%] lg:pb-[70%]">
              <img
                className="absolute left-0 top-0 h-full w-full object-contain"
                src={tokenomicsImg}
                alt="Tokenomics"
              />
            </div>
          </div>
          <div className="h-[310px] max-w-[445px] overflow-y-auto pr-2 sm:h-auto sm:pr-0">
            <h3 className="mb-8 text-2xl font-bold">Token Supply: 1 $ONE</h3>
            <div>
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
