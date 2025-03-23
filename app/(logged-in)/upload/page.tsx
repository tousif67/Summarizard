import { BGGradient } from "@/components/common/bg-gradient";
import Uploadheader from "@/components/upload/upload-header";
import UploadForm from "@/components/upload/upload-form";
export default function Page() {
  return (
    <section className="min-h-screen">
      <BGGradient />
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-10">
          <Uploadheader />
          <UploadForm />
        </div>
      </div>
    </section>
  );
}
