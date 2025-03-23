import { ReactNode } from "react";
import { BookOpen, BrainCircuit, FileText, MoveRight } from "lucide-react";

type Step = {
  icon: ReactNode;
  label: string;
  description: string;
};

export default function HowItWorksSection() {
  const steps: Step[] = [
    {
      icon: <FileText className="h-12 w-12 text-amber-500" />,
      label: "Upload your PDF",
      description: "Simply drag and drop your PDF file or click to upload",
    },
    {
      icon: <BrainCircuit className="h-12 w-12 text-amber-500" />,
      label: "AI Analysis",
      description: "Our advanced AI processes and analyzes your PDF instantly",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-amber-500" />,
      label: "Summary",
      description: "Receive a concise summary of your PDF in seconds",
    },
  ];
  return (
    <section className="relative overflow-hidden -mt-20">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-full 
        -translate-x-1/2 rotate-[30deg] bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 
        opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: `polygon(50% 0%,61% 35%, 98% 35%,68% 57%,
               79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)`,
            }}
          />
        </div>
        <div className="text-center mb-16">
          <h2 className="font-bold  uppercase text-amber-500 text-xl">
            How it works
          </h2>
          <h3 className="mt-2 text-2xl font-bold text-gray-600 mx-auto max-w-xl">
            Transform any pdf into an easy-to-digest summary in three simple
            steps
          </h3>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-w-6xl 
        mx-auto relative"
        >
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-stretch">
              <StepItem {...step} />
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                  <MoveRight
                    size={32}
                    strokeWidth={1.5}
                    className="text-amber-500"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ icon, label, description }: Step) {
  return (
    <div
      className="relative p-6 bg-white/5 backdrop-blur-xs border border-white/5 rounded-2xl
     shadow-md hover:border-amber-500/50 transition-colors group w-full"
    >
      <div className="flex flex-col gap-4 h-full items-center">
        <div
          className="flex items-center justify-center h-20 w-20 rounded-2xl mx-auto
           bg-linear-to-br from-amber-500/10 via-amber-500/15 to-amber-500/20 transition-colors shadow-inner"
        >
          <div className="text-amber-500">{icon}</div>
        </div>
        <div className="flex flex-col gap-2 text-center justify-between">
          <h4 className="text-lg font-medium text-gray-600">{label}</h4>
          <p className="text-gray-600 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}
