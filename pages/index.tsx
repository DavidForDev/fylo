import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// =========== Layouts ========== \\
import PageHeader from "../layout/header.layout";
import Section from "../layout/section.layout";

// =========== Components ========== \\
import Navigation from "../components/navigation";
import EmployeeCard from "../components/employeeCard";
import GetStart from "../components/getStart";
import Footer from "../components/footer";
import Hero from "../components/hero";

// =========== UIElement ========== \\
import { Button, Input, ReadButton } from "../UIElement/element";

export default function Home() {
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const btnRef = useRef(null);
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(h2Ref.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: h2Ref.current,
        start: "top 50%",
      },
    })
      .to(pRef.current, {
        duration: 1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 50%",
        },
      })
      .to(btnRef.current, {
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 50%",
        },
      })
      .to(cardRef.current, {
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 50%",
        },
        delay: 2,
      })
      .to(imgRef.current, {
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 50%",
        },
        delay: 2,
      });
  }, []);

  return (
    <>
      <PageHeader title="pro" description="" icon="/favicon-32x32.png" />
      <header>
        <Navigation />
      </header>
      <main className="flex flex-col gap-12">
        <Section>
          <Hero
            title="all your files in one secure location, accessible anywhere."
            text="Fylo stores your most important files in one secure location. Access
                  them wherever you need, share and collaborate with friends, family,
                  and co-workers."
            img="/images/illustration_1-01.png"
          >
            <Input
              className="w-full lg:w-2/4"
              placeholder="Enter your email…"
            />
            <Button className="w-full lg:w-2/5">Get Started</Button>
          </Hero>
        </Section>
        <Section backCover="/icons/bg-curve-desktop.svg">
          <div className="flex gap-8 flex-wrap-reverse justify-between items-center py-14">
            <div className="flex flex-col items-start gap-12 lg:max-w-xl">
              <div className="flex flex-col gap-4 lg:items-start justify-center items-center">
                <h2
                  ref={h2Ref}
                  className="opacity-0 duration-1000 translate-y-5 first-letter:uppercase leading-10 text-[#07043B] text-lg lg:text-3xl font-semibold text-center lg:text-start"
                >
                  Stay productive, wherever you are
                </h2>
                <div
                  className="opacity-0 translate-y-5 duration-1000 flex flex-col gap-4"
                  ref={pRef}
                >
                  <p className="text-[#615F7E] text-sm text-center lg:text-start">
                    Never let location be an issue when accessing your files.
                    Fylo has you covered for all of your file storage needs.
                  </p>
                  <p className="text-[#615F7E] text-sm text-center lg:text-start">
                    Securely share files and folders with friends, family and
                    colleagues for live collaboration. No email attachments
                    required!
                  </p>
                </div>
                <ReadButton
                  ref={btnRef}
                  className="opacity-0 translate-y-5 duration-1000"
                >
                  See how Fylo works{" "}
                  <img src="/icons/icon-arrow.svg" alt="arrow" />
                </ReadButton>
              </div>
              <div ref={cardRef} className="block opacity-0 duration-1000">
                <EmployeeCard />
              </div>
            </div>
            <img
              src="/images/illustration_2-01.png"
              className="max-w-lg opacity-0 duration-1000"
              alt="banner2"
              ref={imgRef}
            />
          </div>
        </Section>
      </main>
      <footer>
        <GetStart />
        <Footer />
      </footer>
    </>
  );
}
