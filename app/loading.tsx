export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" mx-auto max-w-[1440px] px-6 grid grid-cols-2 md:grid-cols-4 gap-1 lg:gap-4">
        <div className="w-[300px] h-[300px] bg-slate-400 loader"></div>
        <div className="w-[300px] h-[300px] bg-slate-400 loader"></div>
        <div className="w-[300px] h-[300px] bg-slate-400 loader"></div>
        <div className="w-[300px] h-[300px] bg-slate-400 loader"></div>
        <div className="w-[300px] h-[300px] bg-slate-400 loader"></div>
        <div className="w-[300px] h-[300px] bg-slate-400 loader"></div>
      </div>
    </div>
  );
}
