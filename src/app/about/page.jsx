import Image from "next/image";
import React from "react";
import { about } from "@/utils/about";

const About = () => {
  return (
    <div className="min-h-[90vh] w-3/4 mx-auto">
      <div className="h-[400px] relative">
        <Image
          src="/diamondBg.jpg"
          alt=""
          fill
        />
      </div>
      <div className="pt-10 pb-20 md:pb-36 btw:pt-28">
        <h2 className="text-center text-2xl ">About</h2>
        <div className="w-[90px] h-1 bg-[#c7ba70] mx-auto mb-7"></div>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default About;
