"use client";
import Image from "next/image";
import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

const Certificate = () => {
  const { codeNumber } = useAuth();

  // const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.removeItem("codeNumber");
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    }, 1800000);
    return () => clearTimeout(timeoutId);
  }, []);

  // if (!codeNumber) {
  //   router.push("/");
  //   return;
  // }

  return (
    <ProtectedRoute>
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
            GRC GEMOLOGICAL REPORT
          </h2>
          <p className="my-2">11/05/2020</p>
          <div className="flex flex-col space-y-3 pt-1 pl-1 bg-gray-100">
            <div className="flex justify-between w-[90%] hover:bg-gray-50">
              <span className=" flex-1">GRC Report Number</span>
              <span className=" flex-1 font-semibold">{codeNumber}</span>
            </div>
            {/* <div className="flex justify-between w-[90%] hover:bg-gray-50">
              <span className="flex-1">Shape and Cutting Style</span>
              <span className="flex-1 font-semibold">ROUND BRILLIANT</span>
            </div> */}
            <div className="flex justify-between w-[90%] hover:bg-gray-50">
              <span className="flex-1">Measurements</span>
              <span className="flex-1 font-semibold">
                7.06d - 7.16 X 4.59 MM
              </span>
            </div>
            <div className="flex justify-between w-[90%] hover:bg-gray-50">
              <span className="flex-1">Cut</span>
              <span className="flex-1 font-semibold">Brilliant</span>
            </div>
            {/* <div className="flex justify-between w-[90%]">
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
            </div> */}
          </div>
          <h2 className="mt-4 font-semibold">GRADING RESULTS</h2>
          <div className="flex flex-col space-y-3 pt-1 pl-1 bg-gray-100">
            <div className="flex justify-between w-[90%] hover:bg-gray-50">
              <span className="flex-1">Carat Weight</span>
              <span className="flex-1 font-semibold">1.50 CARAT</span>
            </div>
            <div className="flex justify-between w-[90%] hover:bg-gray-50">
              <span className="flex-1">Color Grade</span>
              <span className="flex-1 font-semibold">H-1</span>
            </div>
            <div className="flex justify-between w-[90%] hover:bg-gray-50">
              <span className="flex-1">Clarity Grade</span>
              <span className="flex-1 font-semibold">WS</span>
            </div>
            <div className="flex justify-between w-[90%] hover:bg-gray-50">
              <span className="flex-1">Cut Grade</span>
              <span className="flex-1 font-semibold">V. GOOD</span>
            </div>
          </div>
          <h2 className="mt-4 font-semibold">ADDITIONAL GRADING INFORMATION</h2>
          <div className="flex flex-col space-y-3 pt-1 pl-1 bg-gray-100">
            <div className="flex justify-between w-[90%] hover:bg-gray-50">
              <span className="flex-1">Polish</span>
              <span className="flex-1 font-semibold">EXCELLENT</span>
            </div>
            <div className="flex justify-between w-[90%] hover:bg-gray-50">
              <span className="flex-1">Symmetry</span>
              <span className="flex-1 font-semibold">GOOD</span>
            </div>
            <div className="flex justify-between w-[90%] hover:bg-gray-50">
              <span className="flex-1">Fluorescence</span>
              <span className="flex-1 font-semibold">NONE</span>
            </div>
            <div className="flex justify-between w-[90%] hover:bg-gray-50">
              <span className="flex-1">Inscription(s)</span>
              <span className="flex-1 font-semibold">
                lagbaronGrc4256725623
              </span>
            </div>
          </div>
          <p className="mt-8">
            Comments: This laboratory grown diamond was created by <br /> high
            pressure high temperature process(HPHT). <br /> Type II
          </p>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Certificate;
