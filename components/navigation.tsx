import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Navigation = () => {
  const menuBase = [
    { name: "features" },
    { name: "team" },
    { name: "sign in" },
  ];

  const logoRef = useRef(null);
  const liRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(logoRef.current, { opacity: 1, duration: 1 }).to(liRef.current, {
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <div className="bg-white w-full py-5 fixed top-0 left-0 right-0 z-10">
      <nav className="w-full flex justify-between items-center gap-12 container px-5 py-3 m-auto">
        <div className="cursor-pointer">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="opacity-0"
            ref={logoRef}
          />
        </div>
        <ul
          className="opacity-0 flex items-center lg:items-end gap-6"
          ref={liRef}
        >
          {menuBase.map((el, index) => {
            return (
              <li
                key={index}
                className="first-letter:uppercase cursor-pointer text-[#07043B] font-medium text-xs lg:text-sm whitespace-nowrap"
              >
                {el.name}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
