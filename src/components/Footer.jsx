import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#c7ba70] text-center py-3">
      {`Copyright © 2005-${new Date().getFullYear()}`} GRC - GEM RESEARCH CENTER
      <br /> RM18S 27/F HO KING COMM CTR 2-16 FAYUEN ST MONGKOK KL
    </div>
  );
};

export default Footer;
