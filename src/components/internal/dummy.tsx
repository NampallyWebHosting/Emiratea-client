import React from "react";
import MainImg from "../../assets/Desktop - 15.svg";
import { Card, CardContent } from "../ui/card";

const FullScreenSvgImage: React.FC = () => {
  return (
    <Card className="w-screen h-screen p-0 border-none rounded-none shadow-none">
      <CardContent className="w-full h-full p-0">
        <img
          src={MainImg}
          alt="Full Screen SVG"
          className="w-full h-full object-cover"
        />
      </CardContent>
    </Card>
  );
};

export default FullScreenSvgImage;
