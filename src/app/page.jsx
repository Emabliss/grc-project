"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const passcode = "123443";
const Check = () => {
  const { codeNumber, setCodeNumber } = useAuth();

  const router = useRouter();

  const handleClick = () => {
    console.log("clicked");
    if (codeNumber !== passcode) {
      alert("Wrong Passcode");
      return;
    }
    localStorage.setItem("codeNumber", codeNumber);
    router.push("/certificate");
  };

  // if (codeNumber === passcode) {
  //   router.push("/certificate");
  //   return;
  // }
  return (
    <div className="min-h-[90vh]">
      <div className="h-[400px] relative">
        <Image
          src="/diamondBg.jpg"
          alt=""
          fill
        />
      </div>
      <div className="pt-10 pb-20 md:pb-36 btw:pt-28">
        <h2 className="text-center text-2xl ">Certificate</h2>
        <div className="w-[90px] h-1 bg-[#c7ba70] mx-auto mb-7"></div>
        <h1 className="text-center text-xl md:text-4xl text-slate-700 font-semibold mb-7">
          Please enter the number on the certificate
        </h1>
        <div className="flex flex-col space-y-3 w-[55%] lg:w-[25%] md:w-[35%] mx-auto">
          <input
            type="text"
            className="outline-none border-2 border-[#c7ba70] p-2 h-[80px] md:h-[120px]"
            onChange={(e) => setCodeNumber(e.target.value)}
            value={codeNumber}
          />
          <button
            className="bg-[#c7ba70] py-3 rounded-sm"
            onClick={handleClick}
            type="submit"
          >
            Certificate of the query
          </button>
        </div>
      </div>
    </div>
  );
};

export default Check;
