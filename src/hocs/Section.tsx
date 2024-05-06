import { FC } from "react";
import { SectionState } from "@/types";

export const Section: FC<{ WrappedComponent: FC; bS: SectionState[]; index: number }> = ({
  WrappedComponent,
  bS,
  index,
}) => {
  const { scale, marginTop } = bS[index] ?? { scale: null, marginTop: 0 };

  return (
    <div className="flex h-screen items-center">
      <div
        style={{
          transform: scale != null ? `scale(.${scale.toString().padStart(2, "0")})` : "scale(1)",
          marginTop: `${marginTop}px`,
        }}
        className={`z-${1 + index * 10} h-screen w-full`}
      >
        <WrappedComponent />
      </div>
    </div>
  );
};
