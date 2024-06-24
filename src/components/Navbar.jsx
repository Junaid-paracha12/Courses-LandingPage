import React from "react";

const Navbar = ({ navbar: { icon, btn1, btn2, icon1, icon2 } }) => (
  <header className="nav-default">
    <nav className="app-container flex items-center justify-between">
      <img src={icon} alt="logo/icon" className="w-8 h-8" />

      <div className="flex items-center gap-6">
        <div className="bg-slate-300/20 py-1.5 px-3 rounded-xl bg-opacity-50 hover-theme flex items-center gap-0.5  hover:bg-slate-100/20">
          <img src={icon1} alt="icon" className="w-6 h-6" />
          <button className="text-white text-base md:text-sm ">{btn1}</button>
        </div>
        <button className="flex items-center gap-0.5 text-white px-3 py-1.5 rounded-xl bg-opacity-70 hover:bg-slate-100/10 hover-theme ">
          <img src={icon2} alt="icon" className="w-6 h-6" />
          <span className="text-base md:text-sm">{btn2}</span>
        </button>
      </div>
    </nav>
  </header>
);

export default Navbar;
