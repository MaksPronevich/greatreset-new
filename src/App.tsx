import { FC } from "react";
import { Home, Intro, About, Goals, Footer, Mission, Roadmap, Tokenomics } from "@/sections";

export const App: FC = () => {
  return (
    <div className="mx-2">
      <div className="relative h-[100lvh] overflow-y-auto bg-black pb-[10px]">
        <Home />
        <Intro />
        <About />
        <Mission />
        <Tokenomics />
        <Roadmap />
        <div className="section flex h-full flex-col justify-center bg-black">
          <Goals />
          <Footer />
        </div>
      </div>
    </div>
  );
};
