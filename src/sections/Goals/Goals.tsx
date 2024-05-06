import { FC } from "react";
import { configuration } from "@/config";

export const Goals: FC = () => {
  const { holdersCount, telegramMembersCount } = configuration;

  return (
    <section className="py-12">
      <div className="px-[5%]">
        <h2 className="mb-6 text-center text-2xl uppercase md:text-4xl">
          <span className="font-dirtyline">O</span>ur go<span className="font-dirtyline">a</span>ls
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex justify-between gap-4 rounded-3xl bg-black-secondary px-6 py-8 lg:justify-around lg:py-12">
            <span className="text-base lg:text-2xl">Holders</span>
            <span className="text-3xl text-red lg:text-5xl 2xl:text-8xl">{holdersCount}</span>
          </div>
          <div className="flex justify-between gap-4 rounded-3xl bg-black-secondary px-6 py-8 lg:justify-around lg:py-12">
            <span className="text-base lg:text-2xl"> Telegram members</span>
            <span className="text-3xl text-red lg:text-5xl 2xl:text-8xl">{telegramMembersCount}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
