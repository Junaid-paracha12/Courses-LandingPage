import React from "react";

const Hero = ({ heroAPI: { text, title, subtitle, icon } }) => {
  return (
    <>
      <div className="bg-gradient-to-b from-indigo-800 to-violet-700 w-full h-auto">
        <div className="app-container grid">
          <div className="grid mt-36 mb-32 md:mt-28 md:mb-24 lg:justify-items-center lg:text-center">
            <h3 className="text-slate-300 text-base md:text-sm sm:text-xs">
              {text}
            </h3>
            <h1 className="text-white text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-bold max-w-sm my-2">
              {title}
            </h1>
            <video src=""></video>
            <div
              className="flex items-center lg:flex-col md:gap-3
          justify-between "
            >
              <h3 className="text-slate-300 text-base md:text-sm sm:text-xs max-w-sm md:text-center lg:text-center">
                {subtitle}
              </h3>
              <div className="flex items-center gap-4 mt-0 lg:mt-2">
                {icon?.map((v, i) => (
                  <img
                    key={i}
                    src={v.iconscr}
                    alt="icon/logo"
                    className="w-10 h-10 md:w-8 md:h-8 sm:h-7 sm:w-7 xsm:h-6 xsm:w-6 object-cover hover-theme"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
