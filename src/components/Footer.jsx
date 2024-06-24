import React from "react";

const Footer = ({ footer: { icon, logo, title, text } }) => (
  <>
    <footer className="bg-gradient-to-b from-indigo-800 to-violet-700 w-full h-auto ">
      <div className="flex justify-center w-7/12 lg:w-[95vw] m-auto mt-9 ">
        <div className="flex flex-col my-7">
          <div className="flex items-center justify-center gap-9">
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="w-6 h-6" />
              <h1 className="text-white text-2xl md:text-xl sm:text-lg font-bold">
                {title}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              {icon?.map((v, i) => (
                <img
                  key={i}
                  src={v.iconscr}
                  alt="logo"
                  className="w-6 h-6 md:w-4 md:h-4" />
              ))}
            </div>
          </div>
          <h1 className="text-white text-base md:text-sm sm:text-xs mt-2">
            {text}
          </h1>
        </div>
        <div></div>
      </div>
    </footer>
  </>
);

export default Footer;
