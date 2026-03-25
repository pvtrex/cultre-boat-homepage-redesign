import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Copy from "./Copy";

gsap.registerPlugin(ScrollTrigger);

const TextImageReveal: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  /* ---------------- Lenis Smooth Scroll ---------------- */
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  /* ---------------- Image Reveal ScrollTrigger ---------------- */
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".line");

      lines.forEach((line) => {
        const imgSpan = line.querySelector<HTMLElement>(".img-span");
        if (!imgSpan) return;

        const isMobile = window.innerWidth < 768;
        const targetWidth = isMobile ? 120 : 300;

        gsap.to(imgSpan, {
          width: targetWidth,
          ease: "none",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-x-hidden relative text-primary-foreground !py-0"
    >
      {/* Dark cinematic background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      {/* Subtle overlay to ensure text contrast */}
      <div className="absolute inset-0 bg-foreground/30 z-[1]" />
      {/* ================= INTRO ================= */}
      <div className="w-screen flex items-center justify-center px-5 md:px-10 
                      h-auto py-10 md:h-screen md:py-0 relative z-[2]">
        <Copy blockColor="#fe0100">
          <h1 className="text-4xl sm:text-[3.5rem] md:text-[6rem] font-bold tracking-[-0.05rem] md:tracking-[-0.1rem] text-primary-foreground text-center leading-tight md:leading-none">
            Framed in tungsten and shadows, every shot holds its own deliberate
            tension.
          </h1>
        </Copy>
      </div>

      {/* ================= MAIN IMAGE REVEAL ================= */}
      <div className="w-screen flex flex-col items-center justify-center 
                      gap-1 md:gap-8 
                      py-4 md:py-0 
                      px-4 md:px-0
                      min-h-[40vh] md:min-h-screen relative z-[2]">

        {/* Line 1 */}
        <div className="line flex flex-wrap items-center justify-center gap-1 md:gap-[20px]">
          <span className="text-[2.5rem] sm:text-[4rem] md:text-[7.5rem] font-bold tracking-[-1px] md:tracking-[-4px]">
            We craft
          </span>

          <span className="img-span h-[40px] md:h-[110px] w-0 overflow-hidden rounded-[5px] relative">
            <img
              src="https://i.pinimg.com/1200x/93/27/65/932765c7cd00055218ba7398119d7d4d.jpg"
              alt=""
              className="h-full w-[120px] md:w-[300px] absolute left-1/2 -translate-x-1/2 object-cover rounded-[5px]"
            />
          </span>

          <span className="text-[2.5rem] sm:text-[4rem] md:text-[7.5rem] font-bold tracking-[-1px] md:tracking-[-4px]">
            digital
          </span>
        </div>

        {/* Line 2 */}
        <div className="line flex flex-wrap items-center justify-center gap-1 md:gap-[20px]">
          <span className="text-[2.5rem] sm:text-[4rem] md:text-[7.5rem] font-bold">
            experiences
          </span>

          <span className="img-span h-[40px] md:h-[110px] w-0 overflow-hidden rounded-[5px] relative">
            <img
              src="https://i.pinimg.com/736x/a9/f1/19/a9f11909a9644d7bfd5102fabcd8310c.jpg"
              alt=""
              className="h-full w-[120px] md:w-[300px] absolute left-1/2 -translate-x-1/2 object-cover rounded-[5px]"
            />
          </span>

          <span className="text-[2.5rem] sm:text-[4rem] md:text-[7.5rem] font-bold">
            that
          </span>
        </div>

        {/* Line 3 */}
        <div className="line flex flex-wrap items-center justify-center gap-1 md:gap-[20px]">
          <span className="text-[2.5rem] sm:text-[4rem] md:text-[7.5rem] font-bold">
            inspire
          </span>

          <span className="img-span h-[40px] md:h-[110px] w-0 overflow-hidden rounded-[5px] relative">
            <img
              src="https://i.pinimg.com/1200x/48/09/77/480977567d6b4503c8f642728f266b72.jpg"
              alt=""
              className="h-full w-[120px] md:w-[300px] absolute left-1/2 -translate-x-1/2 object-cover rounded-[5px]"
            />
          </span>
        </div>

        {/* Line 4 */}
        <div className="line flex flex-wrap items-center justify-center gap-1 md:gap-[20px]">
          <span className="text-[2.5rem] sm:text-[4rem] md:text-[7.5rem] font-bold">
            and move
          </span>
        </div>

        {/* Line 5 */}
        <div className="line flex flex-wrap items-center justify-center gap-1 md:gap-[20px]">
          <span className="text-[2.5rem] sm:text-[4rem] md:text-[7.5rem] font-bold">
            people
          </span>

          <span className="img-span h-[40px] md:h-[110px] w-0 overflow-hidden rounded-[5px] relative">
            <img
              src="https://i.pinimg.com/1200x/9e/f2/b7/9ef2b73b1e2ff489f99bc0a90196fbea.jpg"
              alt=""
              className="h-full w-[120px] md:w-[300px] absolute left-1/2 -translate-x-1/2 object-cover rounded-[5px]"
            />
          </span>

          <span className="text-[2.5rem] sm:text-[4rem] md:text-[7.5rem] font-bold">
            forward.
          </span>
        </div>
      </div>

      {/* ================= OUTRO ================= */}
      <div className="w-screen flex items-center justify-center px-5 md:px-10 
                      h-auto py-10 md:h-screen md:py-0">
        <Copy blockColor="#fe0100">
          <h1 className="text-4xl sm:text-[3.5rem] md:text-[6rem] font-bold tracking-[-0.05rem] md:tracking-[-0.1rem] text-[#2B2E35] text-center leading-tight md:leading-none">
            Cinematography thrives in the details from the grain to the falloff to
            the glow.
          </h1>
        </Copy>
      </div>
    </section>
  );
};

export default TextImageReveal;
