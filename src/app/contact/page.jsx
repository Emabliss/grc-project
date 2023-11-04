import Image from "next/image";
import React from "react";

const Contact = () => {
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
        <h2 className="text-center text-2xl ">Contact</h2>
        <div className="w-[90px] h-1 bg-[#c7ba70] mx-auto mb-7"></div>
        <div className="w-1/2 mx-auto text-center space-y-2">
          <h2>GRC - GEM RESEARCH CENTER</h2>
          <p>Email：lgem@gemresearchcenter.com</p>
          <h2>ADD：RM18S 27/F HO KING COMM CTR 2-16 FAYUEN ST MONGKOK KL</h2>
          <p>https://gemresearchcenter.com/</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
