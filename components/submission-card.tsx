"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import Image from "next/image";

const SubmissionCard = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | undefined>(undefined);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file);

    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setFileUrl(objectUrl);
    } else {
      setFileUrl("");
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("location", location);

    if (!name) {
      toast.error("Please enter name ");
      return;
    }

    if (!location) {
      toast.error("Please enter Location");
      return;
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        toast.error("Error sending request");
        setUploading(false);
        return;
      }

      setUploading(false);
      toast.success("Request sent successfully!");
      router.push("/appreciation");
    } catch (error) {
      toast.error("Error sending request");
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div className=" h-full w-full bg-white bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Send Help</CardTitle>
            <CardDescription>Fill the info of the person </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={onSubmit}
              className="grid w-full items-center gap-4"
            >
              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-medium leading-none ">
                  Name (optional)
                </label>
                <input
                  type="text"
                  placeholder="Name of the person"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Location
                </label>
                <input
                  type="text"
                  required={true}
                  placeholder="location of the person"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Image of the person
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  required={true}
                  accept="image/*"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="photo-container space-y-1.5">
                {fileUrl && file && (
                  <Image
                    width={240}
                    height={60}
                    src={fileUrl}
                    className="w-60 h-auto rounded-md"
                    alt="img"
                  />
                )}
              </div>
              <div className=" space-y-1.5">
                <button
                  type="submit"
                  disabled={!file || uploading}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 shadow"
                >
                  {uploading ? "Uploading..." : "Submit"}
                </button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SubmissionCard;
