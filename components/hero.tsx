import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  title?: String;
  text?: String;
  img?: String;
  children?: any;
}

const Hero = (props: Props) => {
  const { children, title, text, img } = props;

  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const bannerRef = useRef(null);
  const childrenRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(h1Ref.current, {
      duration: 1,
      opacity: 1,
      y: "0px",
      delay: 1.5,
    })
      .to(pRef.current, {
        duration: 1,
        opacity: 1,
        y: "0px",
      })
      .to(childrenRef.current, {
        duration: 1,
        opacity: 1,
      })
      .to(bannerRef.current, {
        duration: 1,
        opacity: 1,
      });
  }, []);

  return (
    <div className="w-full flex justify-between items-center flex-wrap-reverse gap-12">
      <div className="flex flex-col gap-6 w-full lg:max-w-xl">
        <div className="flex flex-col gap-6">
          <h1
            ref={h1Ref}
            className="opacity-0 translate-y-8 first-letter:uppercase leading-10 text-[#07043B] text-3xl lg:text-4xl font-semibold text-center lg:text-start"
          >
            {title}
          </h1>
          <p
            ref={pRef}
            className="opacity-0 translate-y-5 max-w-lg text-center text-[#07043B] lg:text-start"
          >
            {text}
          </p>
        </div>
        <div className="opacity-0 flex gap-4 flex-wrap" ref={childrenRef}>
          {children}
        </div>
      </div>
      {img !== "" ? (
        <img
          src={`${img}`}
          alt="banner"
          className="lg:max-w-xl opacity-0"
          ref={bannerRef}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Hero;
