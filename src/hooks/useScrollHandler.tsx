import { SectionState } from "@/types";
import { useState, useEffect } from "react";

const initialSectionState: SectionState = {
  scale: null,
  marginTop: 0,
};

export const useScrollHandler = (): SectionState[] => {
  const [bS, setBs] = useState<SectionState[]>(Array.from({ length: 5 }, () => ({ ...initialSectionState })));

  useEffect(() => {
    const handleScroll = (): void => {
      const windowH = window.innerHeight;
      const position = document.documentElement.scrollTop;
      const newValueForSet: SectionState[] = bS.map((block, index) => {
        const newValue: SectionState = { ...block };
        const start = windowH * index;
        const end = windowH * (index + 1);

        if (position < end && position > start) {
          newValue.scale = Math.trunc(((end - position) / windowH) * 100);
          newValue.marginTop = (position - start) * 2;
        } else if (position >= end) {
          newValue.scale = 0;
        }
        return newValue;
      });

      setBs(newValueForSet);
    };

    window.addEventListener("scroll", handleScroll);

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bS]);

  return bS;
};
