import React from "react";

export default function loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" mx-auto max-w-[1440px] px-6 grid grid-cols-2 md:grid-cols-4 gap-1 lg:gap-4">
        <div className="w-[300px] h-[300px] bg-slate-400 loader rounded-[50%]"></div>
        <div className="w-[300px] lg:w-[1050px] h-[300px] bg-slate-400 loader"></div>
      </div>
    </div>
  );
}
