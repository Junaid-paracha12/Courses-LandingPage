import React from "react";
import Item from "./Item";

const Dashboard = ({ dashboardAPI: { items, accessicon, text, time } }) => (
  <>
    <div className="app-container">
      <div className="h-auto relative bottom-20 py-8 px-3 bg-white bg-opacity-70 rounded-xl shadow-md">
        <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {items?.map((item, i) => (
            <Item {...item} key={i} />
          ))}
        </div>
        <div className="hover-theme flex justify-center mt-14">
          <div className="button-theme bg-gradient-to-b from-slate-200/5 to-slate-300/20 flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg hover:shadow-slate-300 border-white border-2">
            <span className="bg-gradient-to-b from-indigo-500 to-violet-700 rounded-full p-2">
              <img src={accessicon} alt="ion" className="w-6 h-6" />
            </span>
            <button type="button" className="flex flex-col">
              <span className="font-semibold base">{text}</span>
              <span className="text-slate-400 text-sm">{time}</span>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  </>
);

export default Dashboard;
