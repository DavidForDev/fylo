import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// ========== UIElement ========== \\
import { Button, Input } from "../UIElement/element";

const GetStart = () => {
  const getStartedRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(getStartedRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: getStartedRef.current,
      },
      duration: 2,
    });
  }, []);

  return (
    <div className="bg-[#575988] w-full h-auto p-20">
      <div
        className="opacity-0 duration-1000 w-full gap-5 flex justify-between items-center flex-wrap"
        ref={getStartedRef}
      >
        <div className="flex flex-col gap-4 lg:w-96 w-full ">
          <h2 className="text-white font-semibold lg:text-3xl text-xl text-center lg:text-start">
            Get early access today
          </h2>
          <p className="text-[#FFFFFF] text-sm font-medium leading-6 text-center lg:text-start">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 lg:w-1/3 w-full">
          <Input placeholder="johnappleseed#mail.com" className="w-full" />
          <Button className="w-full lg:w-auto">Get Started for free</Button>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
