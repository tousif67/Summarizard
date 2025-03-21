import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center z-0 py-16 sm:py-28 max-w-7xl lg:px-12 transition-all animate-in">
      <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-amber-100 via-amber-500 to-amber-800 animate-gradient-x group">
        <Badge
          variant={"secondary"}
          className="relative px-6 text-base font-medium rounded-full bg-white group-hover:bg-gray-50 transition-colors duration-300"
        >
          <Sparkles className="w-10 h-10 text-amber-500 animate-pulse" />
          <p className="text-base text-amber-500 font-bold">Powered by AI</p>
        </Badge>
      </div>

      <h1 className="text-3xl font-bold text-center py-6 mt-4">
        Transform PDF's into {""}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">concise</span>
          <span
            className="absolute inset-0 bg-amber-200/70 -rotate-2 rounded-lg transform -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>
        {""}
        summaries
      </h1>
      <h2 className="text-lg sm:text-xl lg:text-2xl text-center  px-4 lg:px-0 lg:max-w-xl text-gray-600 mt-4">
        Get a beautiful summary of your documents in seconds
      </h2>
      <div>
        <Button
          variant={"link"}
          className="text-white mt-6 text-base sm:text-lg lg:text-xl
           rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-10
            bg-linear-to-r from-slate-900 to-amber-500 hover:from-amber-500 hover:to-slate-900 hover:no-underline font-bold shadow-lg transition-all duration-300"
        >
          Try Summarizard
        </Button>
      </div>
    </section>
  );
}
