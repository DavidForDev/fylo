import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(footerRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 70%",
      },
      duration: 2,
    });
  }, []);

  return (
    <div className="bg-[#07043B] w-full p-12 lg:p-20">
      <div
        className="w-full opacity-0 duration-1000 flex flex-col gap-8"
        ref={footerRef}
      >
        <img src="/icons/white-logo.svg" alt="logo" width={100} />
        <div className="flex lg:justify-between items-start flex-wrap gap-14">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/icons/icon-phone.svg" alt="phone" />
              <p className="text-white text-sm">Phone: +1-543-123-4567</p>
            </div>
            <div className="flex items-center gap-3">
              <img src="/icons/icon-email.svg" alt="phone" />
              <p className="text-white text-sm">example@fylo.com</p>
            </div>
          </div>
          <div className="flex items-start justify-between gap-12 w-2/6 flex-wrap">
            <ul className="flex flex-col gap-4">
              <li className="first-letter:uppercase text-white hover:text-[#6C9BFF] cursor-pointer">
                about us
              </li>
              <li className="first-letter:uppercase text-white hover:text-[#6C9BFF] cursor-pointer">
                jobs
              </li>
              <li className="first-letter:uppercase text-white hover:text-[#6C9BFF] cursor-pointer">
                press
              </li>
              <li className="first-letter:uppercase text-white hover:text-[#6C9BFF] cursor-pointer">
                blog
              </li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="first-letter:uppercase text-white hover:text-[#6C9BFF] cursor-pointer">
                contact us
              </li>
              <li className="first-letter:uppercase text-white hover:text-[#6C9BFF] cursor-pointer">
                terms
              </li>
              <li className="first-letter:uppercase text-white hover:text-[#6C9BFF] cursor-pointer">
                privacy
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3 justify-center lg:justify-start w-full lg:w-auto">
            <div className="border border-solid border-white rounded-full p-2 cursor-pointer">
              <img src="/icons/icon-fb.svg" alt="social" />
            </div>
            <div className="border border-solid border-white rounded-full p-2 cursor-pointer">
              <img src="/icons/icon-twit.svg" alt="social" />
            </div>
            <div className="border border-solid border-white rounded-full p-2 cursor-pointer">
              <img src="/icons/icon-inst.svg" alt="social" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
