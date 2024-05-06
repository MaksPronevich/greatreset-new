import { FC } from "react";
import { Section } from "@/hocs";
import { useScrollHandler } from "@/hooks";
import { Home, Intro, About, Goals, Footer, Mission, Roadmap, Tokenomics } from "@/sections";

export const App: FC = () => {
  const bS = useScrollHandler();

  const renderSections = (): JSX.Element[] => {
    const sections = [Home, Intro, About, Mission, Tokenomics];
    return sections.map((SectionComponent, index) => {
      return <Section WrappedComponent={SectionComponent} index={index} key={index} bS={bS} />;
    });
  };

  return (
    <div>
      {renderSections()}
      <div className="flex items-center">
        <div className="z-[60] w-full">
          <Roadmap />
          <Goals />
          <Footer />
        </div>
      </div>
    </div>
  );
};
