import { FC, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import MainImg from "@/assets/Desktop - 25.svg";
import { motion } from "framer-motion";

// Types
type ScrollSyncSection = {
    id: string;
    title: string;
    description?: string;
    image: string; // Right side image
    contentImage: string; // Left side image
};

type ScrollSyncProps = {
    sections: ScrollSyncSection[];
    className?: string;
};

const ScrollSyncComponent: FC<ScrollSyncProps> = ({ sections, className }) => {
    const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);
    const setRef = (index: number) => (el: HTMLDivElement | null) => {
        triggerRefs.current[index] = el;
    };

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (window.innerWidth < 1024) return; // Skip scroll tracking on mobile

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute("data-index"));
                        setActiveIndex(index);
                    }
                });
            },
            { threshold: 0.5 }
        );

        triggerRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            triggerRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [sections.length]);

    // Handle no data
    if (!sections || sections.length === 0) {
        return (
            <div className={clsx("w-full h-screen flex items-center justify-center", className)}>
                <p className="text-gray-500 text-lg">No sections to display.</p>
            </div>
        );
    }

    return (
        <div className={clsx("relative w-full min-h-screen", className)}>
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${MainImg})`, backgroundAttachment: 'fixed', zIndex: -1 }}
            ></div>

            <div className="text-center pt-14 font-bold text-4xl lg:text-6xl leading-none tracking-normal text-white z-10 font-Ulm-Grotesk">
                Emiratea
            </div>
            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center px-6 pt-10">
                {sections.map((section, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={section.id} className="mb-12 w-full overflow-hidden">
                            {section.image && (
                                <motion.img
                                    src={section.image}
                                    alt="Content"
                                    className=" w-96 h-80 rounded-2xl  "
                                    initial={{ x: isEven ? -100 : 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ type: "tween", duration: 0.6 }}
                                />
                            )}
                            <div className=" mt-4">
                                <h2 className="text-2xl font-extrabold mb-3 text-white">{section.title}</h2>
                                {section.description && (
                                    <p className="text-white text-base font-normal mb-4">{section.description}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex">
                {/* Left Content (scrolls naturally) */}
                <div className="w-1/2 pl-20 lg:pl-60 pr-6 z-20">
                    {sections.map((section, index) => (
                        <div
                            key={section.id}
                            data-index={index}
                            ref={setRef(index)}
                            className="min-h-screen flex flex-col justify-center py-16"
                        >
                            <h2 className="text-4xl font-extrabold mb-4 text-white font-Ulm-Grotesk">{section.title}</h2>
                            {section.description && (
                                <p className="text-white text-lg font-normal mb-6 font-Ulm-Grotesk">{section.description}</p>
                            )}
                            <div className="mt-20">
                                {section.contentImage && (
                                    <img
                                        src={section.contentImage}
                                        alt="Content"
                                        className="w-64"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Right Sticky Image */}
                <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center pr-24 pointer-events-none z-10">
                    <img
                        src={sections[activeIndex].image}
                        alt={sections[activeIndex].title}
                        className="object-cover w-[428px] h-[601px] rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default ScrollSyncComponent;
