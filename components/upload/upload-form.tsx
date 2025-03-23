"use client";
import { z } from "zod";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/upload-thing";
import { toast } from "sonner";

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

    try {
      const res = await startUpload([file]);
      if (res) {
        console.log("Upload response:", res[0]);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Upload failed";
      toast.error(errorMessage);
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      <UploadFormInput handleSubmit={handleSubmit} />
    </div>
  );
}
