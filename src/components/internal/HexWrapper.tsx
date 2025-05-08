import React from "react";

const HexWrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="relative w-[279.78px] h-[383px] overflow-hidden -ml-10">
            <svg
                viewBox="0 0 200 334"
                preserveAspectRatio="xMidYMid meet"
                className="absolute top-0 left-0 w-full h-full"
            >
                <defs>
                    <clipPath id="hexClip">
                        <path d="M189.724 44.2707C178.626 30.0599 127.193 12.5064 114.116 7.61827C100.384 2.49023 99.6047 0.47082 99.6047 0.47082L99.3253 0V0.47082C99.3253 0.47082 98.5384 2.49023 84.8215 7.61827C71.7447 12.5064 20.3044 30.0599 9.20725 44.2707C-1.3026 57.7517 0.0574968 62.8319 0.0574968 113.262V189.406V271.849C0.0574968 271.849 -1.3026 276.929 9.20725 290.41C20.3044 304.621 71.7447 322.174 84.8215 327.062C98.5384 332.19 99.3253 334.21 99.3253 334.21V333.739L99.6047 334.21C99.6047 334.21 100.384 332.19 114.116 327.062C127.193 322.174 178.626 304.621 189.724 290.41C200.242 276.929 198.874 271.849 198.874 221.418V145.274V82.9136C198.874 62.8319 200.242 57.7517 189.724 44.2707Z" />
                    </clipPath>
                </defs>

                <rect width="100%" height="100%" fill="#EC86AD" clipPath="url(#hexClip)" />

                {children && (
                    <foreignObject
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        clipPath="url(#hexClip)"
                    >
                        <div className="w-full h-full">
                            {children}
                        </div>
                    </foreignObject>
                )}
            </svg>
        </div>
    );
};

export default HexWrapper;
