import HexWrapper from "./HexWrapper";
import { motion } from "framer-motion";

// List of image URLs (15 - 1 = 14 since index 7 will have "Menu" text)
const imageUrls = [
    "https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1683533698664-12ee473e8c9d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1611312410928-bdcb480e6239?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhaXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1672076780874-82fe06198ef7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoYWl8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1669905375112-5559511b97ea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29mZmllfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1654921585907-0740dbb2750e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWklMjB0ZWF8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1654923064639-834d2bf32716?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHViYWklMjB0ZWF8ZW58MHx8MHx8fDA%3D"
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