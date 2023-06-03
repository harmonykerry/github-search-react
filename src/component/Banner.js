import React from "react";
import desert from "../image/desert.png";

function Banner() {
  return (
    <div className="text-center py-4">
      <h1 className="my-2  p-2 border ">Github Explorer</h1>
      <h2 className="my-2  p-2 border ">
        An interactive tool to replace the vastness of Github magic.
      </h2>
      <div className="banner-image-container">
        <img src={desert} alt="Desert" className="banner-img"></img>
      </div>
    </div>
  );
}

export default Banner;
