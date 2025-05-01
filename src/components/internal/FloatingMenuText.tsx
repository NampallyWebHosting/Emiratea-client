import React, { useEffect, useState } from "react";
import BGiMAGE from "../../assets/PinkBg.svg";
import HexagonShapes from "./hexagon";
const textLines = [
  ["Irani Chai", "Masala Chai", "Almond Sticks"],
  ["Lemon Tea", "Herbal Tea", "Rusk Biscuits"],
  ["Americano", "Filter Coffee", "Khari Biscuits"],
  ["Osmania Biscuits", "Salt Biscuits", "Maska Bun"]
];
const MenuScreen: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollFactor, setScrollFactor] = useState(0.1);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const updateScrollFactor = () => {
      if (window.innerWidth < 640) {
        setScrollFactor(0.05); // small screens
      } else if (window.innerWidth < 1024) {
        setScrollFactor(0.08); // medium screens
      } else {
        setScrollFactor(0.1); // large screens
      }
    };

    updateScrollFactor();
    window.addEventListener("resize", updateScrollFactor);
    return () => window.removeEventListener("resize", updateScrollFactor);
  }, []);

  return (
    <div
      className="w-full bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${BGiMAGE})` }}
    >
      {/* Floating Scroll Text */}
      <div className="absolute top-4 w-full flex flex-col items-center gap-8 z-20">
        {textLines.map((line, idx) => (
          <div
            key={idx}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 text-white text-xl md:text-3xl lg:text-5xl lg:font-extrabold font-montserrat-alt text-center"
            style={{
              transform: `translateX(${idx % 2 === 0 ? scrollY * scrollFactor : -scrollY * scrollFactor}px)`,

              transition: "transform 0.2s ease-out",
            }}
          >

            {line.map((text, i) => {
              const specialWords = [
                "Masala Chai",
                "Lemon Tea",
                "Rusk Biscuits",
                "Filter Coffee",
                "Osmania Biscuits",
                "Maska Bun"
              ];
              const isSpecialWord = specialWords.includes(text);
              return (
                <span
                  key={i}
                  className="relative"
                  style={{
                    WebkitTextStroke: isSpecialWord
                      ? "2px #00966C"
                      : "2px white",
                    color: "transparent"
                  }}
                >
                  {text}
                </span>
              );
            })}
          </div>
        ))}
      </div>
      <HexagonShapes />
    </div>
  );
};

export default MenuScreen;