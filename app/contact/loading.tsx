import React from "react";

export default function loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="mx-auto max-w-[1440px] px-6 grid grid-cols-2 md:grid-row-4 gap-1 lg:gap-6">
        <div className="w-[300px] lg:w-[600px] h-[50px] bg-slate-400 loader"></div>
        <div className="w-[300px] lg:w-[600px] h-[50px] bg-slate-400 loader"></div>
        <div className="w-[300px] lg:w-[600px] h-[50px] bg-slate-400 loader"></div>
        <div className="w-[300px] lg:w-[600px] h-[50px] bg-slate-400 loader"></div>
        <div className="w-[300px] lg:w-[600px] h-[50px] bg-slate-400 loader"></div>
        <div className="w-[300px] lg:w-[600px] h-[50px] bg-slate-400 loader"></div>
        <div className="w-[300px] lg:w-[600px] h-[50px] bg-slate-400 loader place-self-end"></div>
      </div>
    </div>
  );
}
