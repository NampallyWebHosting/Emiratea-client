import React from "react";
import { Card, CardContent } from "../ui/card";
import nav1 from "../../assets/nav1.svg";
import nav2 from "../../assets/nav2.svg";
import nav3 from "../../assets/nav3.svg";
import Logo from "../../assets/Logo.svg";
import mainBg from "@/assets/Desktop - 24.svg"

interface MenuItemProps {
    text: string;
    icon: string;
    bgColor: string;
}

const ArcTextCircle: React.FC<MenuItemProps> = ({ text, icon, bgColor }) => {
    const radius = 35;
    const startAngle = -60;
    const endAngle = 60;
    const angleIncrement = text.length > 1 ? (endAngle - startAngle) / (text.length - 1) : 0;

    const letters = Array.from(text.toUpperCase());

    const letterTransforms = letters.map((_, index) => {
        const angle = startAngle + angleIncrement * index;
        const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
        const y = radius * Math.sin((angle - 90) * (Math.PI / 180));
        return {
            x,
            y,
            rotate: angle,
            char: letters[index],
        };
    });

    return (
        <div
            className="group relative w-22 h-22 md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center shadow-md transition-transform duration-700 ease-in-out hover:rotate-[360deg]"
            style={{ backgroundColor: bgColor }}
        >
            {/* Arc text */}
            {letterTransforms.map((item, idx) => (
                <span
                    key={idx}
                    className="absolute text-xs font-bold text-white uppercase font-montserrat-alt"
                    style={{
                        transform: `translate(${item.x}px, ${item.y}px) rotate(${item.rotate}deg)`,
                        transformOrigin: "center",
                    }}
                >
                    {item.char}
                </span>
            ))}

            {/* Icon */}
            <img
                src={icon}
                alt={text}
                className=" w-12 h-12 md:w-16 md:h-16 absolute mt-4 cursor-pointer"
            />
        </div>
    );
};

const FullScreenImage: React.FC = () => {
    const imageUrl = mainBg;

    return (
        <Card className="w-screen h-screen p-0 border-none rounded-none shadow-none relative">
            <CardContent className="w-full h-full p-0 relative">
                {/* Fullscreen Background Image */}
                <img
                    src={imageUrl}
                    alt="Full Screen"
                    className="w-full h-full object-cover"
                />

                {/* Left menu */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    <div className="relative w-[100px] h-[100px]">
                        {/* Background Circle */}
                        <div className="absolute inset-0 bg-[#E9CFD2] rounded-full shadow-md z-0"></div>

                        {/* Central Logo */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="w-12 h-12 md:w-12 md:h-12"
                            />
                        </div>

                        {/* SVG Circular Text */}
                        <svg
                            className="absolute inset-0 w-full h-full z-20 animate-spin"
                            style={{ animationDuration: '30s' }}
                            viewBox="0 0 200 200"
                        >
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                                />
                            </defs>

                            {/* First "Emiratea" */}
                            <text fill="#000" fontSize="18" fontWeight={300}>
                                <textPath
                                    href="#circlePath"
                                    startOffset="0%"
                                    textLength="130"
                                    spacing="auto"
                                >
                                    Emiratea
                                </textPath>
                            </text>

                            {/* Second "Emiratea" */}
                            <text fill="#000" fontSize="18" fontWeight={300}>
                                <textPath
                                    href="#circlePath"
                                    startOffset="33%"
                                    textLength="130"
                                    spacing="auto"
                                >
                                    Emiratea
                                </textPath>
                            </text>

                            {/* Third "Emiratea" */}
                            <text fill="#000" fontSize="18" fontWeight={300} >
                                <textPath
                                    href="#circlePath"
                                    startOffset="66%"
                                    textLength="130"
                                    spacing="auto"
                                >
                                    Emiratea
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>

                {/* Top right circular menus */}
                <div className="absolute top-4 right-4 flex gap-4 flex-col md:flex-row">
                    <ArcTextCircle text="Home" icon={nav1} bgColor="#EC86AD" />
                    <ArcTextCircle text="Menu" icon={nav2} bgColor="#00966C" />
                    <ArcTextCircle text="Contact" icon={nav3} bgColor="#FFCADE" />
                </div>

                {/* Text at the left bottom with typography applied */}
                <div className="absolute bottom-30 md:left-14 flex  space-x-4 text-white z-10  flex-col lg:flex-row p-2" >
                    {/* Emiratea */}
                    <span className=" text-6xl md:text-8xl font-extrabold leading-none tracking-tight font-Ulm-Grotesk">
                        Emiratea
                    </span>
                    {/* Cafe */}
                    <span className=" text-6xl font-normal leading-none tracking-tight font-Ulm-Grotesk md:text-8xl">
                        Cafe
                    </span>
                </div>

                {/* Footer text with Montserrat Alternates font, italic style, and custom size */}
                <div className="absolute bottom-22 left-2 md:left-16 font-montserrat-alt text-2xl lg:text-3xl text-white z-10 italic leading-[100%]">
                    with luv - from hyd
                </div>

                {/* Linear Gradient background at the bottom */}
                <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#EC86AD] to-transparent" />
            </CardContent>
        </Card>
    );
};

export default FullScreenImage;
