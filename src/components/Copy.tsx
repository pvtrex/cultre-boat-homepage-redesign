import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyProps {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
}

const Copy: React.FC<CopyProps> = ({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#000",
  stagger = 0.15,
  duration = 0.75,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splitRefs = useRef<SplitText[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRefs.current = [];

      let elements: HTMLElement[] = [];

      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children) as HTMLElement[];
      } else {
        elements = [containerRef.current];
      }

      // ✅ NEW ANIMATION (replacing old block reveal logic)
      elements.forEach((element) => {
        const split = SplitText.create(element, {
          type: "words,lines",
          mask: "lines",
          linesClass: "line",
          autoSplit: true,
          onSplit: (instance) => {
            return gsap.from(instance.lines, {
              yPercent: 120,
              stagger: stagger,
              scrollTrigger: {
                trigger: containerRef.current,
                scrub: true,
                start: "clamp(top bottom)",
                end: "clamp(bottom center)",
              },
            });
          },
        });

        splitRefs.current.push(split);
      });

      return () => {
        splitRefs.current.forEach((split) => split.revert());
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { dependencies: [animateOnScroll, delay, blockColor, stagger, duration] }
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children as React.ReactElement, {
      ref: containerRef,
    });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
};

export default Copy;
