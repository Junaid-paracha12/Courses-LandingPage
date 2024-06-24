import React from "react";

const Item = ({
  color,
  shadow,
  title,
  text,
  btn,
  img,
  person,
  icon,
  plan,
  price,
  subicon,
}) => (
  <>
    <div
      className={`relative h-auto w-full pt-3 pb-5 px-4 rounded-xl  hover-theme bg-gradient-to-b ${color} ${shadow}`}
    >
      <div className="absolute right-4 top-3 grid gap-2">
        <img
          src={icon}
          alt="logo/icon"
          className="w-8 h-8 rounded-full object-cover hover-theme"
        />
        <img
          src={person}
          alt="person/img"
          className="hover-theme w-8 h-8 rounded-full object-cover"
        />
      </div>
      <div className="grid justify-items-center my-7 ">
        <img
          src={img}
          alt="img/design"
          className="w-auto h-auto object-cover  "
        />
      </div>
      <div className="grid justify-items-center text-center">
        <h1 className="text-white text-xl md:text-lg font-bold">{title}</h1>
      </div>
      <div className="grid justify-items-center items-center md:text-center">
        <h3 className="text-slate-200/60 text-sm sm:text-xs text-center my-2">
          {text}
        </h3>
      </div>
      <div className="grid justify-items-center mb-9">
        <p className="text-slate-100/50 text-base md:text-sm sm:text-xs">
          <u>{plan}</u>
        </p>
      </div>
      <div className="absolute bottom-3">
        <div className="button-theme bg-white px-2 py-1 rounded-full flex items-center gap-0.5">
          <span className="bg-gradient-to-b from-indigo-800 to-violet-700 rounded-full p-1">
            <img src={subicon} alt="" className="w-4 h-4 " />
          </span>
          <button className="text-sm md:text-xs font-semibold" type="button">
            {btn}
          </button>
        </div>
      </div>
      <div className="absolute bottom-3 right-3">
        <h3 className="hover-theme bg-gradient-to-b from-indigo-800 to-violet-700 rounded-full px-2 py-1 text-white">
          {price}
        </h3>
      </div>
    </div>
  </>
);

export default Item;
