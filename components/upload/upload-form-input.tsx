"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
interface UploadFormInputProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export default function UploadFormInput({
  handleSubmit,
}: UploadFormInputProps) {
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex justify-end items-center gap-2">
        <Input
          type="file"
          id="file"
          name="file"
          accept="application/pdf"
          required
          className=""
        />
        <Button>Upload your PDF</Button>
      </div>
    </form>
  );
}
