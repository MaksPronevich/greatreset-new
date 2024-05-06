import { FC } from "react";
import { configuration } from "@/config";

export const Footer: FC = () => {
  const { socials } = configuration;

  return (
    <footer className="py-8">
      <div className="mx-auto max-w-[1178px] px-4">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <span>© 2023 øñE. All rights reserved.</span>
          <ul className="flex gap-6">
            {socials.map((item, index) => (
              <li key={index}>
                <a
                  className="inline-block transition-transform hover:scale-90"
                  href={item.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={item.logoUrl} alt={item.label} height={43} width={43} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
