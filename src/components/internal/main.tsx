import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import nav1 from "../../assets/nav1.svg";
import nav2 from "../../assets/nav2.svg";
import nav3 from "../../assets/nav3.svg";

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
    const imageUrl =
        "https://s3-alpha-sig.figma.com/img/29e0/3d67/8f50f32f27e084a38007b463cd0554ae?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tkyk5i3GI4St3~WrdwU6~FkP8JU~wkwrNF~hHWCELu7YLMLIZg0EUgmRKssHwctN-Q9NNDG4q2u9qnVF~HzOa~0u5eqHwhAh21T738FcN2~RWOhMZL-I~bgtZfifSou-72OBa33808O7DckJD0IV9V7CysQwZsqO0bYApmWNy8m0aLCvsBDjKdi2d6~i0qqvJUWD4-Hzo2ko8fz1D5VrZOHGLOT4jsXqFbFxYb--rTU2KybK05nBkiNmZqU7-v9U1YZDSGEL~eyRbfro9VoP-I35ReFRBoz0MCnl-DbCdNU0j01CSzYtlR8Yewt~jdV5K8hZTmITrrwsdbYmKu1GdQ__";

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
                    <Button variant="secondary">Left Menu</Button>
                </div>

                {/* Top right circular menus */}
                <div className="absolute top-4 right-4 flex gap-4 flex-col md:flex-row">
                    <ArcTextCircle text="Home" icon={nav1} bgColor="#EC86AD" />
                    <ArcTextCircle text="Menu" icon={nav2} bgColor="#00966C" />
                    <ArcTextCircle text="Contact" icon={nav3} bgColor="#FFCADE" />
                </div>

                {/* Text at the left bottom with typography applied */}
                <div className="absolute bottom-30 left-14 flex items-center space-x-4 text-white z-10 text-4xl md:text-7xl">
                    {/* Emiratea */}
                    <span className="font-ulm-grotesk font-extrabold leading-none tracking-tight">
                        Emiratea
                    </span>
                    {/* Cafe */}
                    <span className="font-ulm-grotesk font-normal leading-none tracking-tight">
                        Cafe
                    </span>
                </div>

                {/* Footer text with Montserrat Alternates font, italic style, and custom size */}
                <div className="absolute bottom-22 left-14 text-white text-lg md:text-2xl font-light italic tracking-normal z-10">
                    with luv - from hyd
                </div>

                {/* Linear Gradient background at the bottom */}
                <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#EC86AD] to-transparent" />
            </CardContent>
        </Card>
    );
};

export default FullScreenImage;
