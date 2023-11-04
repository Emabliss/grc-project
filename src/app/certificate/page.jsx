"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

const Certificate = () => {
  const { codeNumber } = useAuth();

  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.removeItem("codeNumber");
      // if (typeof window !== "undefined") {
      //   window.location.reload();
      // }
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!codeNumber) {
    router.push("/");
    return;
  }

  return (
    <div className="min-h-[90vh]">
      <div className="h-[400px] relative">
        <Image
          src="/diamondBg.jpg"
          alt=""
          fill
        />
      </div>
      <div className="w-[70%] mx-auto pt-10 pb-20 md:pb-36 btw:pt-28">
        <h3 className="text-center mb-10">
          Your current location: <strong>{codeNumber}</strong>. The results of
          the query
        </h3>
        <h2 className="text-center text-2xl ">Certificate</h2>
        <div className="w-[90px] h-1 bg-[#c7ba70] mx-auto"></div>
        <div className="w-48 h-48 overflow-hidden mx-auto relative">
          <Image
            src="/necklace.jpeg"
            alt=""
            fill
          />
        </div>
        <h2 className="bg-[#c7ba70] p-2 text-slate-600 font-semibold">
          GRADING REPORT
        </h2>
        <div className="flex flex-col space-y-3 pt-1 pl-1">
          <div className="flex justify-between w-[90%]">
            <span className=" flex-1 font-semibold">Weight</span>
            <span className=" flex-1">0.9g</span>
          </div>
          <div className="flex justify-between w-[90%]">
            <span className="flex-1 font-semibold">Item</span>
            <span className="flex-1">Faceted Diamond</span>
          </div>
          <div className="flex justify-between w-[90%]">
            <span className="flex-1 font-semibold">Shape</span>
            <span className="flex-1">Round</span>
          </div>
          <div className="flex justify-between w-[90%]">
            <span className="flex-1 font-semibold">Cut</span>
            <span className="flex-1">Brilliant</span>
          </div>
          <div className="flex justify-between w-[90%]">
            <span className="flex-1 font-semibold">Color</span>
            <span className="flex-1">Silver</span>
          </div>
          <div className="flex justify-between w-[90%]">
            <span className="flex-1 font-semibold">Type</span>
            <span className="flex-1">Custom</span>
          </div>
          <div className="flex justify-between w-[90%]">
            <span className="flex-1 font-semibold">Dimensions</span>
            <span className="flex-1">****</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
