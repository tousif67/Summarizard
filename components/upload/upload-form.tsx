"use client";
import { z } from "zod";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/upload-thing";
import { toast } from "sonner";
import { generatePDFSummary } from "@/actions/upload-action";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine((file) => file.type === "application/pdf", "File must be a PDF"),
});

export default function UploadForm() {
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: (res) => {
      if (res) {
        toast.success("File uploaded successfully!");
        console.log("Upload completed:", res);
      }
    },
    onUploadError: (error: Error) => {
      toast.error(`Upload failed: ${error.message}`);
      console.error("Upload error:", error);
    },
    onUploadBegin: (fileName) => {
      toast.info(`Starting upload for ${fileName}`);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    const validateFields = schema.safeParse({ file });

    if (!validateFields.success) {
      toast.error(
        validateFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file"
      );
      return;
    }

    const res = await startUpload([file]);
    if (!res) {
      toast.error("Something went wrong");
      return;
    }
    console.log("Upload response:", res[0]);
    toast.message("Processing your file...");

    const transformedResponse = {
      serverData: {
        userId: res[0].serverData.userId,
        file: {
          url: res[0].serverData.file,
          name: res[0].name,
        },
      },
    };

    const summary = await generatePDFSummary(transformedResponse);
    console.log(summary);
  };
  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      <UploadFormInput handleSubmit={handleSubmit} />
    </div>
  );
}
