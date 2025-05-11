import React from "react";
import BGiMAGE from "@/assets/Desktop - 27.svg";
import Lottie from "lottie-react";
import pinkBannerAnimation from "../../assets/Pink banner animation fixed.json";
import { LayoutGrid } from "@/components/ui/layout-grid";

// --- LAYOUT GRID CONTENT COMPONENTS ---
const SkeletonOne = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">
      House in the woods
    </p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A serene and tranquil retreat, this house in the woods offers a peaceful
      escape from the hustle and bustle of city life.
    </p>
  </div>
);

const SkeletonTwo = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">
      House above the clouds
    </p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Perched high above the world, this house offers breathtaking views and a
      unique living experience. It&apos;s a place where the sky meets home,
      and tranquility is a way of life.
    </p>
  </div>
);

const SkeletonThree = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">
      Greens all over
    </p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
      perfect place to relax, unwind, and enjoy life.
    </p>
  </div>
);

const SkeletonFour = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">
      Rivers are serene
    </p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A house by the river is a place of peace and tranquility. It&apos;s the
      perfect place to relax, unwind, and enjoy life.
    </p>
  </div>
);

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// --- MAIN COMPONENT ---
const GreenScreen: React.FC = () => {
  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        backgroundImage: `url(${BGiMAGE})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      {/* Lottie animation */}
      <div className="absolute top-0 left-0 w-full min-h-screen z-10 overflow-hidden">
        <Lottie
          animationData={pinkBannerAnimation}
          loop={true}
          className="absolute -top-40 left-0 right-0"
        />
      </div>
      {/* Grid below animation */}
      <div className="relative z-20 lg:mt-10 overflow-hidden py-10">
        <div className="h-screen lg:py-18 w-full">
          <p className=" text-3xl  md:text-5xl lg:text-6xl font-extrabold text-white text-center lg:mb-10 font-Ulm-Grotesk">The Place</p>
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </div>
  );
};

export default GreenScreen;
