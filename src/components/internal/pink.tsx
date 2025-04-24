import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BGiMAGE from "../../assets/PinkBg.svg";

const textLines = [
  ["Irani Chai", "Masala Chai", "Almond Sticks"],
  ["Lemon Tea", "Herbal Tea", "Rusk Biscuits"],
  ["Americano", "Filter Coffee", "Khari Biscuits"],
  ["Osmania Biscuits", "Salt Biscuits", "Maska Bun"]
];

// List of image URLs (15 - 1 = 14 since index 7 will have "Menu" text)
const imageUrls = [
  "https://via.placeholder.com/300x300?text=1",
  "https://via.placeholder.com/300x300?text=2",
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

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            className="flex gap-6 text-white text-xl md:text-6xl font-extrabold font-montserrat-alt"
            style={{
              transform: `translateX(${
                idx % 2 === 0 ? scrollY * 0.1 : -scrollY * 0.1
              }px)`,
              transition: "transform 0.2s ease-out"
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
      <div className="absolute bottom-0 w-full z-10 pt-40 pb-20 flex justify-center">
        <div className="grid grid-cols-5 gap-y-10">
          {Array.from({ length: 15 }).map((_, i) => {
            const isMenuHex = i === 7;
            const imageUrl = !isMenuHex ? imageUrls[i < 7 ? i : i - 1] : null;

            return (
              <motion.div
                key={i}
                className="w-[13.5rem] h-[13.5rem] bg-[#EC86AD] hexagon flex items-center justify-center overflow-hidden"
                style={{
                  clipPath:
                    "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)"
                }}
                whileHover={{
                  scale: 1.1,
                  opacity: 0.85,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
              >
                {isMenuHex ? (
                  <span className="text-white text-3xl font-bold font-montserrat-alt">
                    Menu
                  </span>
                ) : (
                  <img
                    src={imageUrl!}
                    alt={`hexagon image ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
