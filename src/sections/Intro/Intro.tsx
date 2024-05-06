import { FC } from "react";
import { useCopyText } from "@/hooks";
import { configuration } from "@/config";
import copyImg from "@/assets/img/copy.svg";
import buyBtnImg from "@/assets/img/buy-btn.svg";
import introImg from "@/assets/img/intro-img.png";
import introIcon from "@/assets/img/intro-icon.svg";

export const Intro: FC = () => {
  const { isNotificationVisible, copyHandler } = useCopyText();
  const { socials, buyNowLink, tokenAddress } = configuration;

  return (
    <section id="intro" className="mx-[2%] py-[2%] lg:h-screen">
      <div className="h-full rounded-3xl bg-black-secondary bg-[url('./assets/img/intro-bg.png')] bg-cover bg-[center_bottom] bg-no-repeat px-[5%] py-8 sm:py-12 xl:py-20">
        <div className="flex flex-col items-center justify-between gap-[6%] lg:flex-row lg:items-start">
          <div className="flex w-full flex-col lg:max-w-[47%]">
            <h2 className="mb-6 flex flex-wrap items-center gap-3 text-2xl uppercase md:text-3xl lg:mb-8 xl:mb-10 xl:text-4xl 2xl:text-5xl">
              <img className="h-6 w-6 md:h-[50px] md:w-[50px]" src={introIcon} alt="Intro" />
              <span>
                $<span className="font-dirtyline">O</span>ne <span className="font-dirtyline">I</span>ntroduction
              </span>
            </h2>
            <div className="relative my-8 flex flex-auto items-center pb-[65%] lg:my-0 lg:pb-[80%]">
              <img className="absolute left-0 top-0 h-full w-full object-contain" src={introImg} alt="Intro" />
            </div>
          </div>
          <div className="lg:max-w-[47%]">
            <div className="mb-6 md:text-lg lg:mb-8 lg:text-xl xl:mb-10 xl:text-2xl 2xl:text-3xl">
              <p>
                Welcome to The Great Reset - $ONE, a revolution & the start of a new number trend in the crypto
                space☝️,1️⃣
              </p>
              <br />
              <p className="text-gray">
                It`s time to disrupt, innovate and reset the degens` mindset. This is more than just a token. This is a
                movement.
              </p>
            </div>
            <a
              className="mb-6 inline-block transition-transform hover:scale-90 lg:mb-8 xl:mb-10"
              href={buyNowLink}
              rel="noreferrer"
              target="_blank"
            >
              <img className="w-[130px] lg:w-[200px]" src={buyBtnImg} alt="Buy now" />
            </a>
            <ul className="mb-6 flex flex-wrap gap-2 divide-x-2 md:gap-4 lg:mb-8 xl:mb-10">
              {socials.map((item, index) => (
                <li className="[&:not(:first-child)]:pl-2 [&:not(:first-child)]:md:pl-4" key={index}>
                  <a
                    className="text-sm hover:text-red hover:transition sm:text-base md:text-lg lg:text-lg xl:text-xl"
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 rounded-xl bg-black px-3 py-2.5 lg:py-4">
              <button onClick={() => copyHandler(tokenAddress)} className="shrink-0">
                <img src={copyImg} height={24} width={24} alt="Copy" />
              </button>
              {!isNotificationVisible && (
                <span className="max-w-[240px] truncate text-sm text-gray sm:max-w-full md:text-base lg:text-lg xl:text-xl">
                  {tokenAddress}
                </span>
              )}
              {isNotificationVisible && (
                <span className="text-sm text-gray md:text-base lg:text-lg xl:text-xl">Copied to clipboard</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
