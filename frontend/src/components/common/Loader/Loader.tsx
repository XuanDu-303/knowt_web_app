import React from "react";
import { LoaderApp } from "@/assets/icons";
import "./Loader.css";

const Loader: React.FC = () => {
  // const dots = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className=" min-h-screen min-w-full flex justify-center items-center">
      {/* <div className="loader">
        {dots.map((_, i) => (
          <div key={i} className="dot" />
        ))}
      </div> */}
      <img src={LoaderApp} alt="loader" />
    </div>
  );
};

export default Loader;
