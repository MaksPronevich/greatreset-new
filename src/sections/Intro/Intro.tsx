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
    <section
      id="intro"
      className="section mx-auto mb-28 h-[calc(100lvh-150px)] max-w-[1380px] rounded-3xl bg-black-secondary bg-[url('./assets/img/intro-bg.png')] bg-cover bg-[center_bottom] bg-no-repeat py-12 sm:h-[calc(100lvh-40px)]"
    >
      <div className="mx-auto max-w-[1178px] px-4">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-start">
          <div className="w-full max-w-[585px]">
            <h2 className="mb-6 flex items-center gap-3 text-2xl uppercase md:text-4xl">
              <img className="h-6 w-6 md:h-[50px] md:w-[50px]" src={introIcon} alt="Intro" />
              <span>
                $<span className="font-dirtyline">O</span>ne <span className="font-dirtyline">I</span>ntroduction
              </span>
            </h2>
            <div className="relative pb-[50%] lg:pb-[70%]">
              <img className="absolute left-0 top-0 h-full w-full object-contain" src={introImg} alt="Intro" />
            </div>
          </div>
          <div className="h-[310px] max-w-[445px] overflow-y-auto pr-2 sm:h-auto sm:pr-0">
            <div className="mb-6">
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
              className="mb-6 inline-block transition-transform hover:scale-90"
              href={buyNowLink}
              rel="noreferrer"
              target="_blank"
            >
              <img src={buyBtnImg} alt="Buy now" width={123} height={40} />
            </a>
            <ul className="mb-6 flex flex-wrap gap-2 divide-x-2 md:gap-4">
              {socials.map((item, index) => (
                <li className="[&:not(:first-child)]:pl-2 [&:not(:first-child)]:md:pl-4" key={index}>
                  <a
                    className="text-sm hover:text-red hover:transition sm:text-base"
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 rounded-xl bg-black px-3 py-2.5">
              <button onClick={() => copyHandler(tokenAddress)} className="shrink-0">
                <img src={copyImg} height={24} width={24} alt="Copy" />
              </button>
              {!isNotificationVisible && (
                <span className="max-w-[240px] truncate text-sm text-gray sm:max-w-full">{tokenAddress}</span>
              )}
              {isNotificationVisible && <span className="text-sm text-gray">Copied to clipboard</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
