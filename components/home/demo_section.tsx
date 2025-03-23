import { Donut } from "lucide-react";

export default function DemoSection() {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0
         -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(50% 0%,61% 35%, 98% 35%,68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
            className="relative left-[calc(50%+3rem)] 
          aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[180deg] 
          bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30
          sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div
            className="inline-flex items-center justify-center rounded-full
          bg-gray-600/20 p-1 shadow-md ring-1 ring-zinc-900/5"
          >
            <Donut className="h-8 w-10 text-amber-500" />
          </div>

          <div className="text-center mb-16">
            <h3
              className="text-2xl font-bold max-w-2xl mx-auto px-4 
          sm:px-6 lg:px-8"
            >
              Watch how Summarizard transforms{""}
              <span className=" px-2 bg-linear-to-r from-amber-500  to-amber-600 text-transparent bg-clip-text">
                this Next.js PDF
              </span>{" "}
              into an easy-to-read summary
            </h3>
          </div>
          <div
            className="flex justify-center items-center px-2 
          sm:px-4 lg:px-6"
          >
            {/* Summary viewer */}
          </div>
        </div>
      </div>
    </section>
  );
}
