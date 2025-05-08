import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BGiMAGE from "../../assets/PinkBg.svg";
import HexagonShapes from "./hexagon";

gsap.registerPlugin(ScrollTrigger);

const textLines = [
  ["Irani Chai", "Masala Chai", "Almond Sticks"],
  ["Lemon Tea", "Herbal Tea", "Rusk Biscuits"],
  ["Americano", "Filter Coffee", "Khari Biscuits"],
  ["Osmania Biscuits", "Salt Biscuits", "Maska Bun"]
];

const specialWords = [
  "Masala Chai",
  "Lemon Tea",
  "Rusk Biscuits",
  "Filter Coffee",
  "Osmania Biscuits",
  "Maska Bun"
];

const MenuScreen: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize GSAP context for ScrollTrigger
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Start when the top of the element reaches the bottom of the viewport
          end: "bottom top",
          markers: false, // Disable markers in production
          onUpdate: (self) => {
            const progress = self.progress; // Get the scroll progress

            // Smoothly apply transformations based on scroll progress
            lineRefs.current.forEach((line, idx) => {
              if (!line) return;
              const x = idx % 2 === 0 ? `-${progress * 40}vw` : `${progress * 40}vw`;
              gsap.to(line, {
                x,
                ease: "power1.out", // A smoother ease for better flow
              });
            });
          },
        },
      });

      // Apply `will-change` for optimization
      lineRefs.current.forEach((line, _idx) => {
        if (line) {
          line.style.willChange = "transform"; // Ensure smoother transforms
        }
      });

      // Revert animation context when component unmounts
      return () => ctx.revert();
    }, containerRef);
  }, []);

  return (
    <div
      className="w-full bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${BGiMAGE})` }}
    >
      <div
        ref={containerRef}
        className="absolute top-4 w-full flex flex-col items-center gap-4 z-20"
      >
        {textLines.map((line, idx) => (
          <div key={idx} className="w-full flex justify-center">
            <div
              ref={(el) => {
                lineRefs.current[idx] = el;
              }}
              className="flex flex-nowrap gap-2 sm:gap-4 md:gap-6 text-white text-xl md:text-3xl lg:text-8xl lg:font-extrabold font-montserrat-alt text-center whitespace-nowrap" // Add whitespace-nowrap here
              style={{
                transform: `translateX(${idx % 2 === 0 ? "40%" : "-40%"})`
              }}
            >
              {line.map((text, i) => {
                const isSpecialWord = specialWords.includes(text);
                return (
                  <span
                    key={i}
                    className="relative"
                    style={{
                      WebkitTextStroke: isSpecialWord ? "2px #00966C" : "2px white",
                      color: "transparent"
                    }}
                  >
                    {text}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <HexagonShapes />
    </div>
  );
};

export default MenuScreen;
