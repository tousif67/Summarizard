import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-gray-50 py-12 ">
      <div className="py-12 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to save hours of Reading time?
            </h2>
            <p className="text-gray-500 mx-auto max-w-xl">
              Transform lengthy documents into clear,actionable insights with
              Our AI-powered PDF summarizer.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Button
              variant={"link"}
              className="w-full min-[400px]:w-auto bg-linear-to-r
            from-slate-900 to-amber-500 hover:from-amber-500 hover:to-slate-900
            hover:text-white text-white transition-all duration-300 "
            >
              <Link
                href={"/#pricing"}
                className="flex items-center justify-center"
              >
                Get Started{""}
                <ArrowRight className="ml-2 h-4 w-6 animate-pulse" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
