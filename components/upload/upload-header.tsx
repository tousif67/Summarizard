import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Uploadheader() {
  return (
    <section>
      <div className="text-center">
        <Badge
          variant="secondary"
          className="relative p-[4px] overflow-hidden rounded-full bg-amber-500"
        >
          <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-2 text-black animate-pulse" />
          <p className="text-base text-white font-bold">
            AI-Powered Content Creation
          </p>
        </Badge>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Start Uploading Your PDF's</h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Upload your PDF's and let the AI do the magic!🚀
        </p>
      </div>
    </section>
  );
}
