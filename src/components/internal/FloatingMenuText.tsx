import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BGiMAGE from "../../assets/PinkBg.svg";
import HexWrapper from "./HexWrapper";

const textLines = [
  ["Irani Chai", "Masala Chai", "Almond Sticks"],
  ["Lemon Tea", "Herbal Tea", "Rusk Biscuits"],
  ["Americano", "Filter Coffee", "Khari Biscuits"],
  ["Osmania Biscuits", "Salt Biscuits", "Maska Bun"]
];

// List of image URLs (15 - 1 = 14 since index 7 will have "Menu" text)
const imageUrls = [
  "https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww",
  "https://via.placeholder.com/300x300?text=3",
  "https://via.placeholder.com/300x300?text=4",
  "https://via.placeholder.com/300x300?text=5",
  "https://via.placeholder.com/300x300?text=6",
  "https://via.placeholder.com/300x300?text=7",
  "https://via.placeholder.com/300x300?text=8",
  "https://via.placeholder.com/300x300?text=9",
  "https://via.placeholder.com/300x300?text=10",
  "https://via.placeholder.com/300x300?text=11",
  "https://via.placeholder.com/300x300?text=12",
  "https://via.placeholder.com/300x300?text=13",
  "https://via.placeholder.com/300x300?text=14"
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
      className="w-screen min-h-[150vh] bg-cover bg-center relative overflow-hidden"
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

      {/* Hexagon Grid */}
      <div className="w-full z-10 pt-[400px] pb-20 flex justify-center">
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-y-6 lg:gap-x-10">
          {Array.from({ length: 15 }).map((_, i) => {
            const isMenuHex = i === 7;
            const imageUrl = !isMenuHex ? imageUrls[i < 7 ? i : i - 1] : null;

            return (
              <motion.div
                key={i}
                className="w-[113px] h-[125px] md:w-[200px] md:h-[272px]" // No more overflow-hidden here
                whileHover={{
                  scale: 1.1,
                  opacity: 0.85,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
              >
                <HexWrapper>
                  {isMenuHex ? (
                    <div className="w-full h-full flex items-center justify-center bg-[#EC86AD]">
                      <span className="text-white text-3xl font-bold font-montserrat-alt">
                        Menu
                      </span>
                    </div>
                  ) : (
                    <img
                      src={imageUrl!}
                      alt={`hexagon image ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </HexWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
