import React from "react";

const Teams = ({ teamAPI: { title, logo } }) => {
  return (
    <>
      <div className="app-container">
        <div className="text-center my-5">
          <h1 className="text-2xl md:text-xl sm:text-lg font-bold">{title}</h1>
        </div>
        <div className="flex items-center  justify-center gap-4 overflow-x-scroll scroll-smooth scroll-hidden">
          {logo?.map((v, i) => (
            <img
              key={i}
              src={v.logoscr}
              alt="brand/logo"
              className="w-10 h-10"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
