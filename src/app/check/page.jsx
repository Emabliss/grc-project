"use client";
import Image from "next/image";

const Check = () => {
  return (
    <div className="min-h-[90vh]">
      <div className="h-[400px] relative">
        <Image
          src="/goldBg2.avif"
          alt=""
          fill
        />
      </div>
      <div className="pt-10 pb-20 md:pb-36 btw:pt-28">
        <h2 className="text-center text-2xl ">Certificate</h2>
        <div className="w-[90px] h-1 bg-[gold] mx-auto mb-7"></div>
        <h1 className="text-center text-xl md:text-4xl text-slate-700 font-semibold mb-7">
          Please enter the number on the certificate
        </h1>
        <div className="flex flex-col space-y-3 w-[55%] lg:w-[25%] md:w-[35%] mx-auto">
          <input
            type="text"
            className="outline-none border-2 border-[gold] p-2 h-[80px] md:h-[120px]"
          />
          <button className="bg-[gold] py-3 rounded-sm">
            Certificate of the query
          </button>
        </div>
      </div>
    </div>
  );
};

export default Check;
