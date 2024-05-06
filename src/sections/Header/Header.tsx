import { FC, Fragment } from "react";
import { configuration } from "@/config";
import closeImg from "@/assets/img/close.svg";
import burgerImg from "@/assets/img/burger.svg";
import { Popover, Transition } from "@headlessui/react";

export const Header: FC = () => {
  const { navigation } = configuration;

  return (
    <header>
      <Popover className="relative z-20 mx-auto max-w-[1178px] px-4">
        {({ open, close }) => (
          <div className="flex min-h-[100px] items-center justify-between gap-6">
            <img src="/logo-full.svg" height={60} width={145} alt="One" />
            <Popover.Button className="outline-none lg:hidden">
              {!open && <img src={burgerImg} alt="Burder" height={30} width={30} />}
              {open && <img src={closeImg} height={30} alt="Close" width={30} />}
            </Popover.Button>
            <nav className="hidden lg:block">
              <ul className="flex flex-wrap gap-x-8 gap-y-2">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <a className="hover:text-red hover:transition" href={item.link}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Popover.Overlay className="fixed bottom-0 left-0 right-0 top-[100px] z-10 bg-black opacity-80" />
            <Transition
              enterFrom="opacity-0 translate-y-full"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-full"
              enterTo="opacity-100 translate-y-0"
              enter="linear duration-300"
              leave="linear duration-300"
              as={Fragment}
            >
              <Popover.Panel className="absolute right-0 top-[100px] z-20 w-full bg-black px-4 py-8 lg:hidden">
                <nav>
                  <ul className="flex flex-col gap-8">
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
            </Transition>
          </div>
        )}
      </Popover>
    </header>
  );
};
