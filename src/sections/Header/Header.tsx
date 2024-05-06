import { FC, Fragment } from "react";
import { configuration } from "@/config";
import { createPortal } from "react-dom";
import closeImg from "@/assets/img/close.svg";
import burgerImg from "@/assets/img/burger.svg";
import { Popover, Transition } from "@headlessui/react";

export const Header: FC = () => {
  const { navigation } = configuration;

  return (
    <header>
      <Popover className="relative z-20 mx-auto">
        {({ open, close }) => (
          <div className="flex min-h-[100px] items-center justify-between gap-6">
            <img src="/logo-full.svg" height={60} width={145} alt="One" />
            <Popover.Button className="outline-none lg:hidden">
              {!open && <img src={burgerImg} alt="Burder" height={30} width={30} />}
              {open && <img src={closeImg} height={30} alt="Close" width={30} />}
            </Popover.Button>
            <nav className="hidden lg:block">
              <ul className="flex flex-wrap gap-x-8 gap-y-2 xl:gap-x-16">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <a
                      className="font-normal hover:text-red hover:transition lg:text-xl xl:text-2xl 2xl:text-3xl"
                      href={item.link}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {createPortal(
              <Transition
                enterFrom="opacity-0 translate-y-full"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-full"
                enterTo="opacity-100 translate-y-0"
                enter="linear duration-300"
                leave="linear duration-300"
                as={Fragment}
              >
                <Popover.Panel className="fixed right-0 top-[100px] z-[99999] h-[calc(100%-100px)] w-full bg-black px-4 py-8 [touch-action:none] lg:hidden">
                  <nav>
                    <ul className="flex flex-col items-center gap-8 pt-10">
                      {navigation.map((item, index) => (
                        <li key={index}>
                          <a onClick={() => close()} className="text-xl" href={item.link}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </Popover.Panel>
              </Transition>,
              document.body,
            )}
            {open && <div className="fixed inset-0 z-50 bg-black opacity-0 [touch-action:none]" />}
          </div>
        )}
      </Popover>
    </header>
  );
};
