import HexWrapper from "./HexWrapper";
import { motion } from "framer-motion";

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

const HexagonShapes = () => {
    return (
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
    )
}

export default HexagonShapes;